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
