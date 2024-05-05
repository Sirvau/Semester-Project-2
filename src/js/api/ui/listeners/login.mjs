import { login } from '../../auth/login.mjs';

let loginForm = document.getElementById('log-in-form');
let emailInput = document.getElementById('login-email');
let passwordInput = document.getElementById('login-password');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  let formData = new FormData(event.target);
  let entries = Object.fromEntries(formData.entries());

  let { email, password } = entries;

  await login(email, password);
  window.location.reload();
});

// Check validity
emailInput.addEventListener('change', (event) => {
  let emailInput = event.target;
  let valid = emailInput.checkValidity();
  if (!valid) {
    emailInput.classList.remove('is-valid');
    emailInput.classList.add('is-invalid');
  } else {
    emailInput.classList.remove('is-invalid');
    emailInput.classList.add('is-valid');
  }
});

passwordInput.addEventListener('change', (event) => {
  let passwordInput = event.target;
  let valid = passwordInput.checkValidity();
  if (!valid) {
    passwordInput.classList.remove('is-valid');
    passwordInput.classList.add('is-invalid');
  } else {
    passwordInput.classList.remove('is-invalid');
    passwordInput.classList.add('is-valid');
  }
});
