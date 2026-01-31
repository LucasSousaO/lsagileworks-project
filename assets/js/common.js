(function () {
  const btn = document.querySelector('[data-hamburger]');
  const panel = document.querySelector('[data-mobile-panel]');

  if (btn && panel) {
    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!isOpen));
      panel.hidden = isOpen;
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        btn.setAttribute('aria-expanded', 'false');
        panel.hidden = true;
      }
    });

    // ✅ NEW: Close menu when clicking a link inside the mobile panel
    panel.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        btn.setAttribute('aria-expanded', 'false');
        panel.hidden = true;
      });
    });
  }

  // Highlight active link
  const path = location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('a[data-nav]');
  links.forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.setAttribute('aria-current', 'page');
  });
})();
