import { createHash } from 'node:crypto';
import { mkdir, readFile, readdir, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const RSS_URL =
  process.env.FACEBOOK_RSS_URL ||
  'https://rss.app/feeds/ccdznoabxNawUrUP.xml';
const MAX_POSTS = 3;

const OUTPUT_FILE = path.join('public', 'data', 'facebook-posts.json');
const IMAGE_DIR = path.join('public', 'images', 'facebook');

main().catch((error) => {
  console.error(`Facebook feed update failed: ${error.message}`);
  process.exitCode = 1;
});

async function main() {
  const response = await fetch(RSS_URL, {
    headers: { 'user-agent': 'Mozilla/5.0' },
  });

  if (!response.ok) {
    console.error(`RSS request failed with ${response.status} for ${RSS_URL}`);
    process.exitCode = 1;
    return;
  }

  const xml = await response.text();
  const feed = parseRss(xml);

  const items = feed.items
    .filter((item) => item.text || item.imageUrls.length > 0)
    .sort(
      (a, b) => (Date.parse(b.pubDate) || 0) - (Date.parse(a.pubDate) || 0)
    )
    .slice(0, MAX_POSTS);

  if (items.length === 0) {
    console.log('The RSS feed has no usable posts. Keeping the existing feed.');
    return;
  }

  await mkdir(IMAGE_DIR, { recursive: true });

  const previous = await readJson(OUTPUT_FILE);
  const previousPosts = new Map(
    (previous?.posts || []).map((post) => [post.id, post])
  );
  const usedImages = new Set();

  const feedPosts = [];

  for (const item of items) {
    const id =
      item.guid ||
      createHash('sha1')
        .update(item.link || item.text || '')
        .digest('hex');
    const previousPost = previousPosts.get(id);

    let image = null;

    for (const imageUrl of item.imageUrls) {
      image = await downloadImage(imageUrl, id);

      if (image) {
        break;
      }
    }

    if (
      !image &&
      previousPost?.image &&
      previousPost.image.startsWith('public/images/facebook/')
    ) {
      image = previousPost.image;
    }

    if (image) {
      usedImages.add(path.basename(image));
    }

    feedPosts.push({
      id,
      message: item.text,
      createdTime: toIsoDate(item.pubDate),
      permalink: item.link || feed.link,
      image,
    });
  }

  await removeStaleImages(usedImages);

  const payload = {
    updatedAt: new Date().toISOString(),
    page: {
      name:
        feed.creator ||
        feed.title.replace(/\s+Page$/i, '') ||
        'Jalkaterapia Pinja',
      url:
        feed.link ||
        'https://www.facebook.com/profile.php?id=61573830269174',
    },
    posts: feedPosts,
  };

  if (previous && comparable(previous) === comparable(payload)) {
    console.log('Facebook feed is unchanged.');
    return;
  }

  await mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
  await writeFile(OUTPUT_FILE, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  console.log(`Wrote ${feedPosts.length} Facebook posts to ${OUTPUT_FILE}.`);
}

function parseRss(xml) {
  const channelMatch = xml.match(/<channel\b[^>]*>([\s\S]*?)<\/channel>/i);
  const channel = channelMatch ? channelMatch[1] : xml;
  const items = [];
  const itemPattern = /<item\b[^>]*>([\s\S]*?)<\/item>/gi;
  let match;

  while ((match = itemPattern.exec(channel))) {
    const itemXml = match[1];
    const description = getRawTag(itemXml, 'description');

    items.push({
      guid: getTextTag(itemXml, 'guid'),
      text: htmlToText(description) || htmlToText(getRawTag(itemXml, 'title')),
      // Keep the link exactly as RSS provides it. The feed uses
      // m.facebook.com post URLs, which open correctly in the Facebook app;
      // rewriting them to www.facebook.com can land on the app home feed.
      link: getTextTag(itemXml, 'link'),
      creator: getTextTag(itemXml, 'dc:creator'),
      pubDate: getTextTag(itemXml, 'pubDate'),
      imageUrls: [
        getAttribute(itemXml, 'media:content', 'url'),
        getImageFromHtml(description),
      ].filter((url, index, urls) => url && urls.indexOf(url) === index),
    });
  }

  return {
    title: getTextTag(channel, 'title'),
    link: normaliseLink(getTextTag(channel, 'link')),
    creator: items[0]?.creator || getTextTag(channel, 'dc:creator'),
    items,
  };
}

function getRawTag(xml, tag) {
  const pattern = new RegExp(
    `<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`,
    'i'
  );
  const match = xml.match(pattern);

  if (!match) return '';

  const value = match[1].trim();
  const cdata = value.match(/^<!\[CDATA\[([\s\S]*?)\]\]>$/);

  return (cdata ? cdata[1] : value).trim();
}

function getTextTag(xml, tag) {
  return decodeEntities(getRawTag(xml, tag));
}

function getAttribute(xml, tag, attribute) {
  const tagMatch = xml.match(new RegExp(`<${tag}\\b[^>]*>`, 'i'));

  if (!tagMatch) return '';

  const attributeMatch = tagMatch[0].match(
    new RegExp(`\\b${attribute}="([^"]*)"`, 'i')
  );

  return attributeMatch ? decodeEntities(attributeMatch[1]) : '';
}

function getImageFromHtml(html) {
  const match = html.match(/<img\b[^>]*\bsrc="([^"]+)"/i);
  return match ? decodeEntities(match[1]) : '';
}

function htmlToText(html) {
  const text = String(html)
    .replace(/<img\b[^>]*>/gi, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(p|div|li|h[1-6])>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/\r/g, '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n[ \t]+/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return decodeEntities(text);
}

function decodeEntities(value) {
  return String(value)
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) =>
      String.fromCodePoint(parseInt(code, 16))
    )
    .replace(/&nbsp;/gi, ' ')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&apos;/gi, "'")
    .replace(/&amp;/gi, '&');
}

function normaliseLink(link) {
  return link.replace(
    /^https:\/\/m\.facebook\.com\//i,
    'https://www.facebook.com/'
  );
}

function toIsoDate(value) {
  if (!value) return null;

  const date = new Date(value);
  return isNaN(date.getTime()) ? null : date.toISOString();
}

async function downloadImage(url, postId) {
  const fileId = String(postId).replace(/[^a-zA-Z0-9_-]/g, '_');

  try {
    const response = await fetch(url, {
      headers: { 'user-agent': 'Mozilla/5.0' },
    });

    if (!response.ok) {
      console.warn(`Image download failed for ${postId}: ${response.status}`);
      return null;
    }

    const contentType = (response.headers.get('content-type') || '').split(';')[0];

    if (!contentType.startsWith('image/')) {
      console.warn(
        `Image download failed for ${postId}: unexpected content type ${contentType || 'unknown'}`
      );
      return null;
    }

    const extension =
      {
        'image/png': 'png',
        'image/webp': 'webp',
        'image/gif': 'gif',
        'image/avif': 'avif',
      }[contentType] || 'jpg';
    const filename = `${fileId}.${extension}`;
    const buffer = Buffer.from(await response.arrayBuffer());

    if (buffer.length === 0) {
      console.warn(`Image download failed for ${postId}: empty file`);
      return null;
    }

    await writeFile(path.join(IMAGE_DIR, filename), buffer);

    return `public/images/facebook/${filename}`;
  } catch (error) {
    console.warn(`Image download failed for ${postId}: ${error.message}`);
    return null;
  }
}

async function removeStaleImages(keep) {
  let files = [];

  try {
    files = await readdir(IMAGE_DIR);
  } catch {
    return;
  }

  for (const file of files) {
    if (file === '.gitkeep' || keep.has(file)) {
      continue;
    }

    await unlink(path.join(IMAGE_DIR, file)).catch(() => {});
  }
}

async function readJson(file) {
  try {
    return JSON.parse(await readFile(file, 'utf8'));
  } catch {
    return null;
  }
}

function comparable(payload) {
  return JSON.stringify({
    page: payload.page,
    posts: payload.posts,
  });
}
