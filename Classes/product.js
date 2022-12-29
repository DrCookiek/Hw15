class product {
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
}

class productFactory {
  constructor() {
    this.latest_id = 100;
  }

  getNewId() {
    id = `p  + ${this.latest_id}`;
    this.latest_id++;
    return id;
  }

  createProduct(name, price, image, animal) {
    id = this.getNewId();
    let p = product(name, price, image, false, id, false, false, animal);
  }
}
