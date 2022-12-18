var filter = "";

const products = [
  {
    name: "Frog Hat",
    price: 5,
    image: "https://m.media-amazon.com/images/I/71gICgl0n2L._AC_SL1050_.jpg",
    id: "p101",
    inWishlist: false,
  },
  {
    name: "Bunny Hat",
    price: 4,
    image:
      "https://img.joomcdn.net/a3d1fe6c5e57ff51238e99a27e9cd5e767e5742b_original.jpeg",
    id: "p102",
    inWishlist: false,
  },
  {
    name: "Lion Hat",
    price: 6,
    image: "https://img.fruugo.com/product/4/39/176972394_max.jpg",
    id: "p103",
    inWishlist: false,
  },
  {
    name: "Chicken Hat",
    price: 10,
    image:
      "https://i5.walmartimages.com/asr/48240b7f-e19d-46df-b52b-93662af0c06b.54d0dbea9b5d0e70679ed159bd70f22a.jpeg",
    id: "p104",
    inWishlist: false,
  },
  {
    name: "Flower Hat",
    price: 15,
    image:
      "https://static.wixstatic.com/media/1a82fe_2c3e73407e3e4e6c800d9ab1672e77a5~mv2.jpeg/v1/fill/w_3080,h_2369,al_c,q_85/1a82fe_2c3e73407e3e4e6c800d9ab1672e77a5~mv2.jpeg",
    id: "p105",
    inWishlist: false,
  },
  {
    name: "Pirate Full Costume",
    price: 15,
    image:
      "https://cdn.shopify.com/s/files/1/0235/1965/8061/products/cat_pirate_costume_250x250@2x.jpg?v=1569066405",
    id: "p106",
    inWishlist: false,
  },
  {
    name: "Frog Costume",
    price: 5,
    image:
      "https://i5.walmartimages.com/asr/13c2ee1c-66c6-4ad1-8a08-a7040d55c1d1.a69c725345b1e3985a97b46117c5f1f1.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    id: "p107",
    inWishlist: false,
  },
  {
    name: "Chicken Hat",
    price: 6,
    image:
      "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/at%2Fnews-culture%2F2019-11%2FTurkey_Hat",
    id: "p108",
    inWishlist: false,
  },
  {
    name: "Santa Hat",
    price: 6,
    image:
      "https://media.istockphoto.com/id/1048496416/photo/happy-havanese-puppy-is-wearing-a-santa-hat.jpg?s=612x612&w=0&k=20&c=Bswt8XW-WxVtBWUSAWrB1X5wf1RuhlvQ1hikyhU3Ksw=",
    id: "p109",
    inWishlist: false,
  },
  {
    name: "matching set",
    price: 25,
    image:
      "https://ae01.alicdn.com/kf/Sce49798910394ad58b80f032638e1137t/Outdoor-Travel-Windproof-Mask-Cap-Dog-Costumes-for-Large-Dogs-Ski-Mask-Dog-Hats-for-Dogs.jpg",
    id: "p110",
    inWishlist: false,
  },
  {
    name: "Wizard Costume",
    price: 15,
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F09%2F21%2Fcoomour-halloween-dog-costume-pet-wizard.jpg&w=1200&h=1200&c=sc&poi=face&q=60",
    id: "p111",
    inWishlist: false,
  },
  {
    name: "Banana Costume",
    price: 10,
    image: "https://m.media-amazon.com/images/I/81fVgLFWNSL.jpg",
    id: "p112",
    inWishlist: false,
  },
  {
    name: "Super-dog Costume",
    price: 8,
    image:
      "https://www.pbfingers.com/wp-content/uploads/2013/09/SupermanDog.jpg",
    id: "p113",
    inWishlist: false,
  },
  {
    name: "Ghost Costume",
    price: 3,
    image:
      "https://static.boredpanda.com/blog/wp-content/uploads/2020/11/best-halloween-pet-costume-ideas-8-5f9fd78a5800e__700.jpg",
    id: "p114",
    inWishlist: false,
  },
  {
    name: "Panda Costume",
    price: 5,
    image: "https://i.ebayimg.com/images/g/Bm4AAOSwu7de3lW7/s-l1600.jpg",
    id: "p115",
    inWishlist: false,
  },
  {
    name: "Mouse Costume",
    price: 6,
    image:
      "https://i.pinimg.com/564x/84/32/07/843207e66f81b6b2153f0f99770365cd.jpg",
    id: "p116",
    inWishlist: false,
  },
  {
    name: "FairyTail Set ",
    price: 30,
    image:
      "https://i.pinimg.com/564x/3f/99/0a/3f990a4a91f794065abda81c3aba0b51.jpg",
    id: "p117",
    inWishlist: false,
  },
  {
    name: "Sister Costume",
    price: 9,
    image:
      "https://i.pinimg.com/564x/d2/7f/fc/d27ffc2a68e2d8e3766bb085c16f8187.jpg",
    id: "p118",
    inWishlist: false,
  },
  {
    name: "Two Dogs Costume",
    price: 12,
    image:
      "https://i.pinimg.com/564x/96/39/4a/96394a0b20c900eccaebf5237b134463.jpg",
    id: "p119",
    inWishlist: false,
  },
  {
    name: "Hawaii Costume",
    price: 16,
    image:
      "https://img.ltwebstatic.com/images3_pi/2022/05/07/1651920270e1e038203f6333cd34bb584c5e918715.webp",
    id: "p120",
    inWishlist: false,
  },
  {
    name: "Mermaid Costume",
    price: 22,
    image: "https://www.refinery29.com/images/8562709.png",
    id: "p121",
    inWishlist: false,
  },
  {
    name: "Cat In Boots Costume",
    price: 26,
    image:
      "https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/122886924_10158404048617798_8729247269451035048_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=2c4854&_nc_ohc=0XWYv0vxShEAX-1Jmbb&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfC1yu94OMTkNou2bROkniDB61gYQNFmxe47QxRFhYTgCg&oe=63C58E68",
    id: "p122",
    inWishlist: false,
  },
  {
    name: "School-girl Costume",
    price: 4,
    image: "https://m.media-amazon.com/images/I/71JYMhGV95L._AC_SL1500_.jpg",
    id: "p123",
    inWishlist: false,
  },
  {
    name: "Bee Costume",
    price: 7,
    image:
      "https://ae01.alicdn.com/kf/H89bc8b3bb371435db8a20778697f659cT/Funny-Bee-Shaped-Birds-Clothes-Flying-Suit-Parrots-Costume-Cosplay-Winter-Warm-Hat-Hooded-Pet-Accessories.jpg_Q90.jpg_.webp",
    id: "p124",
    inWishlist: false,
  },
  {
    name: "Mermaid Costume",
    price: 2,
    image:
      "https://images.halloweencostumes.com/blog/images/687/2794-1/magical-mermaid-fish-costume.jpg",
    id: "p125",
    inWishlist: false,
  },
];

function getProducts() {
  var filteredProducts = products.filter((product) => {
    var regExTerm = new RegExp(filter);
    return regExTerm.test(product.name.toLowerCase());
  });
  return filteredProducts;
}

function setFilter(value) {
  filter = value;
}
