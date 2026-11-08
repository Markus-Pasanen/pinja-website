(function () {
  'use strict';

  /* ================================================================
     Mobile menu toggle
     ================================================================ */
  var menuToggle = document.getElementById('menu-toggle');
  var menuOverlay = document.getElementById('mobile-menu-overlay');
  var menuLinks = document.querySelectorAll('.mobile-menu-link');

  function openMenu() {
    if (menuOverlay) {
      menuOverlay.classList.remove('opacity-0', 'pointer-events-none');
      menuOverlay.classList.add('opacity-100', 'pointer-events-auto');
      document.body.style.overflow = 'hidden';
    }
    if (menuToggle) {
      menuToggle.classList.add('open');
      menuToggle.setAttribute('aria-expanded', 'true');
      menuToggle.setAttribute('aria-label', 'Sulje valikko');
    }
  }

  function closeMenu() {
    if (menuOverlay) {
      menuOverlay.classList.add('opacity-0', 'pointer-events-none');
      menuOverlay.classList.remove('opacity-100', 'pointer-events-auto');
      document.body.style.overflow = '';
    }
    if (menuToggle) {
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Avaa valikko');
    }
  }

  function toggleMenu() {
    var isOpen = menuToggle && menuToggle.classList.contains('open');
    if (isOpen) { closeMenu(); } else { openMenu(); }
  }

  if (menuToggle) { menuToggle.addEventListener('click', toggleMenu); }
  if (menuLinks) {
    menuLinks.forEach(function (link) { link.addEventListener('click', closeMenu); });
  }

  /* ================================================================
     Navbar glass effect on scroll
     ================================================================ */
  var navbar = document.getElementById('navbar');
  function handleScroll() {
    if (!navbar) return;
    if (window.scrollY > 20) {
      navbar.classList.add('nav-glass');
    } else {
      navbar.classList.remove('nav-glass');
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ================================================================
     Scroll-triggered animations (Intersection Observer)
     ================================================================ */
  function initAnimations() {
    var animEls = document.querySelectorAll('.fade-in, .fade-in-right, .fade-in-left, .fade-in-scale');
    if (animEls.length === 0) return;
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      animEls.forEach(function (el) { observer.observe(el); });
    } else {
      animEls.forEach(function (el) { el.classList.add('visible'); });
    }
  }
  initAnimations();

  /* ================================================================
     Current year for copyright
     ================================================================ */
  var yearEls = document.querySelectorAll('.js-current-year');
  var currentYear = new Date().getFullYear();
  yearEls.forEach(function (el) { el.textContent = currentYear; });

  /* ================================================================
     Facebook feed
     Posts are written to public/facebook-posts.json by the scheduled
     GitHub Action. The page only fetches that static JSON.
     ================================================================ */
  var FACEBOOK_PAGE_URL = 'https://www.facebook.com/profile.php?id=61573830269174';
  var lastDialogTrigger = null;

  function safeLink(value, fallback) {
    return typeof value === 'string' && /^https?:\/\//i.test(value)
      ? value
      : fallback;
  }

  function safeImage(value) {
    return typeof value === 'string' && /^(https?:\/\/|public\/)/i.test(value)
      ? value
      : null;
  }

  function formatPostDate(value) {
    if (!value) return '';
    var date = new Date(value);
    if (isNaN(date.getTime())) return '';

    try {
      return new Intl.DateTimeFormat('fi-FI', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(date);
    } catch (error) {
      return date.toLocaleDateString('fi-FI');
    }
  }

  function splitPostText(value) {
    var lines = String(value || '')
      .replace(/\r\n?/g, '\n')
      .split('\n');
    var title = '';

    while (lines.length && !title) {
      title = lines.shift().trim();
    }

    return {
      title: title,
      body: lines.join('\n').trim(),
    };
  }

  function createFacebookIcon(size) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('width', size);
    svg.setAttribute('height', size);
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'currentColor');
    svg.setAttribute('aria-hidden', 'true');

    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute(
      'd',
      'M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 2.017 9 4.667V8z'
    );
    svg.appendChild(path);
    return svg;
  }

  function createFacebookCard(post, pageUrl, index) {
    var permalink = safeLink(post.permalink, pageUrl);
    var image = safeImage(post.image);
    var parts = splitPostText(post.message);

    var card = document.createElement('article');
    card.className = 'fb-feed-card';
    card.style.animationDelay = index * 60 + 'ms';

    if (image) {
      var media = document.createElement('a');
      media.className = 'fb-feed-card-media';
      media.href = permalink;
      media.rel = 'noopener noreferrer';
      media.tabIndex = -1;
      media.setAttribute('aria-hidden', 'true');

      var imageEl = document.createElement('img');
      imageEl.src = image;
      imageEl.alt = '';
      imageEl.loading = 'lazy';
      imageEl.addEventListener('error', function () {
        media.hidden = true;
      });

      media.appendChild(imageEl);
      card.appendChild(media);
    }

    var body = document.createElement('div');
    body.className = 'fb-feed-card-body';

    if (post.createdTime) {
      var date = document.createElement('time');
      date.className = 'fb-feed-card-date';
      date.dateTime = post.createdTime;
      date.textContent = formatPostDate(post.createdTime);
      body.appendChild(date);
    }

    if (parts.title) {
      var title = document.createElement('h3');
      title.className = 'fb-feed-card-title';
      var titleLink = document.createElement('a');
      titleLink.href = permalink;
      titleLink.rel = 'noopener noreferrer';
      titleLink.textContent = parts.title;
      title.appendChild(titleLink);
      body.appendChild(title);
    }

    var toggle = null;

    if (parts.body) {
      var textWrap = document.createElement('div');
      textWrap.className = 'fb-feed-card-text-wrap';

      var text = document.createElement('div');
      text.className = 'fb-feed-card-text';
      text.textContent = parts.body;

      textWrap.appendChild(text);
      body.appendChild(textWrap);

      toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'fb-feed-card-toggle';
      toggle.textContent = 'Lue lisää';
      toggle.setAttribute('aria-haspopup', 'dialog');
      toggle.setAttribute('aria-controls', 'facebook-post-dialog');

      toggle.addEventListener('click', function () {
        openPostDialog(post, toggle);
      });
    }

    var footer = document.createElement('div');
    footer.className = 'fb-feed-card-footer';

    if (toggle) {
      footer.appendChild(toggle);
    }

    var link = document.createElement('a');
    link.className = 'fb-feed-card-link';
    link.href = permalink;
    link.rel = 'noopener noreferrer';
    link.appendChild(document.createTextNode('Avaa Facebookissa'));
    link.appendChild(createFacebookIcon(14));
    footer.appendChild(link);

    body.appendChild(footer);
    card.appendChild(body);
    return card;
  }

  function setupCardPreviews(feed) {
    feed.querySelectorAll('.fb-feed-card').forEach(function (card) {
      var text = card.querySelector('.fb-feed-card-text');
      var toggle = card.querySelector('.fb-feed-card-toggle');

      if (!text || !toggle) return;

      var overflowing = text.scrollHeight > text.clientHeight + 1;

      card.classList.toggle('is-collapsible', overflowing);
      toggle.hidden = !overflowing;
    });
  }

  function openPostDialog(post, trigger) {
    var dialog = document.getElementById('facebook-post-dialog');
    var content = document.getElementById('facebook-post-dialog-content');

    if (!dialog || !content || dialog.open) return;

    var parts = splitPostText(post.message);
    var image = safeImage(post.image);
    var permalink = safeLink(post.permalink, FACEBOOK_PAGE_URL);

    content.innerHTML = '';

    if (image) {
      var dialogImage = document.createElement('img');
      dialogImage.className = 'fb-post-dialog-image';
      dialogImage.src = image;
      dialogImage.alt = '';
      dialogImage.addEventListener('error', function () {
        dialogImage.hidden = true;
      });
      content.appendChild(dialogImage);
    }

    var body = document.createElement('div');
    body.className = 'fb-post-dialog-body';

    if (post.createdTime) {
      var date = document.createElement('time');
      date.className = 'fb-feed-card-date';
      date.dateTime = post.createdTime;
      date.textContent = formatPostDate(post.createdTime);
      body.appendChild(date);
    }

    var title = document.createElement('h3');
    title.id = 'facebook-post-dialog-title';
    title.className = 'fb-post-dialog-title';
    title.textContent = parts.title || 'Facebook-julkaisu';
    body.appendChild(title);

    if (parts.body) {
      var text = document.createElement('div');
      text.className = 'fb-post-dialog-text';
      text.textContent = parts.body;
      body.appendChild(text);
    }

    var footer = document.createElement('div');
    footer.className = 'fb-post-dialog-footer';

    var link = document.createElement('a');
    link.className = 'fb-post-dialog-link';
    link.href = permalink;
    link.rel = 'noopener noreferrer';
    link.appendChild(document.createTextNode('Avaa Facebookissa'));
    link.appendChild(createFacebookIcon(14));
    footer.appendChild(link);

    body.appendChild(footer);
    content.appendChild(body);

    lastDialogTrigger = trigger;
    document.body.classList.add('fb-dialog-open');

    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else {
      dialog.setAttribute('open', '');
    }
  }

  function initPostDialog() {
    var dialog = document.getElementById('facebook-post-dialog');
    var close = document.getElementById('facebook-post-dialog-close');

    if (!dialog || !close) return;

    function closeDialog() {
      if (typeof dialog.close === 'function') {
        dialog.close();
      } else {
        dialog.removeAttribute('open');
      }
    }

    close.addEventListener('click', closeDialog);
    dialog.addEventListener('click', function (event) {
      if (event.target === dialog) closeDialog();
    });
    dialog.addEventListener('close', function () {
      document.body.classList.remove('fb-dialog-open');

      if (lastDialogTrigger) {
        lastDialogTrigger.focus();
        lastDialogTrigger = null;
      }
    });
  }

  function equalizeCardHeights(feed) {
    var cards = feed.querySelectorAll('.fb-feed-card');

    if (!cards.length) return;

    cards.forEach(function (card) {
      card.style.minHeight = '';
    });

    var maxHeight = 0;

    cards.forEach(function (card) {
      maxHeight = Math.max(maxHeight, card.getBoundingClientRect().height);
    });

    cards.forEach(function (card) {
      card.style.minHeight = maxHeight + 'px';
    });
  }

  function initFacebookFeed() {
    var feed = document.getElementById('facebook-posts');
    var fallback = document.getElementById('facebook-posts-fallback');

    if (!feed || !window.fetch) return;

    fetch('public/facebook-posts.json', { cache: 'no-cache' })
      .then(function (response) {
        if (!response.ok) throw new Error('HTTP ' + response.status);
        return response.json();
      })
      .then(function (data) {
        var posts = data && Array.isArray(data.posts) ? data.posts : [];
        if (!posts.length) return;

        posts = posts
          .slice()
          .sort(function (a, b) {
            return (
              (Date.parse(b.createdTime) || 0) -
              (Date.parse(a.createdTime) || 0)
            );
          })
          .slice(0, 3);

        var page = data.page || {};
        var pageUrl = safeLink(page.url, FACEBOOK_PAGE_URL);
        var fragment = document.createDocumentFragment();

        posts.forEach(function (post, index) {
          fragment.appendChild(createFacebookCard(post, pageUrl, index));
        });

        feed.innerHTML = '';
        feed.appendChild(fragment);
        feed.hidden = false;
        if (fallback) fallback.hidden = true;

        setupCardPreviews(feed);
        equalizeCardHeights(feed);

        if (document.fonts && document.fonts.ready) {
          document.fonts.ready.then(function () {
            setupCardPreviews(feed);
            equalizeCardHeights(feed);
          });
        }

        var resizeTimer = null;
        window.addEventListener('resize', function () {
          window.clearTimeout(resizeTimer);
          resizeTimer = window.setTimeout(function () {
            setupCardPreviews(feed);
            equalizeCardHeights(feed);
          }, 150);
        });
      })
      .catch(function () {
        // Keep the fallback card visible if the feed cannot be loaded.
      });
  }

  initPostDialog();
  initFacebookFeed();

})();
