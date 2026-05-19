(function () {
  'use strict';

  /* ================================================================
     Mobile menu toggle
     ================================================================ */
  var menuToggle = document.getElementById('menu-toggle');
  var menuOverlay = document.getElementById('mobile-menu-overlay');
  var menuClose = document.getElementById('menu-close');
  var menuLinks = document.querySelectorAll('.mobile-menu-link');

  var menuIconHamburger = document.getElementById('menu-icon-hamburger');
  var menuIconClose = document.getElementById('menu-icon-close');

  function openMenu() {
    if (menuOverlay) {
      menuOverlay.classList.remove('opacity-0', 'pointer-events-none');
      menuOverlay.classList.add('opacity-100', 'pointer-events-auto');
      document.body.style.overflow = 'hidden';
    }
    if (menuIconHamburger) { menuIconHamburger.classList.add('hidden'); menuIconHamburger.classList.remove('block'); }
    if (menuIconClose) { menuIconClose.classList.remove('hidden'); menuIconClose.classList.add('block'); }
    if (menuToggle) {
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
    if (menuIconHamburger) { menuIconHamburger.classList.remove('hidden'); menuIconHamburger.classList.add('block'); }
    if (menuIconClose) { menuIconClose.classList.add('hidden'); menuIconClose.classList.remove('block'); }
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Avaa valikko');
    }
  }

  function toggleMenu() {
    var isOpen = menuToggle && menuToggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
  }
  if (menuClose) {
    menuClose.addEventListener('click', closeMenu);
  }
  if (menuLinks) {
    menuLinks.forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  /* ================================================================
     Sticky navbar on scroll
     ================================================================ */
  var navbar = document.getElementById('navbar');
  function handleScroll() {
    if (!navbar) return;
    if (window.scrollY > 0) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true });

  /* ================================================================
     Generic Modal (used for Services and News)
     ================================================================ */
  function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);
  }

  function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add('hidden');
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

  /* Expose to global scope so inline onclick handlers work */
  window.openModal = openModal;
  window.closeModal = closeModal;

  // Close modal when clicking on backdrop
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal-backdrop')) {
      var modal = e.target.closest('.modal');
      if (modal) {
        closeModal(modal.id);
      }
    }
  });

  /* ================================================================
     Current year for copyright
     ================================================================ */
  var yearEls = document.querySelectorAll('.js-current-year');
  var currentYear = new Date().getFullYear();
  yearEls.forEach(function (el) {
    el.textContent = currentYear;
  });

})();
