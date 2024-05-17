export function showLoader() {
  const loaders = document.querySelectorAll('.loader');
  loaders.forEach((loader) => loader.classList.remove('d-none'));
}

export function hideLoader() {
  const loaders = document.querySelectorAll('.loader');
  loaders.forEach((loader) => loader.classList.add('d-none'));
}
