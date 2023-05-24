const menuHamburger = document.querySelector('.menu-humberger');
const navLinks = document.querySelector('.nav-links');
const closeTage = document.querySelector('.closeHumberger');

document.querySelectorAll('.Golinks').forEach((element) => element.addEventListener('click', () => {
  navLinks.classList.remove('mobile-menu');
  menuHamburger.style.display = 'block';
}));

menuHamburger.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu');
  menuHamburger.style.display = 'none';
});

closeTage.addEventListener('click', () => {
  navLinks.classList.remove('mobile-menu');
  menuHamburger.style.display = 'block';
});

// eslint-disable-next-line no-undef
const sr = ScrollReveal({
  distance: '45px',
  duration: 2700,
  reset: true,
});
sr.reveal('.navbar', { delay: 350, origin: 'left' });
sr.reveal('.titleText', { delay: 350, origin: 'right' });
sr.reveal('.LinkNetwork,.card-id,.portfolio,.about-me,.framWork ,.stayThere,.ContactingForming', {
  delay: 350,
  origin: 'right',
});

let WordSwitch = document.querySelector('SwitchMode');