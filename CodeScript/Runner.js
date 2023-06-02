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
/*here the side */
   (emailInput.value === emailInput.value.toLowerCase()) {
    form.submit();
  } else {
    errorMsg.classList.remove('hidden');
  }
});

const names = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

form.addEventListener('keyup', () => {
  const formData = {
    names: names.value,
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
});
// Retrive form data from localstorage on page.....
window.onload = () => {
  const formData = localStorage.getItem('formData');
  const formDataObj = JSON.parse(formData);
  names.value = formDataObj.names;
  email.value = formDataObj.email;
  message.value = formDataObj.message;
};
