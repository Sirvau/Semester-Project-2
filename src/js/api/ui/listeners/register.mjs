import { login } from '../../auth/login.mjs';
import { register } from '../../auth/registration.mjs';

const registerForm = document.getElementById('register-form');
let usernameInput = document.getElementById('register-username');
let emailInput = document.getElementById('register-email');
let passwordInput = document.getElementById('register-password');

registerForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const entries = Object.fromEntries(formData.entries());

  const { username, email, password } = entries;

  await register(username, email, password);
  await login(email, password);
  window.location.reload();
});

// Check validity
usernameInput.addEventListener('change', (event) => {
  let usernameInput = event.target;
  let valid = emailInput.checkValidity();
  if (!valid) {
    usernameInput.classList.remove('is-valid');
    usernameInput.classList.add('is-invalid');
  } else {
    usernameInput.classList.remove('is-invalid');
    usernameInput.classList.add('is-valid');
  }
});

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
