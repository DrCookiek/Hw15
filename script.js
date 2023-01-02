import { StoreManager } from "./Classes/StoreManager.js";
let gStore = null;

window.onload = function () {
  const currentTab = document.querySelector(".active").dataset.tab;
  gStore = new StoreManager();
  gStore.renderProducts(currentTab);
};

window.setSearch = function (value) {
  const currentTab = document.querySelector(".active").dataset.tab;
  gStore.setFilter(value);
  gStore.renderProducts(currentTab);
};

window.addToWishlist = function (productId) {
  const currentTab = document.querySelector(".active").dataset.tab;
  gStore.addToWishlist(productId);
  gStore.renderProducts(currentTab);
};

window.addToCart = function (productId) {
  const currentTab = document.querySelector(".active").dataset.tab;
  gStore.addToCart(productId);
  gStore.renderProducts(currentTab);
};
