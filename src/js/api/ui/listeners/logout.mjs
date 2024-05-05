import { logout } from '../../auth/logout.mjs';
const logoutButton = document.getElementById('logout-nav-button');

logoutButton.addEventListener('click', () => {
  logout();
  window.location.reload();
});
