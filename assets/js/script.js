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

/*==================================================
MARKETPLACE RENDERER
==================================================*/

const marketSlider = document.getElementById("marketSlider");
const categoryButtons = document.querySelectorAll(".category-btn");

function renderMarketplace(category){

    if(!marketSlider) return;

    marketSlider.innerHTML = "";

    marketplaceData[category].forEach(item=>{

        marketSlider.innerHTML += `

        <article class="min-w-[340px] bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 snap-start">

            <img
                src="${item.image}"
                alt="${item.title}"
                loading="lazy"
                class="w-full h-64 object-cover">

            <div class="p-6">

                <span class="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm font-semibold">

                    ${item.badge}

                </span>

                <h3 class="text-2xl font-bold text-primary mt-4">

                    ${item.title}

                </h3>

                <p class="text-gray-500 mt-2">

                    📍 ${item.location}

                </p>

                <p class="mt-2 text-yellow-500">

                    ⭐ ${item.rating}

                </p>

                <div class="mt-5">

                    <p class="text-gray-400 text-sm">

                        Estimated Price

                    </p>

                    <h2 class="text-3xl font-bold text-gold">

                        USD ${item.priceUSD}

                    </h2>

                    <p class="text-primary">

                        KES ${item.priceKES}

                    </p>

                </div>

                <div class="flex justify-between items-center mt-6">

    <div class="flex gap-4 text-xl">

        <button>❤️</button>

        <button>🔗</button>

        <button class="quick-view"
                data-index="${index}">
            👁
        </button>

    </div>

    <button
        class="bg-gold text-primary px-5 py-2 rounded-full font-bold hover:scale-105 transition">

        Book Now

    </button>

</div>

            </div>

        </article>

        `;

    });

}

/* Load Tours First */

renderMarketplace("tours");

/* Category Buttons */

categoryButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        categoryButtons.forEach(btn=>btn.classList.remove("active"));

        button.classList.add("active");

        renderMarketplace(button.dataset.category);

    });

});

/*==================================================
MARKETPLACE SLIDER CONTROLS
==================================================*/

const slider = document.getElementById("marketSlider");

const leftBtn = document.getElementById("slideLeft");

const rightBtn = document.getElementById("slideRight");

const scrollAmount = 380;

/* Right Arrow */

if(rightBtn){

rightBtn.addEventListener("click",()=>{

slider.scrollBy({

left:scrollAmount,

behavior:"smooth"

});

});

}

/* Left Arrow */

if(leftBtn){

leftBtn.addEventListener("click",()=>{

slider.scrollBy({

left:-scrollAmount,

behavior:"smooth"

});

});

}
/*==================================================
AUTO SCROLL
==================================================*/

let autoSlide = setInterval(()=>{

if(!slider) return;

if(slider.scrollLeft + slider.clientWidth >= slider.scrollWidth-20){

slider.scrollTo({

left:0,

behavior:"smooth"

});

}

else{

slider.scrollBy({

left:380,

behavior:"smooth"

});

}

},5000);
/*==================================================
PAUSE AUTO SLIDE
==================================================*/

slider.addEventListener("mouseenter",()=>{

clearInterval(autoSlide);

});

slider.addEventListener("mouseleave",()=>{

autoSlide=setInterval(()=>{

if(slider.scrollLeft+slider.clientWidth>=slider.scrollWidth-20){

slider.scrollTo({

left:0,

behavior:"smooth"

});

}

else{

slider.scrollBy({

left:380,

behavior:"smooth"

});

}

},5000);

});
