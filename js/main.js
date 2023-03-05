const changeButtonMenu = (x) => {
    x.classList.toggle("change");
}

const goToHome = () =>{
    window.location = "http://127.0.0.1:5500/pages/index.html"
}

const goToShop = () =>{
    window.location = "http://127.0.0.1:5500/pages/shop.html"
}

const goToAboutUs = () =>{
    window.location = "http://127.0.0.1:5500/pages/about_us.html"
}

const goToCart = () => {
    window.location = "http://127.0.0.1:5500/pages/cart.html"
}

var x = document.querySelector("#header_container");
const but = document.querySelectorAll(".header_menu > div > button")
const icon = document.querySelectorAll(".header_cart_lgn > button > i")
let onScroll = () => {
    window.addEventListener("scroll", callBackFunc);
    function callBackFunc() {
        var y = window.pageYOffset;
        if (y > 10) {
            x.classList.add("scroll");
            document.getElementById('header_container').style.backgroundColor = "white";
            but.forEach(element => {
                element.style.color = 'black';
            });
            icon.forEach(element => {
                element.style.color = 'black'
            })
            document.getElementById('header_button_aboutus').style.color = "black";
            document.querySelector("#header_container > a > h1").style.color = "black";
        } else {
            x.classList.remove("scroll");
            document.getElementById('header_container').style.backgroundColor = "rgba(52, 58, 58, 0.384)";
            but.forEach(element => {
                element.style.color = '';
            });
            icon.forEach(element => {
                element.style.color = ''
            })
            document.querySelector("#header_container > a > h1").style.color = "";
            document.getElementById('header_button_aboutus').style.color = "";
        }
    }
}

window.onload = () => { onScroll()}

const product = [
    { id: 1, image: '"../img-product/Rosy Vase.jpg"', title: "Rosy Vase", price: "120.000$", classify: ["Decor"] },
    { id: 2, image: '"../img-product/Strange Single Sofa.jpg"', title: "Strange Single Sofa", price: "500.000$", classify: ["Living-room" ]},
    { id: 3, image: '"../img-product/Retro Wall Clock.jpg"', title: "Retro Wall Clock", price: "180.000$", classify: ["Wall", "Decor"] },
    { id: 4, image: '"../img-product/Retro Paiting By Me.jpg"', title: "Retro Paiting By Me", price: "1.000.000$", classify: ["Decor"]},
    { id: 5, image: '"../img-product/Holder Curtain Tiebacks.jpg"', title: "Holder Curtain Tiebacks", price: "99.000$", classify: ["Decor"] },
    { id: 6, image: '"../img-product/Light Door Handle.jpg"', title: "Light Door Handle", price: "120.000$", classify: ["Decor"] },
    { id: 7, image: '"../img-product/Flower Garden Cup.jpg"', title: "Flower Garden Cup", price: "80.000$", classify: ["Kitchen"] },
    { id: 8, image: '"../img-product/Luxury Dishes.jpg"', title: "Luxury Dishes", price: "120.000$", classify: ["Kitchen"] },
    { id: 9, image: '"../img-product/Drifwood Wall Clock.jpg"', title: "Drifwood Wall Clock", price: "320.000$", classify: ["Wall", "Decor"] },
    { id: 10, image: '"../img-product/Vintage Fan Wall Lamp.jpg"', title: "Vintage Fan Wall Lamp", price: "100.000$", classify: ["Decor", "Wall"] },
    { id: 11, image: '"../img-product/You are Mirror.jpg"', title: "You're Mirror", price: "120.000$", classify: ["Decor", "Wall"] },
    { id: 12, image: '"../img-product/Morden Planter Kiki.jpg"', title: "Morden Planter Kiki", price: "150.000$", classify: ["Bancony"] },
    { id: 13, image: '"../img-product/Combo Flowers Spoon.jpg"', title: "Combo Flowers Spoon", price: "90.000$", classify: ["Kitchen"] },
    { id: 14, image: '"../img-product/Shower Curtain.jpg"', title: "Shower Curtain", price: "60.000$", classify: ["Bathroom"] },
    { id: 15, image: '"../img-product/Seashell Pillow.jpg"', title: "Seashell Pillow", price: "20.000$", classify: ["Bedroom"] },
    { id: 16, image: '"../img-product/Circle Rug DOVE.jpg"', title: "Circle Rug DOVE", price: "50.000$", classify: ["Bedroom", "Bathroom"] },
    { id: 17, image: '"../img-product/Bloom Chair.jpg"', title: "Bloom Chair", price: "150.000$", classify: ["Living-room"] },
    { id: 18, image: '"../img-product/Bookshelf Checker.jpg"', title: "Bookshelf Checker", price: "80.000$", classify: ["Living-room", "Bedroom"] },
    { id: 19, image: '"../img-product/Coffee Table Design.jpg"', title: "Coffee Table Design", price: "50.000$", classify: ["Bancony"] },
    { id: 20, image: '"../img-product/Cosmico Clothes Hanger.jpg"', title: "Cosmico Clothes Hanger", price: "65.000$", classify: ["Bedroom", "Bathroom"] },
    { id: 21, image: '"../img-product/Iconic Etcetera Chair.jpg"', title: "Iconic Etcetera Chair", price: "70.000$", classify: ["Living-room", "Bancony"] },
    { id: 22, image: '"../img-product/Modern Light.jpg"', title: "Modern Light", price: "110.000$", classify: ["Wall", "Decor"] },
    { id: 23, image: '"../img-product/Snail lamp.jpg"', title: "Snail Light", price: "50.000$", classify: ["Living-room", "Decor"] },
    { id: 24, image: '"../img-product/Water Tower Chair.jpg"', title: "Water Tower Chair", price: "250.000$", classify: ["Living-room", "Bancony"] },
    { id: 25, image: '"../img-product/Float Wall Lamp.jpg"', title: "Float Wall Lamp", price: "150.000$", classify: ["Wall","Decor"] },
    { id: 26, image: '"../img-product/Scandinavian kitchen.jpg"', title: "Scandinavian Kitchen", price: "50.000$", classify: ["Kitchen" ]},
    { id: 27, image: '"../img-product/Remark Floating Shelves.jpg"', title: "Remark Floating Shelves", price: "50.000$", classify: ["Decor", "Bancony"] },
    { id: 28, image: '"../img-product/Coffee Chill Table.jpg"', title: "Coffee Chill Table", price: "120.000$", classify: ["Bancony"] },
    { id: 29, image: '"../img-product/Papering Chair.jpg"', title: "Papering Chair", price: "350.000$", classify: ["Living-room", "Bancony"] },
    { id: 30, image: '"../img-product/Tapio Avena Vase.jpg"', title: "Tapio Avena Vase", price: "50.000$", classify: ["Decor", "Other"] },
    { id: 31, image: '"../img-product/Leaf Candle Holder.jpg"', title: "Leaf Candle Holder", price: "20.00$", classify: ["Decor", "Living-room"] },
    { id: 32, image: '"../img-product/Spiral Felt Star.jpg"', title: "Spiral Felt Star", price: "50.00$", classify: ["Decor", "Other"] },
    { id: 33, image: '"../img-product/Gray Dream Catcher.jpg"', title: "Gray Dream Catcher", price: "80.00$", classify: ["Decor", "Other"] },
    { id: 34, image: '"../img-product/Pink Flower Toilet.jpg"', title: "Pink Flower Toilet", price: "350.000$", classify: ["Bathroom"] },
    { id: 35, image: '"../img-product/Outdoor Egg Chair.jpg"', title: "Outdoor Egg Chair", price: "250.000$", classify: ["Bancony"] },
    { id: 36, image: '"../img-product/Multi-function Cabinet.jpg"', title: "Multi-function Cabinet", price: "100.000$", classify: ["Bathroom", "Bedroom"] },
    { id: 37, image: '"../img-product/Orissa Shower Curtain.jpg"', title: "Orissa Shower Curtain", price: "60.00$", classify: "Bathroom" },
    { id: 38, image: '"../img-product/Multi-use shelf.jpg"', title: "Multi-use Shelf", price: "99.00$", classify: ["Bathroom", "Other"] },
    { id: 39, image: '"../img-product/Susie Storage Cart.jpg"', title: "Susie Storage Cart", price: "150.000$", classify: ["Bathroom"] },
    { id: 40, image: '"../img-product/Pastel Caninet.jpg"', title: "Pastel Caninet", price: "199.000$", classify: ["Bathroom", "Bedroom"] },
    { id: 41, image: '"../img-product/Wood Design Decor.jpg"', title: "Wood Design Decor", price: "99.000$", classify: ["Wall", "Decor"] },
    { id: 42, image: '"../img-product/Swing Decoration.jpg"', title: "Swing Decoration", price: "150.000$", classify: ["Bancony", "Decor"] },
    { id: 43, image: '"../img-product/Strawberry Hanging Planter.jpg"', title: "Strawberry Hanging Planter", price: "15.00$", classify: ["Bancony", "Decor"] },
    { id: 44, image: '"../img-product/Combo Spade Dish.jpg"', title: "Combo Spade Dish", price: "59.00$", classify: ["Kitchen"] },
    { id: 45, image: '"../img-product/Pillow Sofa Decor.jpg"', title: "Pillow Sofa Decor", price: "50.000$", classify: ["Living-room"] },
    { id: 46, image: '"../img-product/Doily Table Runner.jpg"', title: "Doily Table Runner ", price: "50.00$", classify: ["Kitchen", "Decor", "Other"] },
    { id: 47, image: '"../img-product/Flowers Pillow.jpg"', title: "Flowers Pillow", price: "30.00$", classify: ["Living-room", "Bedroom"] },
    { id: 48, image: '"../img-product/Crochet Pearl Valance.jpg"', title: "Crochet Pearl Valance", price: "20.00$", classify: ["Other", "Decor"] },
    { id: 49, image: '"../img-product/Unique Loryal Curtain.jpg"', title: "Unique Loryal Curtain", price: "50.000$", classify: ["Other", "Decor"] },
    { id: 50, image: '"../img-product/Reflections Decor.jpg"', title: "Reflections Decor", price: "500.00$", classify: ["Other", "Decor"] },
    { id: 51, image: '"../img-product/Lavender In Sunset.jpg"', title: "Lavender In Sunset", price: "250.000$", classify: ["Wall", "Decor"] },
    { id: 52, image: '"../img-product/Rocking Chair.jpg"', title: "Rocking Chair", price: "50.000$", classify: ["Living-room", "Bancony"] },
    { id: 53, image: '"../img-product/Outdoor Modular Setting.jpg"', title: "Outdoor Modular Setting", price: "500.000$", classify: ["Other", "Bancony"] },
    { id: 54, image: '"../img-product/Beige Hanging Shelf.jpg"', title: "Beige Hanging Shelf", price: "50.00$", classify: ["Other", "Bathroom"] },
    { id: 55, image: '"../img-product/Mushroom Spice Jar.jpg"', title: "Mushroom Spice Jar", price: "5.00$", classify: ["Kitchen"] },
    { id: 56, image: '"../img-product/Marble Wine Rack.jpg"', title: "Marble Wine Rack", price: "15.00$", classify: ["Kitchen" ]},
    { id: 57, image: '"../img-product/Quartz Bottle Opener.jpg"', title: "Quartz Bottle Opener", price: "5.00$", classify: ["Other", "Kitchen"] },
    { id: 58, image: '"../img-product/Gesprenkelter Haken.jpg"', title: "Gesprenkelter Haken", price: "2.00$", classify: ["Other", "Wall"] },
    { id: 59, image: '"../img-product/Bear Honney Blossom.jpg"', title: "Bear Honney Blossom", price: "60.00$", classify: ["Other", "Kitchen"] },
    { id: 60, image: '"../img-product/Bold Chair.jpg"', title: "Bold Chair", price: "150.00$", classify: ["Bancony", "Living-room"] },
    { id: 61, image: '"../img-product/Combo Framed Branches.jpg"', title: "Combo Framed Branches", price: "300.00$", classify: ["Wall", "Living-room", "Decor"] },
    { id: 62, image: '"../img-product/Osvaldo Table Clock.jpg"', title: "Osvaldo Table Clock", price: "50.00$", classify: ["Other", "Decor"] },
    { id: 63, image: '"../img-product/Square Planter.jpg"', title: "Square Planter", price: "50.00$", classify: ["Bancony"] },
]


let perPageHome = 8;
let start = 0;
let endHome = perPageHome;


function getCurrentPage(currentPage) {
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
}

const renderCarouselInner = () => {
    let html = "";
    const content = product.map((item, index) => {
        if (index >= start && index < perPageHome) {
            html += `<div class="card m_r_10 w-9">
                        <img src = ${item.image} class="card-img-top">
                            <div class="card-body height_categories text-center
                             bg_color_bottom_categories">
                                <p class="card-text fw-bold ">${item.classify[0]}</p>
                            </div>
                    </div>`
                    
        }
    });
    document.getElementById('carousel-inner').innerHTML = html;
    html = "";
    const content_2 = product.map((item, index) => {
        if (index >= start + 16 && index < perPageHome + 16) {
            html += `<div class="card m_r_10 w-9">
                        <img src = ${item.image} class="card-img-top">
                            <div class="card-body height_categories text-center
                             bg_color_bottom_categories">
                                <p class="card-text fw-bold ">${item.classify[0]}</p>
                            </div>
                    </div>`
                    
        }
    });
    document.getElementById('carousel-inner-2').innerHTML = html;
}

const renderCarouselItem = () =>{
    let html = "";
    const content = product.map((item, index) => {
        if (index >= start + perPageHome && index < endHome + 8) {
            html += `<div class="card m_r_10 w-9">
                        <img src = ${item.image} class="card-img-top">
                            <div class="card-body height_categories text-center 
                            bg_color_bottom_categories" >
                                <p class="card-text fw-bold">${item.classify[0]}</p>
                            </div>
                    </div>`
                    
        }
    });
    document.getElementById('carousel-item').innerHTML = html;
    html ="";
    const content_2 = product.map((item, index) => {
        if (index >= start + 32 && index < endHome + 32) {
            html += `<div class="card m_r_10 w-9">
                        <img src = ${item.image} class="card-img-top">
                            <div class="card-body height_categories text-center 
                            bg_color_bottom_categories" >
                                <p class="card-text fw-bold">${item.classify[0]}</p>
                            </div>
                    </div>`
                    
        }
    });
    document.getElementById('carousel-item-2').innerHTML = html;
}


renderCarouselInner()
renderCarouselItem();


