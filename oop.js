import { storage } from "./storage.service.js";

let newStorage = new storage();
newStorage.getFromStorage("products");

let theProducts = new Products();
theProducts.renderProducts();
