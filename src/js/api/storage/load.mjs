// Local storage retireve function

export function load(key) {
  return JSON.parse(localStorage.getItem(key));
}
