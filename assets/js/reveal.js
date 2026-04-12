/**
 * E-Bench 2026 — Scroll Reveal Animation Module
 * Uses IntersectionObserver to add .visible class to .reveal elements.
 */
(function() {
  'use strict';

  function initReveal() {
    var elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      elements.forEach(function(el) { observer.observe(el); });
    } else {
      // Fallback for browsers without IntersectionObserver
      elements.forEach(function(el) { el.classList.add('visible'); });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }
})();
