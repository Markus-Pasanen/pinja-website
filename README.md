# Jalkaterapia Pinja Website

> Official website for Jalkaterapia Pinja - Professional foot therapy services in Varkaus, Finland.

**Live Website:** [jalkaterapiapinja.fi](https://jalkaterapiapinja.fi)

## Overview

This is a modern, responsive, fully static website built for Jalkaterapia Pinja, showcasing professional foot therapy services. The website provides comprehensive information about services, enables easy contact and appointment booking, and maintains a professional online presence.

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3 (vanilla)** - All styling in `style.css`, no framework
- **Vanilla JavaScript** - Interactive components and functionality
- **Web3Forms** - Contact form backend with hCaptcha spam protection
- **Open Graph / Twitter Cards** - Social media sharing metadata
- **JSON-LD Schema** - LocalBusiness structured data for SEO

## Project Structure

```
pinja-website/
├── index.html              # Homepage
├── palvelut.html           # Services
├── esittely.html           # About
├── yhteystiedot.html       # Contact
├── hinnasto.html           # Pricing
├── maksutavat.html         # Payment methods
├── toimitusehdot.html      # Terms of service
├── tietosuojaseloste.html  # Privacy policy
├── main.js                 # JavaScript logic
├── style.css               # Custom styles
├── scripts/
│   └── fetch-facebook-posts.mjs  # Builds post JSON from the RSS feed
├── .github/
│   └── workflows/
│       └── facebook-feed.yml     # Daily Facebook feed update
├── dev/
│   ├── server.js            # Local dev server (Node, zero deps)
│   └── out.txt              # Dev server log
├── public/
│   ├── data/
│   │   └── facebook-posts.json  # Latest Facebook posts (generated)
│   ├── favicons/            # Favicons, app icons, site.webmanifest
│   ├── icons/               # UI SVG icons
│   ├── images/
│   │   ├── brand/           # Logo and social share image
│   │   ├── facebook/        # Downloaded Facebook post images
│   │   ├── payments/        # Payment provider logos
│   │   ├── people/          # Portrait photography
│   │   └── services/        # Service photography
│   ├── robots.txt
│   └── sitemap.xml
└── README.md
```

## Local Development

Since this is a fully static website with no build steps, any HTTP server works:

```bash
# Node dev server (zero dependencies)
node dev/server.js
# → http://localhost:3000

# Python
python -m http.server 8000
# → http://localhost:8000
```

Requires no npm install, no build step.

## Facebook feed (Ajankohtaista)

The homepage cards are read from `public/data/facebook-posts.json` by `main.js`. A scheduled GitHub Action (`.github/workflows/facebook-feed.yml`) fetches this RSS feed once a day:

```
https://rss.app/feeds/ccdznoabxNawUrUP.xml
```

It parses the three newest posts, downloads their images into `public/images/facebook/`, and commits the updated JSON. No Facebook API, access token, or repository secret is used. The homepage renders the three posts in a responsive grid with equal-height cards.

### Changing the feed

The RSS URL is configured in:

- `.github/workflows/facebook-feed.yml` (`FACEBOOK_RSS_URL` environment variable)
- `scripts/fetch-facebook-posts.mjs` (fallback default)

If you regenerate the feed in rss.app, update both places.

### Updating manually

Run **Actions → Update Facebook feed → Run workflow** in GitHub, or locally:

```bash
FACEBOOK_RSS_URL="https://rss.app/feeds/ccdznoabxNawUrUP.xml" node scripts/fetch-facebook-posts.mjs
```

If the feed is unavailable, the script exits with an error and leaves the existing JSON untouched. The site keeps showing the last good snapshot. If the JSON is missing or empty, the homepage falls back to a "follow on Facebook" card.

> Note: GitHub pauses scheduled workflows after 60 days without repository activity. Running the workflow manually re-enables it.

> If you already created an `FB_PAGE_TOKEN` secret for the earlier Graph API version, you can delete it — it is no longer used.

## Hosting

**Production:** Hosted on GitHub Pages. The live site is at [jalkaterapiapinja.fi](https://jalkaterapiapinja.fi).

SEO files (`robots.txt`, `sitemap.xml`) are located in the `public/` directory and should be served at the root of your domain. The sitemap includes all 22 site pages with clean URLs and priority rankings. Each page has `<link rel="canonical">`, Open Graph metadata, and Twitter Card tags for social sharing. The homepage includes JSON-LD structured data (`LocalBusiness` schema) with address, phone, email, social links, and service area.

## License

No open source license is granted. All rights reserved by Jalkaterapia Pinja. The source is publicly available for GitHub Pages hosting, but you may not copy, modify, or redistribute this code without permission.

---

## Support

For questions or support regarding this website:

- **Business Inquiries**: [jalkaterapia.pinja@gmail.com](mailto:jalkaterapia.pinja@gmail.com)

---

<div align="center">

**Built for Jalkaterapia Pinja**

[Website](https://jalkaterapiapinja.fi) • [Instagram](https://www.instagram.com/jalkaterapiapinja/) • [Facebook](https://www.facebook.com/profile.php?id=61573830269174)

</div>
