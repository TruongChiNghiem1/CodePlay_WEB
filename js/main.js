const changeButtonMenu = (x) => {
    x.classList.toggle("change");
};

//Dieu huong trang

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

const goToFavourite = () => {
    window.location = "favourite.html";
};

const goToAcount = () => {
    window.location = "login.html";
};

//Change color header while scroll

var x = document.querySelector("#header_container");
const but = document.querySelectorAll(".header_menu > div > button");
const icon = document.querySelectorAll(".header_cart_lgn > button > i");
const login = document.querySelector(".header_person_button > i")
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
    login.style.color = "black"
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
    login.style.color = "";
};

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

const product = [{
    id: 1,
    image: "https://i.pinimg.com/564x/b9/07/03/b907031cfc16e327bd01e94b20131b16.jpg",
    title: "Rosy Vase",
    price: "120000",
    classify: ["Decor"],
},
{
    id: 2,
    image: "https://i.pinimg.com/564x/82/ab/1c/82ab1cd4cb24544e82dd0e8bf58c8c74.jpg",
    title: "Strange Single Sofa",
    price: "500000",
    classify: ["Living-room"],
},
{
    id: 3,
    image: "https://i.pinimg.com/564x/9e/ac/df/9eacdf8b8a51f2982fc269dd21a770b3.jpg",
    title: "RoundSquare Wooden Clock",
    price: "180000",
    classify: ["Wall", "Decor"],
},
{
    id: 4,
    image: "https://i.pinimg.com/736x/e4/28/e5/e428e54c5bcb03f1d2680084bda56128.jpg",
    title: "Retro Paiting By Me",
    price: "1000000",
    classify: ["Decor"],
},
{
    id: 5,
    image: "https://i.pinimg.com/736x/14/6b/bd/146bbd31dfd7b6025532b4bfe29bca31.jpg",
    title: "Holder Curtain",
    price: "99000",
    classify: ["Decor"],
},
{
    id: 7,
    image: "https://i.pinimg.com/564x/a5/01/3b/a5013b208173472eaa46583b63572abb.jpg",
    title: "Flower Garden Cup",
    price: "80000",
    classify: ["Kitchen"],
},
{
    id: 8,
    image: "https://i.pinimg.com/564x/73/b2/ca/73b2ca59746cdc7ff0daf110c4667f41.jpg",
    title: "Luxury Dishes",
    price: "120000",
    classify: ["Kitchen"],
},
{
    id: 9,
    image: "https://i.pinimg.com/564x/d3/f9/aa/d3f9aa4f55a032b0c366472db04f9d3a.jpg",
    title: "Ood Toothbrush Holder",
    price: "320000",
    classify: ["Bathroom", "Decor"],
},
{
    id: 10,
    image: "https://i.pinimg.com/564x/b1/3e/94/b13e947533043963303d5ac3e1fdb297.jpg",
    title: "Vintage Fan Wall Lamp",
    price: "100000",
    classify: ["Decor", "Wall"],
},
{
    id: 11,
    image: "https://i.pinimg.com/564x/8e/98/b2/8e98b27fd11cb6f484749ac5dd4b6762.jpg",
    title: "You're Mirror",
    price: "120000",
    classify: ["Decor", "Wall"],
},
{
    id: 12,
    image: "https://i.pinimg.com/564x/18/fb/f6/18fbf608619f356157cf3d91e44ba7ce.jpg ",
    title: "Morden Planter Kiki",
    price: "150000",
    classify: ["Bancony"],
},
{
    id: 13,
    image: "https://i.pinimg.com/564x/f2/e6/9c/f2e69c80929ddaeed9d918b97919e879.jpg",
    title: "Combo Flowers Spoon",
    price: "90000",
    classify: ["Kitchen"],
},
{
    id: 14,
    image: "https://i.pinimg.com/564x/69/61/87/696187643bfb734bb853a87228443dbe.jpg",
    title: "Shower Curtain",
    price: "60000",
    classify: ["Bathroom"],
},
{
    id: 15,
    image: "https://i.pinimg.com/564x/72/ef/09/72ef09952cbdd5712cdf6b00b7a2b7ef.jpg",
    title: "Seashell Pillow",
    price: "20000",
    classify: ["Bedroom"],
},
{
    id: 16,
    image: "https://i.pinimg.com/736x/69/ec/b2/69ecb25e739a9afb973ad592cc5b7575.jpg",
    title: "Circle Rug DOVE",
    price: "50000",
    classify: ["Bedroom", "Bathroom"],
},
{
    id: 17,
    image: "https://i.pinimg.com/564x/8f/f3/24/8ff3246f6636f993b8cf8041bc5f7e65.jpg",
    title: "Brilliant Chair",
    price: "150000",
    classify: ["Living-room"],
},
{
    id: 18,
    image: "https://i.pinimg.com/564x/05/fd/44/05fd440f9450849ecc553ec572d5664f.jpg",
    title: "Bookshelf Checker",
    price: "80000",
    classify: ["Living-room", "Bedroom"],
},
{
    id: 19,
    image: "https://i.pinimg.com/564x/61/7b/ea/617beaa8988f8afde71a1084084fb7f1.jpg",
    title: "Coffee Table Design",
    price: "50000",
    classify: ["Bancony"],
},
{
    id: 20,
    image: "https://i.pinimg.com/564x/2d/67/75/2d6775f8d67a7adbb99072374be8d37d.jpg",
    title: "Cosmico Clothes Hanger",
    price: "65000",
    classify: ["Bedroom", "Bathroom"],
},
{
    id: 21,
    image: "https://i.pinimg.com/564x/b6/39/a7/b639a7b0e3dc0321cac3a17b6f424b1b.jpg",
    title: "Iconic Etcetera Chair",
    price: "70000",
    classify: ["Living-room", "Bancony"],
},
{
    id: 22,
    image: "https://i.pinimg.com/564x/be/51/de/be51de8983ce1d9e72111d71501364d5.jpg",
    title: "Modern Light",
    price: "110000",
    classify: ["Wall", "Decor"],
},
{
    id: 23,
    image: "https://i.pinimg.com/564x/bc/db/82/bcdb8292961ce80810b3377ecfa5c051.jpg",
    title: "Ocean Light",
    price: "50000",
    classify: ["Living-room", "Decor"],
},
{
    id: 24,
    image: "https://i.pinimg.com/564x/08/00/b7/0800b73971ab2997b8bc3491457c4607.jpg",
    title: "Water Tower Chair",
    price: "250000",
    classify: ["Living-room", "Bancony"],
},
{
    id: 25,
    image: "https://i.pinimg.com/736x/96/7a/74/967a7447cadb2a78840f21ea89e31b77.jpg",
    title: "Circle Wall Lamp",
    price: "150000",
    classify: ["Wall", "Decor"],
},
{
    id: 26,
    image: "https://i.pinimg.com/564x/de/95/7c/de957cca6630f7c1092d19bb70943583.jpg",
    title: "Scandinavian Kitchen",
    price: "50000",
    classify: ["Kitchen"],
},
{
    id: 27,
    image: "https://i.pinimg.com/564x/12/03/1f/12031f32d3fad0a00584c53eb7d89ece.jpg",
    title: "Remark Floating Shelves",
    price: "50000",
    classify: ["Decor", "Bancony"],
},
{
    id: 28,
    image: "https://i.pinimg.com/564x/42/3c/1e/423c1ebabd7f15664cc0cd961f140065.jpg",
    title: "Coffee Chill Table",
    price: "120000",
    classify: ["Bancony"],
},
{
    id: 29,
    image: "https://i.pinimg.com/736x/3a/8b/4c/3a8b4ce9cd68b8c3040aa36e7c70c34d.jpg",
    title: "Papering Outdoor Chair",
    price: "350000",
    classify: ["Living-room", "Bancony"],
},
{
    id: 30,
    image: "https://i.pinimg.com/564x/3e/0d/f0/3e0df0d80a4df43a29852725c965fb20.jpg",
    title: "Low Flower Vase",
    price: "50000",
    classify: ["Decor", "Other"],
},
{
    id: 31,
    image: "https://i.pinimg.com/564x/58/00/8e/58008ea4ff1d02566f9c1dee01d39054.jpg",
    title: "Leaf Candle Holder",
    price: "20000",
    classify: ["Decor", "Living-room"],
},
{
    id: 32,
    image: "https://i.pinimg.com/564x/09/10/65/0910657760b09599090b6a4ae6d365aa.jpg",
    title: "Spiral Felt Star",
    price: "50000",
    classify: ["Decor", "Other"],
},
{
    id: 33,
    image: "https://i.pinimg.com/564x/a9/8c/af/a98caf401a40f14985eab08d45233d28.jpg",
    title: "White Dream Catcher",
    price: "80000",
    classify: ["Decor", "Other"],
},
{
    id: 34,
    image: "https://i.pinimg.com/564x/77/11/e4/7711e415480a127439b0ddee9d4c4d2c.jpg",
    title: "Metallic-Flecked Toilet",
    price: "350000",
    classify: ["Bathroom"],
},
{
    id: 35,
    image: "https://i.pinimg.com/564x/c5/a1/d2/c5a1d28df1eb510589f2e5d6ed7e3e81.jpg",
    title: "Outdoor Egg Chair",
    price: "250000",
    classify: ["Bancony"],
},
{
    id: 36,
    image: "https://i.pinimg.com/564x/78/09/57/7809575e429f63fcc2b3ff9cbb2f3dcb.jpg",
    title: "Multi-function Cabinet",
    price: "100000",
    classify: ["Bathroom", "Bedroom"],
},
{
    id: 37,
    image: "https://i.pinimg.com/564x/3c/0f/7e/3c0f7ec359b972c2af24f21ac3b7a7d9.jpg",
    title: "Orissa Shower Curtain",
    price: "60000",
    classify: ["Bathroom"],
},
{
    id: 38,
    image: "https://i.pinimg.com/564x/8b/a1/3f/8ba13fdec6bce2b9d00350441ae54098.jpg",
    title: "Multi-use Shelf",
    price: "99000",
    classify: ["Bathroom", "Other"],
},
{
    id: 39,
    image: "https://i.pinimg.com/564x/00/1d/f1/001df1dfccded85d8f4f82403e332efc.jpg",
    title: "Susie Storage Cart",
    price: "150000",
    classify: ["Bathroom"],
},
{
    id: 40,
    image: "https://i.pinimg.com/236x/bd/9d/a4/bd9da4cb85245a855da6a9544d68f5c5.jpg",
    title: "Pastel Caninet",
    price: "199000",
    classify: ["Bathroom", "Bedroom"],
},
{
    id: 41,
    image: "https://i.pinimg.com/564x/5b/83/d8/5b83d8aa9825f28a886ff197ac1d9a00.jpg",
    title: "Leaf Design Decor",
    price: "99000",
    classify: ["Wall", "Decor"],
},
{
    id: 42,
    image: "https://i.pinimg.com/564x/21/0b/3a/210b3a737adcce9e5770dbf5c65c12ea.jpg",
    title: "Swing Decoration",
    price: "150000",
    classify: ["Bancony", "Decor"],
},
{
    id: 43,
    image: "https://i.pinimg.com/564x/9d/0b/26/9d0b26b837477c13801642fac5501d57.jpg",
    title: "Plant Hanger",
    price: "15000",
    classify: ["Bancony", "Decor"],
},
{
    id: 44,
    image: "https://i.pinimg.com/564x/ae/0c/8e/ae0c8ec53ca06b0584647087c87620d4.jpg",
    title: "Large Mirror",
    price: "59000",
    classify: ["Bathroom", "Bedroom"],
},
{
    id: 45,
    image: "https://i.pinimg.com/564x/b5/87/4e/b5874e18447844772edfe1fa39b68733.jpg",
    title: "Pillow Sofa Decor",
    price: "50000",
    classify: ["Living-room"],
},
{
    id: 46,
    image: "https://i.pinimg.com/564x/92/45/95/924595ce6586b9ca80f9d2b9c3c1c7a2.jpg",
    title: "Doily Table Runner ",
    price: "50000",
    classify: ["Kitchen", "Decor", "Other"],
},
{
    id: 47,
    image: "https://i.pinimg.com/564x/38/4b/ed/384bed5d26bac30bfb95fb6a18d796ea.jpg",
    title: "Flowers Pillow",
    price: "30000",
    classify: ["Living-room", "Bedroom"],
},
{
    id: 48,
    image: "https://i.pinimg.com/564x/9a/53/76/9a537699398760f935687825f0090f03.jpg",
    title: "Crochet Pearl Valance",
    price: "20000",
    classify: ["Other", "Decor"],
},
{
    id: 49,
    image: "https://i.pinimg.com/564x/9f/2f/85/9f2f8526a149fac8a86c22c5df9a38d9.jpg",
    title: "Unique Loryal Curtain",
    price: "50000",
    classify: ["Other", "Decor"],
},
{
    id: 50,
    image: "https://i.pinimg.com/564x/3d/e5/f3/3de5f3f4ae5123997458c7363ca03525.jpg",
    title: "Reflections Decor",
    price: "500000",
    classify: ["Other", "Decor"],
},
{
    id: 51,
    image: "https://i.pinimg.com/564x/25/03/fd/2503fdba3004a928fea1de75c5e28e92.jpg",
    title: "Tiny Round Washbasin",
    price: "250000",
    classify: ["Bathroom"],
},
{
    id: 52,
    image: "https://i.pinimg.com/564x/0f/18/de/0f18de496f41911167a648418639bcfa.jpg",
    title: "Rocking Chair",
    price: "50000",
    classify: ["Living-room", "Bancony"],
},
{
    id: 53,
    image: "https://i.pinimg.com/564x/54/a6/cc/54a6cc90ad210d20d2df22b53a0fefe8.jpg",
    title: "Stone Wash Basins",
    price: "500000",
    classify: ["Bathroom"],
},
{
    id: 54,
    image: "https://i.pinimg.com/564x/21/ca/9b/21ca9b4c8fc0cb5eee9deadf5a598573.jpg",
    title: "Beige Hanging Shelf",
    price: "50000",
    classify: ["Other", "Bathroom"],
},
{
    id: 55,
    image: "https://i.pinimg.com/564x/5d/2a/8b/5d2a8b9f5f63755e90505da89a657c52.jpg",
    title: "Simple Clock",
    price: "5000",
    classify: ["Living-room", "Wall"],
},
{
    id: 56,
    image: "https://i.pinimg.com/564x/72/48/ad/7248adcc835c853556a5836317ee4d9b.jpg",
    title: "Wooden Eggs Holder",
    price: "15000",
    classify: ["Kitchen"],
},
{
    id: 57,
    image: "https://i.pinimg.com/564x/72/48/ad/7248adcc835c853556a5836317ee4d9b.jpg",
    title: "Ceramic Batsket",
    price: "5000",
    classify: ["Other", "Kitchen"],
},
{
    id: 58,
    image: "https://i.pinimg.com/564x/b4/06/2b/b4062b116ba785a9d63a809a5c0bf064.jpg",
    title: "Canvas Gardening Wall",
    price: "2000",
    classify: ["Other", "Wall"],
},
{
    id: 59,
    image: "https://i.pinimg.com/564x/0d/ea/96/0dea967ea5eda46a800d030972e58a66.jpg",
    title: "Bear Honney Blossom",
    price: "60000",
    classify: ["Other", "Kitchen"],
},
{
    id: 60,
    image: "https://i.pinimg.com/236x/35/c7/58/35c7587aa217b03f107ee18fa50a7e73.jpg",
    title: "Bold Chair",
    price: "150000",
    classify: ["Bancony", "Living-room"],
},
{
    id: 61,
    image: "https://i.pinimg.com/564x/77/82/27/778227992d168b4c6db1830114e792b8.jpg",
    title: "Toilet Paper Holder",
    price: "300000",
    classify: ["Wall", "Living-room", "Decor"],
},
{
    id: 62,
    image: "https://i.pinimg.com/564x/b5/6e/21/b56e2151f3e946f6ad5d32dd642635cf.jpg",
    title: "Pastel Curtain",
    price: "50000",
    classify: ["Other", "Decor"],
},
{
    id: 63,
    image: "https://i.pinimg.com/564x/87/b2/61/87b261cd96d7405e80e9521b0a362851.jpg",
    title: "Vintage Chandeliers",
    price: "50000",
    classify: ["Living-room", "Bancony"],
},
];

let perPage = 16;
let currentPage = 1;
let start = 0;
let end = perPage;

function getCurrentPage(currentPage) {
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
}

let totalPage = Math.ceil(product.length / perPage);
const btnNext = document.querySelector(".btn-next");
const btnPrevious = document.querySelector(".btn-previous");
let thisProduct = [];
const goToDetail = (key) => {
    thisProduct.push({
        detail: product[key],
        qty: 1
    })
}

function renderProduct() {
    let html = "";
    const content = product.map((i, index) => {
        if (index >= start && index < end) {
            html += `<div class="col h_300 ">
              <a id="${i.id}" onclick="detail(${index})">
                      <div class="hover_product d-flex">
                        <div class="title_color">
                          <img class="w_product" src="${i.image}" alt="">
                          <p class="ml_5 fs_1 fw-bold">${i.title}</p>
                          <p class="ml_5 fs_1 fw-light">${i.price}$</p>
                        </div>
                        <div class="d-flex flex-column hover_open_cart">
                        <a onclick="addToFavourite(${index})" class="heart_product color_heart" href="#"><i class="fa-regular fa-heart"></i></a>
                        <a class="heart_product color_eye" href="#"><i class="fa-regular fa-eye"></i></a>
                        <a onclick="addToCart(${index})" href="#" class="heart_product color_cart"><i class="fa-solid fa-cart-shopping"></i></a>
                        </div>
                      </div>
                      </a>
                  </div>`;
        }
    });
    document.getElementById("product_shop").innerHTML = html;
}

if (document.getElementById("product_shop") !== null) {
    renderProduct();
}

function renderListPage(totalPage) {
    let html = "";
    html += `<li class="page-item"><a class="page-link" href="#">${1}</a></li>`;
    for (let i = 2; i <= totalPage; i++) {
        html += `<li class="page-item"><a class="page-link" href="#">${i}</a></li>`;
    }
    document.getElementById("number-page").innerHTML = html;
    document.getElementById("number-page").style.display = "flex";
}

if (document.getElementById("number-page") !== null) {
    renderListPage(totalPage);
}

function changePage() {
    let currentPage = document.querySelectorAll(".number-page li");
    for (let i = 0; i < currentPage.length; i++) {
        currentPage[i].addEventListener("click", () => {
            const value = i + 1;
            currentPage = value;
            getCurrentPage(currentPage);
            renderProduct();
        });
    }
}
changePage();

if (btnNext !== null && btnPrevious !== null) {
    btnNext.addEventListener("click", () => {
        currentPage++;
        if (currentPage >= totalPage) {
            currentPage = totalPage;
        }
        getCurrentPage(currentPage);
        renderProduct();
    });

    btnPrevious.addEventListener("click", () => {
        currentPage--;
        if (currentPage <= 1) {
            currentPage = 1;
        }
        getCurrentPage(currentPage);
        renderProduct();
    });
}

function renderByClasstify(classify) {
    let html = "";
    const content = product.map((i, index) => {
        if (classify === "all") {
            if (index >= start && index < end) {
                html += `<div class="col h_300 ">
                  <a id="${i.id}" onclick="detail(${index})">
                          <div class="hover_product d-flex">
                            <div class="title_color">
                              <img class="w_product" src="${i.image}" alt="">
                              <p class="ml_5 fs_1 fw-bold">${i.title}</p>
                              <p class="ml_5 fs_1 fw-light">${i.price}$</p>
                            </div>
                            <div class="d-flex flex-column hover_open_cart">
                            <a onclick="addToFavourite(${index})"  class="heart_product color_heart" href="#"><i class="fa-regular fa-heart"></i></a>
                            <a class="heart_product color_eye" href="#"><i class="fa-regular fa-eye"></i></a>
                            <a onclick="addToCart(${index})" href="#" class="heart_product color_cart"><i class="fa-solid fa-cart-shopping"></i></a>
                            </div>
                          </div>
                          </a>
                      </div>`;
            }
        } else if (i.classify.includes(classify)) {
            html += `<div class="col h_300 ">
                        <a id="${i.id}" onclick="detail(${index})">
                        <div class="hover_product d-flex">
                        <div class="title_color">
                            <img class="w_product" src="${i.image}" alt="">
                            <p class="ml_5 fs_1 fw-bold">${i.title}</p>
                            <p class="ml_5 fs_1 fw-light">${i.price}$</p>
                        </div>
                    <div class="d-flex flex-column hover_open_cart">
                        <a onclick="addToFavourite(${index})"  class="heart_product color_heart" href="#"><i class="fa-regular fa-heart"></i></a>
                        <a class="heart_product color_eye" href="#"><i class="fa-regular fa-eye"></i></a>
                        <a onclick="addToCart(${index})" href="#" class="heart_product color_cart"><i class="fa-solid fa-cart-shopping"></i></a>
                    </div>
                  </div>
                  </a>
              </div>`;
        }
        document.getElementById("product_shop").innerHTML = html;
        // let totalPage = Math.ceil(sum / perPage);
        // renderListPage(totalPage);
    });
}

const All = document.querySelector("#All");
const Bathroom = document.querySelector("#Bathroom");
const Kitchen = document.querySelector("#Kitchen");
const Bedroom = document.querySelector("#Bedroom");
const Wall = document.querySelector("#Wall");
const Decor = document.querySelector("#Decor");
const LivingRoom = document.querySelector("#LivingRoom");
const Bancony = document.querySelector("#Bancony");
const Other = document.querySelector("#Other");

if (
    All != null ||
    Bathroom != null ||
    Kitchen != null ||
    Bedroom != null ||
    Wall != null ||
    Decor != null ||
    LivingRoom != null ||
    Other != null
) {
    renderByClasstify("all");
    All.addEventListener("click", () => {
        renderByClasstify("all");
    });
    Bathroom.addEventListener("click", () => {
        renderByClasstify("Bathroom");
    });
    Kitchen.addEventListener("click", () => {
        renderByClasstify("Kitchen");
    });
    Bedroom.addEventListener("click", () => {
        renderByClasstify("Bedroom");
    });
    Wall.addEventListener("click", () => {
        renderByClasstify("Wall");
    });
    Decor.addEventListener("click", () => {
        renderByClasstify("Decor");
    });
    LivingRoom.addEventListener("click", () => {
        renderByClasstify("Living-room");
    });
    Bancony.addEventListener("click", () => {
        renderByClasstify("Bancony");
    });
    Other.addEventListener("click", () => {
        renderByClasstify("Other");
    });
}

const searchProduct = () => {
    let titleSearch = document.getElementById("searchProduct");
    let html = "";
    const content = product.map((i, index) => {
        let title = i.title.toLowerCase();
        let searchTitle = titleSearch.value.toLowerCase();
        if (title.includes(searchTitle)) {
            html += `<div class="col h_300 ">
                        <a id="${i.id}" onclick="detail(${index})">
                        <div class="hover_product d-flex">
                        <div class="title_color">
                            <img class="w_product" src="${i.image}" alt="">
                            <p class="ml_5 fs_1 fw-bold">${i.title}</p>
                            <p class="ml_5 fs_1 fw-light">${i.price}$</p>
                        </div>
                    <div class="d-flex flex-column hover_open_cart">
                        <a onclick="addToFavourite(${index})"  class="heart_product color_heart" href="#"><i class="fa-regular fa-heart"></i></a>
                        <a class="heart_product color_eye" href="#"><i class="fa-regular fa-eye"></i></a>
                        <a onclick="addToCart(${index})" href="#" class="heart_product color_cart"><i class="fa-solid fa-cart-shopping"></i></a>
                    </div>
                    </div>
                    </a>
                </div>`;
        }
    });
    if (html === "") {
        html += `<h1>No product</h1>`;
    }
    document.getElementById("product_shop").innerHTML = html;
};

const runSearchProduct = document.querySelector("#searchProduct");

if (runSearchProduct != null) {
    runSearchProduct.addEventListener("keyup", () => {
        searchProduct();
    });
}

var description = document.getElementById("description");
var additional = document.getElementById("additional");
var reviews = document.getElementById("reviews");
var qa = document.getElementById("qa");

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

        html += `<div class="w_250 d-flex flex-column">
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
        html += `<p>No review</p>`;
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
        html += `<p>No Q & A</p>`;
        const render = document.getElementById("chitiet");
        if (render != null) {
            render.innerHTML = html;
        }

        additional.classList.add("border_style_none");
        reviews.classList.add("border_style_none");
        description.classList.add("border_style_none");
    });
}

// Cart
let total = document.querySelector(".total");
let quatity = document.querySelector(".quatity");

let listCart = localStorage.getItem("cart") ?
    JSON.parse(localStorage.getItem("cart")) : [];

function addToCart(key) {
    if (localStorage.getItem("isLogin") === "true") {
        dataCart = JSON.parse(localStorage.getItem("cart"));
        listCart.push({
            total: product[key],
        });
        localStorage.setItem("cart", JSON.stringify(listCart));
    } else {
        window.location = "login.html"
    }

}

function getDataCart() {
    let html = "";
    let totalPrice = 0;
    let dataCart = JSON.parse(localStorage.getItem("cart"))
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
    let flag = false;
    product.map((i, index) => {
        let qty = 0;
        dataCart.map((j, key) => {
            if (j.total.id == i.id) {
                qty++;
            }
        })
        let numberPrice = new Number(i.price);
        numberPrice = numberPrice * qty;
        totalPrice += numberPrice;

        if (qty > 0) {
            html += `
                <div class="d-flex justify-content-between mb-5">
                    <div class="d-flex align-items-center w_400">
                        <img class="w_40" src="${i.image}" alt="">
                        <div class="ml_10">
                            <p class="fs-4 fw-bold">${i.title}</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center
                        justify-content-between w_270">
                        <p class="fs-4">${numberPrice}</p>
                        <div class="d-flex mr_10 h_40 align-items-center">
                        <div class="apartform" id="apartform1">-</div>
                          <input class="number" type="text" id="qty"
                              inputmode="numeric" min="1" value="${qty}" max="100" step="1"
                              size="4" name="" id="">
                          <div class="apartform" id="plus">+</div>
                        </div>
                        <div>
                            <p class="color_red fw-bold">Remove</p>
                        </div>
                    </div>
                </div>
                `;
        }
    });
    const render = document.getElementById("spCart");
    const total = document.getElementById("total");
    if (render != null && total != null) {
        render.innerHTML = html;
        total.innerHTML = totalPrice;
    }
}

getDataCart();

function reloadCart() {
    listCart.innerHTML = "";
    let count = 0;
    let totalPrice = 0;
    listCart.forEach((value, key) => {
        const numberPrice = new Number(value.price);
        totalPrice += numberPrice;
        count += value.quatity;
    });
    total.innerText = totalPrice.toLocaleString();
    quatity.innerText = count;
}

//Script to footer

var emailSubmit = document.getElementById('e-mail-submit');
let checkMail = () => {
    var filter =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(emailSubmit.value)) {
        emailSubmit.focus;
        return false;
    } else return true;
};

let getEmailSubmit = () => {
    if (checkMail()) {
        let emaiSubmitStorage = localStorage.getItem("email-input") ?
            JSON.parse(localStorage.getItem("email-input")) : [];
        emaiSubmitStorage.push({
            title: emailSubmit.value,
            type: "information user",
        });

        localStorage.setItem('email-input', JSON.stringify(emaiSubmitStorage));
        const notify = document.createElement("p");
        notify.innerHTML = "Email submitted successfully, thanks!";
        notify.style.color = "green";
        document.getElementById("register").appendChild(notify);
        setTimeout(() => {
            document.getElementById('register').removeChild(notify);
            emailSubmit.value = "";
        }, "1000");
    } else {
        const notify = document.createElement("p");
        notify.innerHTML = "Invalid email e.g. Example@gmail.com";
        notify.style.color = "red";
        document.getElementById("register").appendChild(notify);
        setTimeout(() => {
            document.getElementById('register').removeChild(notify);
            emailSubmit.value = "";
        }, "1000");
    }
}


function catchEnter(key) {
    var keycode = (key.keyCode ? key.keyCode : key.which);
    if (keycode == '13') {
        getEmailSubmit();
    }
}
addEventListener('keypress', catchEnter);



//Register

const checkAccountRegister = () => {
    let fullNameRes = document.getElementById("NameRegister").value;
    let emailRes = document.getElementById("EmailRegister").value;
    let passWordRes = document.getElementById("PassRegister").value;
    let passRepeatRs = document.getElementById("PassRepeatRegister").value;
    let checkRes = document.getElementById("CheckRes");

    let regexText = /[a-zA-Z]$/;
    let regexEmail = /[a-zA-Z0-9-_.]+\@+[a-zA-Z0-9]+\.+[a-zA-Z]{2,4}$/
    let regexPass = /.{8}$/

    if (fullNameRes != "" || emailRes != "" || passWordRes != "" || passRepeatRs != "") {
        if (!regexText.test(fullNameRes)) {
            alert2("Name without numbers or special characters", "light", "NameRes");
        } else if (!regexEmail.test(emailRes)) {
            alert2("Invalid email e.g. Example@gmail.com", "light", "EmailRes")
        } else if (!regexPass.test(passWordRes)) {
            alert2("Password with 8 characters or more", "light", "PassRes")
        } else if (passWordRes !== passRepeatRs) {
            alert2("Password does not match!", "light", "PassRepeatRes")
        } else if (!checkRes.checked) {
            alert2("Password does not match!", "light", "CheckResAlert")
        }
        else {
            let account = localStorage.getItem("account") ?
                JSON.parse(localStorage.getItem("account")) : [];
            account.push({
                name: fullNameRes,
                email: emailRes,
                password: passWordRes

            })
            localStorage.setItem("account", JSON.stringify(account))
            window.location = "login.html"
        }
    } else {
        alert2("Please enter full information!", "light", "PassRepeatRes")
    }

}



const alert2 = (message, type, parent) => {
    const wrapper = document.createElement("div")
    const alertPlaceholder = document.getElementById(`${parent}`)
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

let btnRegister = document.getElementById("Register_Form")
if (btnRegister != null) {
    btnRegister.addEventListener("submit", (e) => {
        e.preventDefault();
        checkAccountRegister()
    })
}


//Login
const Login = () => {
    let emailLg = document.getElementById("EmailLogin")
    let passLg = document.getElementById("PassLogin")
    let account = localStorage.getItem("account") ?
        JSON.parse(localStorage.getItem("account")) : [];
    if (emailLg.value != "" || passLg.value != "") {
        account.map(acc => {
            if (acc.email === emailLg.value && acc.password === passLg.value) {
                localStorage.removeItem("isLogin")
                localStorage.setItem("isLogin", "true")
                localStorage.removeItem("Logged")
                localStorage.setItem("Logged", acc.name)
                window.location = "index.html"
            } else {
                alert2("Invalid account!", "light", "PassLgForm")
            }
        })
    } else {
        alert2("Please enter full information!", "light", "PassLgForm")
    }

}

let btnLogin = document.getElementById("Login_Form")
if (btnLogin != null) {
    btnLogin.addEventListener("submit", (e) => {
        e.preventDefault();
        Login();
    })

}
function TogglePass() {
    let PassInput = document.getElementById("PassLogin")
    if (PassInput.getAttribute("type") == "password") {
        PassInput.setAttribute("type", "text");
    } else {
        PassInput.setAttribute("type", "password");
    }
}


function LogOut() {
    localStorage.removeItem("isLogin");
    localStorage.setItem("isLogin", "false");
    localStorage.removeItem("Logged")
    window.location = "login.html"
}

const renderLogin_out = () => {
    let btnAcc = document.getElementById("btnAccount")
    let btnMenu = document.getElementById("menu-button-dropdown")
    let headAcc = document.getElementById("head_of-acc")
    let ul = document.createElement("ul")
    ul.setAttribute("class", "dropdown-menu")
    if (localStorage.getItem("isLogin") === "true") {
        ul.innerHTML =
            `
        <li><a class="dropdown-item" href="account.html">Account</a></li>
        <li><a class="dropdown-item" onclick="LogOut()">Log out</a></li>
        `
        if (btnMenu != null) {
            btnMenu.innerHTML = `
        <div><a href="/index.html">Home</a></div>
        <div><a href="/shop.html">Shop</a></div>
        <div><a href="/about_us.html">AboutUs</a></div>
        <div><a href="/cart.html">Cart</a></div>
        <div><a class="dropdown-item" href="acount.html">Account</a></div>
        <div><a class="dropdown-item" onclick="LogOut()">Log out</a></div>`
        }

        if (headAcc != null) {
            let title = document.createElement("title")
            title.innerText = `${localStorage.getItem("Logged")}`
            headAcc.appendChild(title)
        }
    } else {
        ul.innerHTML = `<li><a class="dropdown-item" href="login.html">Log in</a></li>`
        if (btnMenu != null) {
            btnMenu.innerHTML = `
            <div><a href="/index.html">Home</a></div>
            <div><a href="/shop.html">Shop</a></div>
            <div><a href="/about_us.html">AboutUs</a></div>
            <div><a class="dropdown-item" href="login.html">Log in</a></div>`
        }
    }
    if(btnAcc != null){
        btnAcc.appendChild(ul)
    }
}

renderLogin_out()

//admin_login

const getAdminLogin = () => {
    let username = document.getElementById("UsernameAdmin")
    let adminPassword = document.getElementById("PassAdmin")

    // let adminStorage = localStorage.getItem("admin") ?
    //     JSON.parse(localStorage.getItem("admin")) : [];
    // localStorage.setItem("admin", { ad: btoa("dekorare") + "UXV5ZW5OZ2hpZW0=", min: btoa("123" + "RGVrb3JhcmU=") })
    if (username.value === "dekorare" || adminPassword.value === "123") {
        window.location = "admin.html"
    }
}

let btnAdminLogin = document.getElementById("Admin_Login")
btnAdminLogin.addEventListener("submit", e => {
    e.preventDefault()
    getAdminLogin()
})








