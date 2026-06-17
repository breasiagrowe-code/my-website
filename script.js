const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#primary-menu');
const navLinks = document.querySelectorAll('#primary-menu a');

function setMenuOpen(isOpen) {
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navMenu.classList.toggle('is-open', isOpen);
  navMenu.setAttribute('aria-hidden', String(!isOpen));
  navMenu.toggleAttribute('inert', !isOpen);
  document.body.classList.toggle('nav-open', isOpen);
}

function syncMenuAccessibility() {
  const isDesktop = window.innerWidth > 900;

  if (isDesktop) {
    navToggle.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('is-open');
    navMenu.setAttribute('aria-hidden', 'false');
    navMenu.removeAttribute('inert');
    document.body.classList.remove('nav-open');
    return;
  }

  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  setMenuOpen(isOpen);
}

syncMenuAccessibility();

navToggle.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  setMenuOpen(!isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setMenuOpen(false);
  }
});

window.addEventListener('resize', syncMenuAccessibility);

const heroHeadshot = document.querySelector('.portrait-frame img');

if (heroHeadshot) {
  heroHeadshot.addEventListener('error', () => {
    heroHeadshot.closest('.portrait-frame')?.setAttribute('hidden', '');
  });
}
