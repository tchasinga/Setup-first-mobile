const menuHamburger = document.querySelector('.menu-humberger');
const navLinks = document.querySelector('.nav-links');
const closeTage = document.querySelector('.closeHumberger');

menuHamburger.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu');
  menuHamburger.style.display = 'none';
});

closeTage.addEventListener('click', () => {
  navLinks.classList.remove('mobile-menu');
  menuHamburger.style.display = 'block';
});