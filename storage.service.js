function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
  let items = localStorage.getItem(key);
  return JSON.parse(items);
}
