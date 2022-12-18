// function btn(x) {
//   price += x;
//   alert("more products were added" + x + "$");
// }

// if (price >= 300) {
//   alert(price * 0.9);
// } else {
//   alert(price);
// }
function renderProducts() {
  var products = getProducts();
  var store = document.querySelector(".store");
  var htmlText = products
    .map(
      (product) => `<div class="products">
  <img
    src="${product.image}"
  />
  <p>${product.name}</p>
  <p>costs ${product.price}$</p>
  <button onclick="addToCart()">Add to cart</button>
  <button onclick="addToWish()">♥</button>
</div>`
    )
    .join("");
  store.innerHTML = htmlText;
}

function onLoad() {
  renderProducts();
}

function setSearch(value) {
  setFilter(value);
  renderProducts();
  console.log(value);
  var input = document.querySelector("input");
}
