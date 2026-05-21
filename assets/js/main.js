// Dark mode toggle
(function () {
  var btn = document.getElementById('themeToggle');
  if (!btn) return;

  btn.addEventListener('click', function () {
    var html = document.documentElement;
    var isDark = html.getAttribute('data-theme') === 'dark';
    var next = isDark ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();

// Mobile nav toggle
(function () {
  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('mobileNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.contains('is-open');
    nav.classList.toggle('is-open', !isOpen);
    toggle.setAttribute('aria-expanded', String(!isOpen));
    nav.setAttribute('aria-hidden', String(isOpen));
  });

  // Close on link click
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      nav.setAttribute('aria-hidden', 'true');
    });
  });
})();
