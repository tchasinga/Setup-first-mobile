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

const form = document.getElementById('myForm');
const emailInput = document.getElementById('email');
const errorMsg = document.getElementById('error-msg');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (emailInput.value === emailInput.value.toLowerCase()) {
    form.submit();
  } else {
    errorMsg.classList.remove('hidden');
  }
});
