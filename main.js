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
      if (imgs.length >= 2) { imgs[0].style.display = 'none'; imgs[1].style.display = 'block'; }
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
      if (imgs.length >= 2) { imgs[0].style.display = 'block'; imgs[1].style.display = 'none'; }
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
     Generic Modal
     ================================================================ */
  function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);
  }

  function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add('hidden');
    modal.style.display = '';
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleEscape);
  }

  function handleEscape(e) {
    if (e.key === 'Escape') {
      var openModals = document.querySelectorAll('.modal:not(.hidden)');
      if (openModals.length > 0) {
        closeModal(openModals[openModals.length - 1].id);
      }
    }
  }

  window.openModal = openModal;
  window.closeModal = closeModal;

  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal-backdrop')) {
      var modal = e.target.closest('.modal');
      if (modal) { closeModal(modal.id); }
    }
  });

  /* ================================================================
     Current year for copyright
     ================================================================ */
  var yearEls = document.querySelectorAll('.js-current-year');
  var currentYear = new Date().getFullYear();
  yearEls.forEach(function (el) { el.textContent = currentYear; });

})();
