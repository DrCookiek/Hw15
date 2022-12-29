import { storage } from "./storage.service.js";

let newStorage = new storage();
newStorage.getFromStorage("products");

class storage {
  constructor() {}
  saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getFromStorage(key) {
    let items = localStorage.getItem(key);
    return JSON.parse(items);
  }
}

let theProducts = new Products();
theProducts.renderProducts();
