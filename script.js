const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#primary-menu');
const navLinks = document.querySelectorAll('#primary-menu a');

const mobileQuery = window.matchMedia('(max-width: 900px)');

function isMobileMenu() {
  return mobileQuery.matches;
}

function setDesktopMenuState() {
  navToggle.setAttribute('aria-expanded', 'false');
  navMenu.classList.remove('is-open');
  navMenu.setAttribute('aria-hidden', 'false');
  navMenu.removeAttribute('inert');
  document.body.classList.remove('nav-open');
}

function setMobileMenuOpen(isOpen) {
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navMenu.classList.toggle('is-open', isOpen);
  navMenu.setAttribute('aria-hidden', String(!isOpen));
  navMenu.toggleAttribute('inert', !isOpen);
  document.body.classList.toggle('nav-open', isOpen);
}

function syncMenuAccessibility() {
  if (!isMobileMenu()) {
    setDesktopMenuState();
    return;
  }

  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  setMobileMenuOpen(isOpen);
}

syncMenuAccessibility();

navToggle.addEventListener('click', () => {
  if (!isMobileMenu()) {
    setDesktopMenuState();
    return;
  }

  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  setMobileMenuOpen(!isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (isMobileMenu()) {
      setMobileMenuOpen(false);
    } else {
      setDesktopMenuState();
    }
  });
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && isMobileMenu()) {
    setMobileMenuOpen(false);
  }
});

mobileQuery.addEventListener('change', syncMenuAccessibility);
window.addEventListener('resize', syncMenuAccessibility);

const heroHeadshot = document.querySelector('.portrait-frame img, .hero-photo-frame img');

if (heroHeadshot) {
  heroHeadshot.addEventListener('error', () => {
    heroHeadshot.closest('.portrait-frame, .hero-photo-frame')?.setAttribute('hidden', '');
  });
}
