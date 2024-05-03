//Local Storage save function

export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
