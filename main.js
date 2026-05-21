(function () {
  'use strict';

  /* ================================================================
     Mobile menu toggle
     ================================================================ */
  var menuToggle = document.getElementById('menu-toggle');
  var menuOverlay = document.getElementById('mobile-menu-overlay');
  var menuClose = document.getElementById('menu-close');
  var menuLinks = document.querySelectorAll('.mobile-menu-link');

  function openMenu() {
    if (menuOverlay) {
      menuOverlay.classList.remove('opacity-0', 'pointer-events-none');
      menuOverlay.classList.add('opacity-100', 'pointer-events-auto');
      document.body.style.overflow = 'hidden';
    }
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', 'true');
      menuToggle.setAttribute('aria-label', 'Sulje valikko');
      var imgs = menuToggle.querySelectorAll('img');
      if (imgs.length >= 1) { imgs[0].style.display = 'none'; }
    }
  }

  function closeMenu() {
    if (menuOverlay) {
      menuOverlay.classList.add('opacity-0', 'pointer-events-none');
      menuOverlay.classList.remove('opacity-100', 'pointer-events-auto');
      document.body.style.overflow = '';
    }
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Avaa valikko');
      var imgs = menuToggle.querySelectorAll('img');
      if (imgs.length >= 1) { imgs[0].style.display = 'block'; }
    }
  }

  function toggleMenu() {
    var isOpen = menuToggle && menuToggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) { closeMenu(); } else { openMenu(); }
  }

  if (menuToggle) { menuToggle.addEventListener('click', toggleMenu); }
  if (menuClose) { menuClose.addEventListener('click', closeMenu); }
  if (menuLinks) {
    menuLinks.forEach(function (link) { link.addEventListener('click', closeMenu); });
  }

  /* ================================================================
     Sticky navbar with glass effect
     ================================================================ */
  var navbar = document.getElementById('navbar');
  function handleScroll() {
    if (!navbar) return;
    if (window.scrollY > 20) {
      navbar.classList.add('sticky', 'nav-glass');
    } else {
      navbar.classList.remove('sticky', 'nav-glass');
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

})();
