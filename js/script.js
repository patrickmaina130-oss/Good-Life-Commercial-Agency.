//==============================
// MOBILE MENU
//==============================

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

//==============================
// HERO IMAGE SLIDER
//==============================

const heroImage = document.getElementById("heroImage");

const images = [

"https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=80",

"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",

"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",

"https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=80"

];

let current = 0;

setInterval(() => {

current++;

if(current >= images.length){

current = 0;

}

heroImage.src = images[current];

}, 4000);
