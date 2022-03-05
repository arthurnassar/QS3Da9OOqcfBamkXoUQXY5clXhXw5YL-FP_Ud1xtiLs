let slider = document.querySelector("#carrossel-tags-category-container");
let innerSlider = document.querySelector("#tags");
let tags = document.getElementById("tags");


let pressed = false;
let startx;
let x;





slider.addEventListener("mousedown", (e)=>{
    pressed = true;
    startx = e.offsetX - innerSlider.offsetLeft; 
    console.log(startx);
    slider.style.cursor = "grabbing";

})
