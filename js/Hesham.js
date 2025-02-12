let hidden_list = document.querySelector(".hidden-list");

function open_list(){
    hidden_list.classList.add("active")
}
function close_list(){
    hidden_list.classList.remove("active")
}

let home = document.querySelector("#home");
let pages = document.querySelector("#pages");
let blog = document.querySelector("#bolg");
let shop = document.querySelector("#shop");
let collections = document.querySelector("#collections");

function open_home(){
    home.classList.add("active");
}
function close_home(){
    home.classList.remove("active");
}
function open_pages(){
    pages.classList.add("active")
}
function close_pages(){
    pages.classList.remove("active");
}
function open_bolg(){
    blog.classList.add("active")
}
function close_bolg(){
    blog.classList.remove("active");
}
function open_shop(){
    shop.classList.add("active")
}
function close_shop(){
    shop.classList.remove("active");
}
function open_collections(){
    collections.classList.add("active")
}
function close_collections(){
    collections.classList.remove("active");
}


let swiper = new Swiper(".Slide-swp", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullests: true,
        clickable: true,
    },
    breakpoints:{
        1024:{
            slidesPerView: 2,
        },
        320:{
            slidesPerView: 1,
        },
    },
    autoplay:{
        delay: 3500,
    },
    loop: true,
});

let button_search = document.querySelector("#open-search");
let close_search = document.querySelector("#close-search");
let search_box = document.querySelector(".search-box");

button_search.onclick = function(){
    search_box.classList.add("active");
    close_search.classList.add("active");
    button_search.classList.add("hidden");
};

close_search.onclick = function(){
    search_box.classList.remove("active");
    close_search.classList.remove("active");
    button_search.classList.remove("hidden");
};


let image_prodcut1 = document.querySelector("#p1");
let image_prodcut2 = document.querySelector("#p2");
let image_prodcut3 = document.querySelector("#p3");


function image_1p1(){
    image_prodcut1.src="../images/2-300x300.jpg";
}
function image_2p1(){
    image_prodcut1.src="../images/3-300x300.jpg";
}
function image_3p1(){
    image_prodcut1.src="../images/15-300x300.jpg";
}

function image_1p2(){
    image_prodcut2.src="../images/2-300x300.jpg";
}
function image_2p2(){
    image_prodcut2.src="../images/3-300x300.jpg";
}
function image_3p2(){
    image_prodcut2.src="../images/15-300x300.jpg";
}

function image_1p3(){
    image_prodcut3.src="../images/2-300x300.jpg";
}
function image_2p3(){
    image_prodcut3.src="../images/3-300x300.jpg";
}
function image_3p3(){
    image_prodcut3.src="../images/15-300x300.jpg";
}