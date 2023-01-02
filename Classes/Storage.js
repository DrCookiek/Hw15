export class Storage {
  constructor() {
    this.product_key = "products";
  }
  saveToStorage(value) {
    localStorage.setItem(this.product_key, JSON.stringify(value));
  }

  getFromStorage() {
    let items = localStorage.getItem(this.product_key);
    return JSON.parse(items);
  }
}
