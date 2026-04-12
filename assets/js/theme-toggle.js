/**
 * E-Bench 2026 — Shared Theme Toggle Module
 * Handles dark/light theme switching with localStorage persistence.
 */
(function() {
  'use strict';

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ebench-theme', theme);
    var btn = document.getElementById('themeBtn');
    if (btn) btn.setAttribute('aria-pressed', theme === 'dark' ? 'false' : 'true');
  }

  window.toggleTheme = function() {
    var current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  };

  // Restore saved theme
  (function() {
    var saved = localStorage.getItem('ebench-theme');
    if (saved) setTheme(saved);
  })();
})();
