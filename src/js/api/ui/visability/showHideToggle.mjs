import { isLoggedIn } from '../../auth/loginState.mjs';

export function hideElements() {
  const hiddenLinks = document.querySelectorAll('.toggleHideElement');
  const loggedIn = isLoggedIn();

  hiddenLinks.forEach((element) => {
    element.classList.toggle('d-none', !loggedIn);
  });
}

export function toggleButtonsVisibility() {
  const loginNavButton = document.getElementById('login-nav-button');
  const logoutNavButton = document.getElementById('logout-nav-button');

  if (isLoggedIn()) {
    loginNavButton.style.display = 'none';
    logoutNavButton.style.display = 'block';
  } else {
    loginNavButton.style.display = 'block';
    logoutNavButton.style.display = 'none';
  }
}
