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

  function formatFacebookDate(value) {
    if (!value) return '';
    var date = new Date(value);
    if (isNaN(date.getTime())) return '';

    var days = Math.floor((Date.now() - date.getTime()) / 86400000);
    if (days < 0) days = 0;

    try {
      var formatter = new Intl.RelativeTimeFormat('fi-FI', { numeric: 'auto' });
      if (days < 7) return formatter.format(-days, 'day');
      if (days < 30) return formatter.format(-Math.floor(days / 7), 'week');
      if (days < 365) return formatter.format(-Math.floor(days / 30), 'month');
      return formatter.format(-Math.floor(days / 365), 'year');
    } catch (error) {
      return date.toLocaleDateString('fi-FI');
    }
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

  function createFacebookCard(post, pageName, pageUrl, index) {
    var permalink = safeLink(post.permalink, pageUrl);
    var image = safeImage(post.image);

    var card = document.createElement('article');
    card.className = 'fb-feed-card';
    card.style.animationDelay = index * 80 + 'ms';

    if (image) {
      var media = document.createElement('a');
      media.className = 'fb-feed-card-media';
      media.href = permalink;
      media.target = '_blank';
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

    var header = document.createElement('div');
    header.className = 'fb-feed-card-header';

    var avatar = document.createElement('img');
    avatar.className = 'fb-feed-card-avatar';
    avatar.src = 'public/images/logo.png';
    avatar.alt = '';
    avatar.width = 40;
    avatar.height = 40;
    avatar.loading = 'lazy';

    var meta = document.createElement('div');
    meta.className = 'fb-feed-card-meta';

    var name = document.createElement('p');
    name.className = 'fb-feed-card-name';
    name.textContent = pageName;
    meta.appendChild(name);

    if (post.createdTime) {
      var date = document.createElement('time');
      date.className = 'fb-feed-card-date';
      date.dateTime = post.createdTime;
      date.textContent = formatFacebookDate(post.createdTime);
      meta.appendChild(date);
    }

    header.appendChild(avatar);
    header.appendChild(meta);

    body.appendChild(header);

    if (post.message) {
      var text = document.createElement('p');
      text.className = 'fb-feed-card-text';
      text.textContent = post.message;
      body.appendChild(text);
    }

    var link = document.createElement('a');
    link.className = 'fb-feed-card-link';
    link.href = permalink;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.appendChild(document.createTextNode('Lue Facebookissa'));
    link.appendChild(createFacebookIcon(14));
    body.appendChild(link);

    card.appendChild(body);
    return card;
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

        var page = data.page || {};
        var pageName =
          typeof page.name === 'string' && page.name
            ? page.name
            : 'Jalkaterapia Pinja';
        var pageUrl = safeLink(page.url, FACEBOOK_PAGE_URL);
        var fragment = document.createDocumentFragment();

        posts.slice(0, 3).forEach(function (post, index) {
          fragment.appendChild(
            createFacebookCard(post, pageName, pageUrl, index)
          );
        });

        feed.innerHTML = '';
        feed.appendChild(fragment);
        feed.hidden = false;
        if (fallback) fallback.hidden = true;
      })
      .catch(function () {
        // Keep the fallback card visible if the feed cannot be loaded.
      });
  }

  initFacebookFeed();

})();
