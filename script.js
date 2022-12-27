function renderProducts(type) {
  var products = getProducts(type);
  var store = document.querySelector(".products-container");
  var htmlText = products
    .map((product) => {
      if (type === "cart") return cartView(product);
      else return shopView(product);
    })
    .join("");
  store.innerHTML = htmlText;
}

function onLoad(type = null) {
  renderProducts(type);
}

function setSearch(value) {
  setFilter(value);
  renderProducts();
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
