const changeButtonMenu = (x) => {
  x.classList.toggle("change");
};

const goToHome = () => {
  window.location = "index.html";
};

const goToShop = () => {
  window.location = "shop.html";
};

const goToAboutUs = () => {
  window.location = "about_us.html";
};

const goToCart = () => {
  window.location = "cart.html";
};

var x = document.querySelector("#header_container");
const but = document.querySelectorAll(".header_menu > div > button");
const icon = document.querySelectorAll(".header_cart_lgn > button > i");

let changeStyleHeader = () => {
  document.getElementById("header_container").style.backgroundColor = "white";
  but.forEach((element) => {
    element.style.color = "black";
  });
  icon.forEach((element) => {
    element.style.color = "black";
  });
  document.getElementById("header_button_aboutus").style.color = "black";
  document.querySelector("#header_container > a > h1").style.color = "black";
};

let clearStyleHeader = () => {
  document.getElementById("header_container").style.backgroundColor =
    "rgba(52, 58, 58, 0.384)";
  but.forEach((element) => {
    element.style.color = "";
  });
  icon.forEach((element) => {
    element.style.color = "";
  });
  document.querySelector("#header_container > a > h1").style.color = "";
  document.getElementById("header_button_aboutus").style.color = "";
};

x.addEventListener("mouseover", changeStyleHeader);
x.addEventListener("mouseout", clearStyleHeader);

let onScroll = () => {
  window.addEventListener("scroll", callBackFunc);
  function callBackFunc() {
    var y = window.pageYOffset;
    if (y > 10) {
      x.classList.add("scroll");
      changeStyleHeader();
    } else {
      x.classList.remove("scroll");
      clearStyleHeader();
    }
  }
};

window.onload = () => {
  onScroll();
};

const product = [
  {
    id: 1,
    image: "img/shop/Rosy Vase.jpg",
    title: "Rosy Vase",
    price: "120000",
    classify: ["Decor"],
  },
  {
    id: 2,
    image: "img/shop/Strange Single Sofa.jpg",
    title: "Strange Single Sofa",
    price: "500000",
    classify: ["Living-room"],
  },
  {
    id: 3,
    image: "img/shop/Retro Wall Clock.jpg",
    title: "Retro Wall Clock",
    price: "180000",
    classify: ["Wall", "Decor"],
  },
  {
    id: 4,
    image: "img/shop/Retro Paiting By Me.jpg",
    title: "Retro Paiting By Me",
    price: "1000000",
    classify: ["Decor"],
  },
  {
    id: 5,
    image: "img/shop/Holder Curtain Tiebacks.jpg",
    title: "Holder Curtain Tiebacks",
    price: "99000",
    classify: ["Decor"],
  },
  {
    id: 7,
    image: "img/shop/Flower Garden Cup.jpg",
    title: "Flower Garden Cup",
    price: "80000",
    classify: ["Kitchen"],
  },
  {
    id: 8,
    image: "img/shop/Luxury Dishes.jpg",
    title: "Luxury Dishes",
    price: "120000",
    classify: ["Kitchen"],
  },
  {
    id: 9,
    image: "img/shop/Drifwood Wall Clock.jpg",
    title: "Drifwood Wall Clock",
    price: "320000",
    classify: ["Wall", "Decor"],
  },
  {
    id: 10,
    image: "img/shop/Vintage Fan Wall Lamp.jpg",
    title: "Vintage Fan Wall Lamp",
    price: "100000",
    classify: ["Decor", "Wall"],
  },
  {
    id: 11,
    image: "img/shop/You are Mirror.jpg",
    title: "You're Mirror",
    price: "120000",
    classify: ["Decor", "Wall"],
  },
  {
    id: 12,
    image: "img/shop/Morden Planter Kiki.jpg",
    title: "Morden Planter Kiki",
    price: "150000",
    classify: ["Bancony"],
  },
  {
    id: 13,
    image: "img/shop/Combo Flowers Spoon.jpg",
    title: "Combo Flowers Spoon",
    price: "90000",
    classify: ["Kitchen"],
  },
  {
    id: 14,
    image: "img/shop/Shower Curtain.jpg",
    title: "Shower Curtain",
    price: "60000",
    classify: ["Bathroom"],
  },
  {
    id: 15,
    image: "img/shop/Seashell Pillow.jpg",
    title: "Seashell Pillow",
    price: "20000",
    classify: ["Bedroom"],
  },
  {
    id: 16,
    image: "img/shop/Circle Rug DOVE.jpg",
    title: "Circle Rug DOVE",
    price: "50000",
    classify: ["Bedroom", "Bathroom"],
  },
  {
    id: 17,
    image: "img/shop/Bloom Chair.jpg",
    title: "Bloom Chair",
    price: "150000",
    classify: ["Living-room"],
  },
  {
    id: 18,
    image: "img/shop/Bookshelf Checker.jpg",
    title: "Bookshelf Checker",
    price: "80000",
    classify: ["Living-room", "Bedroom"],
  },
  {
    id: 19,
    image: "img/shop/Coffee Table Design.jpg",
    title: "Coffee Table Design",
    price: "50000",
    classify: ["Bancony"],
  },
  {
    id: 20,
    image: "img/shop/Cosmico Clothes Hanger.jpg",
    title: "Cosmico Clothes Hanger",
    price: "65000",
    classify: ["Bedroom", "Bathroom"],
  },
  {
    id: 21,
    image: "img/shop/Iconic Etcetera Chair.jpg",
    title: "Iconic Etcetera Chair",
    price: "70000",
    classify: ["Living-room", "Bancony"],
  },
  {
    id: 22,
    image: "img/shop/Modern Light.jpg",
    title: "Modern Light",
    price: "110000",
    classify: ["Wall", "Decor"],
  },
  {
    id: 23,
    image: "img/shop/Snail lamp.jpg",
    title: "Snail Light",
    price: "50000",
    classify: ["Living-room", "Decor"],
  },
  {
    id: 24,
    image: "img/shop/Water Tower Chair.jpg",
    title: "Water Tower Chair",
    price: "250000",
    classify: ["Living-room", "Bancony"],
  },
  {
    id: 25,
    image: "img/shop/Float Wall Lamp.jpg",
    title: "Float Wall Lamp",
    price: "150000",
    classify: ["Wall", "Decor"],
  },
  {
    id: 26,
    image: "img/shop/Scandinavian kitchen.jpg",
    title: "Scandinavian Kitchen",
    price: "50000",
    classify: ["Kitchen"],
  },
  {
    id: 27,
    image: "img/shop/Remark Floating Shelves.jpg",
    title: "Remark Floating Shelves",
    price: "50000",
    classify: ["Decor", "Bancony"],
  },
  {
    id: 28,
    image: "img/shop/Coffee Chill Table.jpg",
    title: "Coffee Chill Table",
    price: "120000",
    classify: ["Bancony"],
  },
  {
    id: 29,
    image: "img/shop/Papering Chair.jpg",
    title: "Papering Chair",
    price: "350000",
    classify: ["Living-room", "Bancony"],
  },
  {
    id: 30,
    image: "img/shop/Tapio Avena Vase.jpg",
    title: "Tapio Avena Vase",
    price: "50000",
    classify: ["Decor", "Other"],
  },
  {
    id: 31,
    image: "img/shop/Leaf Candle Holder.jpg",
    title: "Leaf Candle Holder",
    price: "20000",
    classify: ["Decor", "Living-room"],
  },
  {
    id: 32,
    image: "img/shop/Spiral Felt Star.jpg",
    title: "Spiral Felt Star",
    price: "50000",
    classify: ["Decor", "Other"],
  },
  {
    id: 33,
    image: "img/shop/Gray Dream Catcher.jpg",
    title: "Gray Dream Catcher",
    price: "80000",
    classify: ["Decor", "Other"],
  },
  {
    id: 34,
    image: "img/shop/Pink Flower Toilet.jpg",
    title: "Pink Flower Toilet",
    price: "350000",
    classify: ["Bathroom"],
  },
  {
    id: 35,
    image: "img/shop/Outdoor Egg Chair.jpg",
    title: "Outdoor Egg Chair",
    price: "250000",
    classify: ["Bancony"],
  },
  {
    id: 36,
    image: "img/shop/Multi-function Cabinet.jpg",
    title: "Multi-function Cabinet",
    price: "100000",
    classify: ["Bathroom", "Bedroom"],
  },
  {
    id: 37,
    image: "img/shop/Orissa Shower Curtain.jpg",
    title: "Orissa Shower Curtain",
    price: "60000",
    classify: "Bathroom",
  },
  {
    id: 38,
    image: "img/shop/Multi-use shelf.jpg",
    title: "Multi-use Shelf",
    price: "99000",
    classify: ["Bathroom", "Other"],
  },
  {
    id: 39,
    image: "img/shop/Susie Storage Cart.jpg",
    title: "Susie Storage Cart",
    price: "150000",
    classify: ["Bathroom"],
  },
  {
    id: 40,
    image: "img/shop/Pastel Caninet.jpg",
    title: "Pastel Caninet",
    price: "199000",
    classify: ["Bathroom", "Bedroom"],
  },
  {
    id: 41,
    image: "img/shop/Wood Design Decor.jpg",
    title: "Wood Design Decor",
    price: "99000",
    classify: ["Wall", "Decor"],
  },
  {
    id: 42,
    image: "img/shop/Swing Decoration.jpg",
    title: "Swing Decoration",
    price: "150000",
    classify: ["Bancony", "Decor"],
  },
  {
    id: 43,
    image: "img/shop/Strawberry Hanging Planter.jpg",
    title: "Strawberry Hanging Planter",
    price: "15000",
    classify: ["Bancony", "Decor"],
  },
  {
    id: 44,
    image: "img/shop/Combo Spade Dish.jpg",
    title: "Combo Spade Dish",
    price: "59000",
    classify: ["Kitchen"],
  },
  {
    id: 45,
    image: "img/shop/Pillow Sofa Decor.jpg",
    title: "Pillow Sofa Decor",
    price: "50000",
    classify: ["Living-room"],
  },
  {
    id: 46,
    image: "img/shop/Doily Table Runner.jpg",
    title: "Doily Table Runner ",
    price: "50000",
    classify: ["Kitchen", "Decor", "Other"],
  },
  {
    id: 47,
    image: "img/shop/Flowers Pillow.jpg",
    title: "Flowers Pillow",
    price: "30000",
    classify: ["Living-room", "Bedroom"],
  },
  {
    id: 48,
    image: "img/shop/Crochet Pearl Valance.jpg",
    title: "Crochet Pearl Valance",
    price: "20000",
    classify: ["Other", "Decor"],
  },
  {
    id: 49,
    image: "img/shop/Unique Loryal Curtain.jpg",
    title: "Unique Loryal Curtain",
    price: "50000",
    classify: ["Other", "Decor"],
  },
  {
    id: 50,
    image: "img/shop/Reflections Decor.jpg",
    title: "Reflections Decor",
    price: "500000",
    classify: ["Other", "Decor"],
  },
  {
    id: 51,
    image: "img/shop/Lavender In Sunset.jpg",
    title: "Lavender In Sunset",
    price: "250000",
    classify: ["Wall", "Decor"],
  },
  {
    id: 52,
    image: "img/shop/Rocking Chair.jpg",
    title: "Rocking Chair",
    price: "50000",
    classify: ["Living-room", "Bancony"],
  },
  {
    id: 53,
    image: "img/shop/Outdoor Modular Setting.jpg",
    title: "Outdoor Modular Setting",
    price: "500000",
    classify: ["Other", "Bancony"],
  },
  {
    id: 54,
    image: "img/shop/Beige Hanging Shelf.jpg",
    title: "Beige Hanging Shelf",
    price: "50000",
    classify: ["Other", "Bathroom"],
  },
  {
    id: 55,
    image: "img/shop/Mushroom Spice Jar.jpg",
    title: "Mushroom Spice Jar",
    price: "5000",
    classify: ["Kitchen"],
  },
  {
    id: 56,
    image: "img/shop/Marble Wine Rack.jpg",
    title: "Marble Wine Rack",
    price: "15000",
    classify: ["Kitchen"],
  },
  {
    id: 57,
    image: "img/shop/Quartz Bottle Opener.jpg",
    title: "Quartz Bottle Opener",
    price: "5000",
    classify: ["Other", "Kitchen"],
  },
  {
    id: 58,
    image: "img/shop/Gesprenkelter Haken.jpg",
    title: "Gesprenkelter Haken",
    price: "2000",
    classify: ["Other", "Wall"],
  },
  {
    id: 59,
    image: "img/shop/Bear Honney Blossom.jpg",
    title: "Bear Honney Blossom",
    price: "60000",
    classify: ["Other", "Kitchen"],
  },
  {
    id: 60,
    image: "img/shop/Bold Chair.jpg",
    title: "Bold Chair",
    price: "150000",
    classify: ["Bancony", "Living-room"],
  },
  {
    id: 61,
    image: "img/shop/Combo Framed Branches.jpg",
    title: "Combo Framed Branches",
    price: "300000",
    classify: ["Wall", "Living-room", "Decor"],
  },
  {
    id: 62,
    image: "img/shop/Osvaldo Table Clock.jpg",
    title: "Osvaldo Table Clock",
    price: "50000",
    classify: ["Other", "Decor"],
  },
  {
    id: 63,
    image: "img/shop/Square Planter.jpg",
    title: "Square Planter",
    price: "50000",
    classify: ["Bancony"],
  },
];

let perPageHome = 8;
let start = 0;
let endHome = perPageHome;

function getCurrentPage(currentPage) {
  start = (currentPage - 1) * perPage;
  end = currentPage * perPage;
}

//Xuat product theo loai
const room = (loai) => {
  let html = "";
  const content = product.map((i, key) => {
    if (loai == "all") {
      html +=
        `<div class="col h_300 ">
        <a class="" href="detail.html">
                <div class="hover_product d-flex">
                  <div class="title_color">
                    <img class="w_product" src="${i.image}" alt="">
                    <p class="ml_5 fs_1 fw-bold">${i.title}</p>
                    <p class="ml_5 fs_1 fw-light">${i.price}$</p>
                  </div>
                  <div class="d-flex flex-column hover_open_cart">
                  <a class="heart_product color_heart" href="#"><i class="fa-regular fa-heart"></i></a>
                  <a class="heart_product color_eye" href="#"><i class="fa-regular fa-eye"></i></a>
                  <a onclick="addToCart(${key})" href="#" class="heart_product color_cart"><i class="fa-solid fa-cart-shopping"></i></a>
                  </div>
                </div>
                </a>
            </div>`;
    } else if (i.classify.includes(loai)) {
      html +=
        `<div class="col h_300 ">
                    <div class="hover_product d-flex">
                      <div class="title_color">
                      <img class="w_product" src="${i.image}" alt="">
                      <p class="ml_5 fs_1 fw-bold">${i.title}</p>
                      <p class="ml_5 fs_1 fw-light">${i.price}$</p></div>
                      <div class="d-flex flex-column hover_open_cart">
                        <a class="heart_product color_heart" href="#"><i class="fa-regular fa-heart"></i></a>
                        <a class="heart_product color_eye" href="#"><i class="fa-regular fa-eye"></i></a>
                        <a onclick="addToCart(${key})" href="#" class="heart_product color_cart"><i class="fa-solid fa-cart-shopping"></i></a>
                      </div>
                    </div>
                </div>`;
    }
  });
  const render = document.getElementById("product_shop");
  if (render != null) {
    render.innerHTML = html;
  }
};
room("all");

//search
const searchProduct = () => {
  let titleSearch = document.getElementById("searchProduct");
  let html = "";
  const content = product.map((i, index) => {
    let title = i.title.toLowerCase();
    let searchTitle = titleSearch.value.toLowerCase();
    if (title.includes(searchTitle)) {
      html +=
        `<div class="col h_300">
                      <img class="w_product" src="` +
        i.image +
        `" alt="">
                      <p class="fs-4 fw-bold">` +
        i.title +
        `</p>
                      <p class="fs-5 fw-bold ">` +
        i.price +
        `</p>
                  </div>`;
    }
  });
  document.getElementById("product_shop").innerHTML = html;
};

var description = document.getElementById("description");
var additional = document.getElementById("additional");
var reviews = document.getElementById("reviews");
var qa = document.getElementById("qa");

//render decription detail
function renderdecription() {
  if (description != null) {
    description.classList.add("gach_duoi");
  }
  let html = "";
  html += `<div class="truotlen">
  <p class="fw-bold color_text_detail">Our favorite jean meets our favorite decade. Made from premium non-stretch Japanese denim for a vintage-inspired look, the ’90s Cheeky Jean has an easy straight leg, an extra-high rise, and a butt-boosting rear fit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  <h3 class="fw-bold mt-4 mb-4">Features</h3>
  <ul class="fw-bold color_text_detail">
  <li >Lexie is 5’8”, size 0, wearing a 23 Ankle</li>
  <li>Straight fit. Cropped at the ankle. Sits at high waist. Rise: 11”. Inseam: 26.5”. Leg opening: 14” (size 28).</li>
  <li>Rigid: 100% cottonMachine wash cold. Tumble dry low.</li>
  <li>Button fly</li>
  <li>Made in vietnam</li>
  <li>Safer For The Environment: Our denim factory partner recycles 98% of their water using reverse osmosis filtration and keeps byproducts out of the environment by mixing them with concrete to create building materials.</li>
  <li>Questions about fit? Contact us</li>
  </ul>
  </div>
  `;
  const render = document.getElementById("chitiet");
  if (render != null) {
    render.innerHTML = html;
  }
}
renderdecription();

if (description != null) {
  description.addEventListener("click", function () {
    description.classList.remove("border_style_none");
    description.classList.add("gach_duoi");
    let html = "";

    html += `<div class="truotlen">
  <p class="fw-bold color_text_detail">Our favorite jean meets our favorite decade. Made from premium non-stretch Japanese denim for a vintage-inspired look, the ’90s Cheeky Jean has an easy straight leg, an extra-high rise, and a butt-boosting rear fit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  <h3 class="fw-bold mt-4 mb-4">Features</h3>
  <ul class="fw-bold color_text_detail">
  <li >Lexie is 5’8”, size 0, wearing a 23 Ankle</li>
  <li>Straight fit. Cropped at the ankle. Sits at high waist. Rise: 11”. Inseam: 26.5”. Leg opening: 14” (size 28).</li>
  <li>Rigid: 100% cottonMachine wash cold. Tumble dry low.</li>
  <li>Button fly</li>
  <li>Made in vietnam</li>
  <li>Safer For The Environment: Our denim factory partner recycles 98% of their water using reverse osmosis filtration and keeps byproducts out of the environment by mixing them with concrete to create building materials.</li>
  <li>Questions about fit? Contact us</li>
  </ul>
  </div>
  `;
    const render = document.getElementById("chitiet");
    if (render != null) {
      render.innerHTML = html;
    }

    additional.classList.add("border_style_none");
    reviews.classList.add("border_style_none");
    qa.classList.add("border_style_none");
  });
}
if (additional != null) {
  additional.addEventListener("click", function () {
    additional.classList.remove("border_style_none");
    additional.classList.add("gach_duoi");
    let html = "";

    html += `
  <div class="w_250 d-flex flex-column">
    <div class="d-flex justify-content-between">
        <p class="fw-bold">Weight</p>
        <p class="text-end">1 kg</p>
    </div>
    <div class="d-flex justify-content-between">
        <p class="fw-bold">Dimensions</p>
        <p>22 × 33 × 44 cm</p>
    </div>
    <div class="d-flex justify-content-between">
        <p class="fw-bold">color</p>
        <p>Black, brown, Yellow</p>
    </div>
    <div class="d-flex justify-content-between">
        <p class="fw-bold">Sizes</p>
        <p>L, M, S, XXL</p>
    </div>
  </div>
  `;
    const render = document.getElementById("chitiet");
    if (render != null) {
      render.innerHTML = html;
    }
    description.classList.remove("gach_duoi");
    reviews.classList.add("border_style_none");
    qa.classList.add("border_style_none");
  });
}
if (reviews != null) {
  reviews.addEventListener("click", function () {
    reviews.classList.remove("border_style_none");
    reviews.classList.add("gach_duoi");

    let html = "";

    html += `
  <p>No review</p>
  `;
    const render = document.getElementById("chitiet");
    if (render != null) {
      render.innerHTML = html;
    }

    description.classList.add("border_style_none");
    additional.classList.add("border_style_none");
    qa.classList.add("border_style_none");
  });
}
if (qa != null) {
  qa.addEventListener("click", function () {
    qa.classList.remove("border_style_none");
    qa.classList.add("gach_duoi");

    let html = "";

    html += `
  <p>No Q & A</p>
  `;
    const render = document.getElementById("chitiet");
    if (render != null) {
      render.innerHTML = html;
    }

    additional.classList.add("border_style_none");
    reviews.classList.add("border_style_none");
    description.classList.add("border_style_none");
  });
}

let total = document.querySelector('.total')
let quatity = document.querySelector('.quatity')

let listCart = [];
function addToCart(key){
  if(listCart[key] == null){
    listCart[key] = product[key];
    listCart[key].quatity = 1;
  }

  reloadCart();
}

function reloadCart(){
  listCart.innerHTML = '';
  let count = 0;
  let totalPrice = 0;
  listCart.forEach((value, key)=>{
    const numberPrice = new Number(value.price);
    totalPrice += numberPrice;
    count += value.quatity;
  })
  total.innerText = totalPrice.toLocaleString();
  quatity.innerText = count;
}