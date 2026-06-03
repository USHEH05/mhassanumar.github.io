/* ============================================================
   MUHAMMAD HASSAN UMAR — PORTFOLIO
   script.js
   ============================================================ */

// ── NAV HIDE ON SCROLL ───────────────────────────────────────
const nav = document.getElementById('nav');
let lastScroll = 0;
const NAV_THRESHOLD = 80; // px from top before hide behaviour starts

window.addEventListener('scroll', () => {
  const current = window.scrollY;

  if (current <= NAV_THRESHOLD) {
    nav.classList.remove('hidden');
  } else if (current > lastScroll) {
    // scrolling down — hide
    nav.classList.add('hidden');
  } else {
    // scrolling up — show
    nav.classList.remove('hidden');
  }

  lastScroll = current;
}, { passive: true });

// ── MOBILE DRAWER ────────────────────────────────────────────
const hamburger     = document.getElementById('hamburger');
const mobileDrawer  = document.getElementById('mobileDrawer');
const drawerClose   = document.getElementById('drawerClose');
const drawerOverlay = document.getElementById('drawerOverlay');

function openDrawer() {
  mobileDrawer.classList.add('open');
  drawerOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  mobileDrawer.classList.remove('open');
  drawerOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', openDrawer);
drawerClose.addEventListener('click', closeDrawer);
drawerOverlay.addEventListener('click', closeDrawer);

// Close drawer when a link is clicked
document.querySelectorAll('.drawer-links a').forEach(link => {
  link.addEventListener('click', closeDrawer);
});

// ── SMOOTH SCROLL OFFSET ─────────────────────────────────────
// Accounts for fixed nav height when jumping to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'));
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
