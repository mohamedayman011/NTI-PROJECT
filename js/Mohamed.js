let hidden_list = document.querySelector(".hidden-list");

function open_list(){
    hidden_list.classList.add("active")
};
function close_list(){
    hidden_list.classList.remove("active")
};

let swiper = new Swiper(".slide-swp", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullests: true,
        clickable: true,
    },
    autoplay:{
        delay: 3500,
    },
    loop: true,
});

let home = document.querySelector("#home");
let pages = document.querySelector("#pages");
let blog = document.querySelector("#bolg");
let shop = document.querySelector("#shop");
let collections = document.querySelector("#collections");

function open_home(){
    home.classList.add("active");
};
function close_home(){
    home.classList.remove("active");
};
function open_pages(){
    pages.classList.add("active")
};
function close_pages(){
    pages.classList.remove("active");
};
function open_bolg(){
    blog.classList.add("active")
};
function close_bolg(){
    blog.classList.remove("active");
};
function open_shop(){
    shop.classList.add("active")
};
function close_shop(){
    shop.classList.remove("active");
};
function open_collections(){
    collections.classList.add("active")
};
function close_collections(){
    collections.classList.remove("active");
};


let swiper_2 = new Swiper(".Swiper-2", {
    watchSlidesProgress: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

let swiper_3 = new Swiper(".last-swp",{
    breakpoints:{
        1024:{
            slidesPerView: 6,
            spaceBetween: 15,
        },
        768:{
            slidesPerView: 4,
            spaceBetween: 10,
        },
        320:{
            slidesPerView: 2,
            spaceBetween: 5,
        },
    },
    loop: true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
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
