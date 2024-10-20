let color_1 = document.querySelector("#color-1");
let color_2 = document.querySelector("#color-2");
let color_3 = document.querySelector("#color-3");
let watch_1 = document.querySelector("#watch-1");
let watch_2 = document.querySelector("#watch-2");
let watch_3 = document.querySelector("#watch-3");
function color_11(){
    color_1.classList.add("active");
    color_2.classList.remove("active");
    color_3.classList.remove("active");
    watch_1.classList.add("active");
    watch_2.classList.remove("active");
    watch_3.classList.remove("active");
}
function color_22(){
    color_2.classList.add("active");
    color_3.classList.remove("active");
    color_1.classList.remove("active");
    watch_2.classList.add("active");
    watch_1.classList.remove("active");
    watch_3.classList.remove("active");
}
function color_33(){
    color_3.classList.add("active");
    color_2.classList.remove("active");
    color_1.classList.remove("active");
    watch_3.classList.add("active");
    watch_1.classList.remove("active");
    watch_2.classList.remove("active");
}

function changeColors(color1, color2, color3){
    document.documentElement.style.setProperty('--color-1', color1);
    document.documentElement.style.setProperty('--color-2', color2);
    document.documentElement.style.setProperty('--color-3', color3);
}