/*==================================================
SECTION 2 : MOBILE MENU
==================================================*/

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");

    menuBtn.textContent =
        mobileMenu.classList.contains("hidden") ? "☰" : "✕";

});
/*==================================================
HERO AUTO SLIDER
==================================================*/

const slides = document.querySelectorAll(".hero-slide");

const heroTitle = document.getElementById("heroTitle");

const heroDescription = document.getElementById("heroDescription");

const heroPrice = document.getElementById("heroPrice");

const heroKes = document.getElementById("heroKes");

const heroData = [

{
title:"Explore Kenya",

description:"Luxury safaris and unforgettable adventures.",

usd:"USD 299",

kes:"KES 38,500"

},

{
title:"Luxury Hotels",

description:"Book premium hotels and resorts across Kenya.",

usd:"USD 120",

kes:"KES 15,500"

},

{
title:"Executive Vehicle Hire",

description:"Comfortable self-drive and chauffeur services.",

usd:"USD 80",

kes:"KES 10,500"

},

{
title:"Prime Real Estate",

description:"Buy, rent and manage premium properties.",

usd:"From USD 15,000",

kes:"From KES 1.9M"

}

];

let currentSlide = 0;

function showSlide(index){

slides.forEach((slide)=>{

slide.classList.remove("opacity-100");

slide.classList.add("opacity-0");

});

slides[index].classList.remove("opacity-0");

slides[index].classList.add("opacity-100");

heroTitle.textContent = heroData[index].title;

heroDescription.textContent = heroData[index].description;

heroPrice.textContent = heroData[index].usd;

heroKes.textContent = heroData[index].kes;

}

setInterval(()=>{

currentSlide++;

if(currentSlide>=slides.length){

currentSlide=0;

}

showSlide(currentSlide);

},5000);
