import { allProducts } from "./database.js";
import { Storage } from "./Storage.js";
import { Product } from "./product.js";

export class StoreManager {
  constructor() {
    this.filter = "";
    this.products = [];
    this.storage;
    this.htmlContainer;
    this.setup();
  }

  setup() {
    this.htmlContainer = document.querySelector(".products-container");
    this.storage = new Storage();
    var products = this.storage.getFromStorage();

    if (!products || !products.length) {
      this.products = allProducts;
    } else {
      this.products = products;
    }

    this.storage.saveToStorage(this.products);
    this.products = this.products.map((product) =>
      this.createProduct(
        product.name,
        product.price,
        product.image,
        product.animal,
        product.isFeatured,
        product.inWishlist,
        product.inCart
      )
    );
    console.log("fdfd", this.products);
  }

  getProducts(type = null) {
    var filteredProducts = this.products.filter((product) => {
      var regExTerm = new RegExp(this.filter);
      return regExTerm.test(product.name.toLowerCase());
    });

    if (type !== "all") {
      filteredProducts = filteredProducts.filter((product) => {
        if (type === "home") return product.isFeatured;
        if (type === "wishlist") return product.inWishlist;
        if (type === "cart") return product.inCart;
      });
    }

    console.log(filteredProducts);
    return filteredProducts;
  }

  renderProducts(type) {
    var products = this.getProducts(type);

    var htmlText = products
      .map((product) => {
        if (type === "cart") return cartView(product);
        else return shopView(product);
      })
      .join("");
    this.htmlContainer.innerHTML = htmlText;
  }

  setFilter(value) {
    this.filter = value;
  }

  createProduct(name, price, image, animal, isFeatured, inWishlist, inCart) {
    let id = makeid(5);
    let p = new Product(
      name,
      price,
      image,
      inWishlist,
      id,
      inCart,
      isFeatured,
      animal
    );
    console.log(p);
    return p;
  }

  addToWishlist(productId) {
    let product = this.products.find((product) => {
      return product.id === productId;
    });
    product.setInWishList();
    this.storage.saveToStorage(this.products);
  }

  addToCart(productId) {
    let product = this.products.find((product) => {
      return product.id === productId;
    });
    console.log(product);
    product.addToCart();
    this.storage.saveToStorage(this.products);
  }
}

function shopView(product) {
  return `<div class="products" id="zoom">
  <img
    src="${product.image}"
  />
  <p>${product.name}</p>
  <p>costs ${product.price}$</p>
  <button onclick="addToCart('${product.id}')">Add to cart</button>
  <button class=${
    product.inWishlist ? "in-wishlist" : "none"
  } onclick="addToWishlist('${product.id}')">♥</button>
  
</div>`;
}

function cartView(product) {
  return `<div class="cart-item">
  <img src="${product.image}" alt="">
  <div>
    <div>${product.name}</div>
    <div>costs ${product.price}$</div>
    <div>${product.inCart} in your cart</div>
  </div>
</div>
  `;
}

function makeid(length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}
