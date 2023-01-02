export class Product {
  constructor(name, price, image, inWishlist, id, inCart, isFeatured, animal) {
    this.name = name;
    this.price = price;
    this.image = image;
    this.inWishlist = inWishlist;
    this.id = id;
    this.inCart = inCart;
    this.isFeatured = isFeatured;
    this.animal = animal;
  }

  setInWishList() {
    this.inWishlist = !this.inWishlist;
  }

  addToCart() {
    this.inCart++;
  }
}

// export class ProductFactory {
//   constructor() {
//     this.latest_id = 100;
//   }

//   getNewId() {
//     id = `p  + ${this.latest_id}`;
//     this.latest_id++;
//     return id;
//   }

//   createProduct(name, price, image, animal) {
//     id = this.getNewId();
//     let p = Product(name, price, image, false, id, false, false, animal);
//   }
// }
