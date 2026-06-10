// ============================================
// sherim media — Global Script
// ============================================

// Preloader
const hidePreloader = () => {
  setTimeout(() => {
    const p = document.getElementById('preloader');
    if (p) p.classList.add('done');
  }, 1600);
};

if (document.readyState === 'complete') hidePreloader();
else window.addEventListener('load', hidePreloader, { once: true });

// Custom cursor
(function() {
  const cursor = document.querySelector('.cursor-dot');
  if (!cursor || window.matchMedia('(max-width: 900px)').matches) return;

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  const addHover = () => {
    document.querySelectorAll('a, button, .service-row, .case-card, .case-big, .soon-card, .creator-card, .client, .capability').forEach(el => {
      if (el.dataset.cursorBound) return;
      el.dataset.cursorBound = 'true';
      el.addEventListener('mouseenter', () => {
        if (el.classList.contains('case-card') || el.classList.contains('case-big') || el.classList.contains('soon-card') || el.classList.contains('service-row')) {
          cursor.classList.add('arrow');
        } else {
          cursor.classList.add('expanded');
        }
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('expanded', 'arrow');
      });
    });
  };
  addHover();
  // Observe for dynamically added elements
  new MutationObserver(addHover).observe(document.body, { childList: true, subtree: true });
})();

// Instagram avatars
(function() {
  const cards = document.querySelectorAll('.creator-card');
  if (!cards.length) return;
  const assetsBase = new URL('./', document.currentScript ? document.currentScript.src : window.location.href);

  cards.forEach(card => {
    const nick = card.querySelector('.creator-nick');
    const avatar = card.querySelector('.creator-avatar');
    const placeholder = card.querySelector('.creator-avatar-placeholder');
    if (!nick || !avatar || avatar.querySelector('img')) return;

    const handle = nick.textContent.trim().replace(/^@/, '');
    if (!handle) return;
    const safeHandle = handle.replace(/[^a-zA-Z0-9_.-]/g, '_');

    const img = new Image();
    img.className = 'creator-avatar-photo';
    img.alt = nick.textContent.trim();
    img.loading = 'lazy';
    img.referrerPolicy = 'no-referrer';
    const fallbackSrc = `https://unavatar.io/instagram/${encodeURIComponent(handle)}`;
    img.src = new URL(`avatars/${safeHandle}.jpg`, assetsBase).href;
    img.addEventListener('error', () => {
      if (img.src !== fallbackSrc) {
        img.src = fallbackSrc;
      } else {
        img.remove();
      }
    });
    avatar.prepend(img);
    img.addEventListener('load', () => {
      if (img.naturalWidth < 2 || img.naturalHeight < 2) return;
      if (placeholder) placeholder.remove();
    }, { once: true });
  });
})();

// Mobile nav
(function() {
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobileNav');
  if (!burger || !mobileNav) return;
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();

// Hide nav on scroll down, show on scroll up
(function() {
  const nav = document.querySelector('nav.main-nav');
  if (!nav) return;
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 200 && y > lastY) {
      nav.classList.add('hidden');
    } else {
      nav.classList.remove('hidden');
    }
    lastY = y;
  });
})();

// Reveal on scroll
(function() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => io.observe(el));
})();

// Counter animation
(function() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.dataset.counter);
        const suffix = el.dataset.suffix || '';
        const duration = 1800;
        const start = performance.now();
        const from = 0;
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const val = from + (target - from) * eased;
          el.textContent = (target % 1 === 0 ? Math.round(val) : val.toFixed(1)) + suffix;
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => io.observe(c));
})();
