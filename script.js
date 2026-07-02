"use strict";

/*==================================================
GOOD LIFE COMMERCIAL AGENCIES
MAIN SCRIPT
==================================================*/

/*==================================================
1. GLOBAL VARIABLES
==================================================*/

let currentCategory = "tours";
let currentSlide = 0;
let autoSlide = null;

const scrollAmount = 380;

/*==================================================
2. DOM ELEMENTS
==================================================*/

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const header = document.getElementById("header");

const slides = document.querySelectorAll(".hero-slide");

const heroTitle = document.getElementById("heroTitle");
const heroDescription = document.getElementById("heroDescription");
const heroPrice = document.getElementById("heroPrice");
const heroKes = document.getElementById("heroKes");

const marketSlider = document.getElementById("marketSlider");
const categoryButtons = document.querySelectorAll(".category-btn");

const leftBtn = document.getElementById("slideLeft");
const rightBtn = document.getElementById("slideRight");

const quickViewModal = document.getElementById("quickViewModal");
const closeModal = document.getElementById("closeModal");

const serviceSelect = document.getElementById("serviceSelect");
const marketSearch = document.getElementById("marketSearch");

/*==================================================
3. MOBILE MENU
==================================================*/

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("hidden");

        menuBtn.innerHTML = mobileMenu.classList.contains("hidden")
            ? "☰"
            : "✕";

    });

}

/*==================================================
4. STICKY HEADER
==================================================*/

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {

            header.classList.add(
                "shadow-xl",
                "backdrop-blur-md"
            );

        } else {

            header.classList.remove(
                "shadow-xl",
                "backdrop-blur-md"
            );

        }

    });

}

/*==================================================
5. HERO DATA
==================================================*/

const heroData = [

{
title: "Explore Kenya",
description: "Luxury safaris and unforgettable adventures.",
usd: "USD 299",
kes: "KES 38,500"
},

{
title: "Luxury Hotels",
description: "Book premium hotels and resorts across Kenya.",
usd: "USD 120",
kes: "KES 15,500"
},

{
title: "Executive Vehicle Hire",
description: "Comfortable self-drive and chauffeur services.",
usd: "USD 80",
kes: "KES 10,500"
},

{
title: "Prime Real Estate",
description: "Buy, rent and manage premium properties.",
usd: "From USD 15,000",
kes: "From KES 1.9M"
}

];

/*==================================================
6. HERO SLIDER
==================================================*/

function showSlide(index) {

    if (!slides.length) return;

    slides.forEach(slide => {

        slide.classList.remove("opacity-100");
        slide.classList.add("opacity-0");

    });

    slides[index].classList.remove("opacity-0");
    slides[index].classList.add("opacity-100");

    if (heroTitle) heroTitle.textContent = heroData[index].title;

    if (heroDescription) heroDescription.textContent = heroData[index].description;

    if (heroPrice) heroPrice.textContent = heroData[index].usd;

    if (heroKes) heroKes.textContent = heroData[index].kes;

}

function startHeroSlider() {

    if (!slides.length) return;

    showSlide(0);

    setInterval(() => {

        currentSlide++;

        if (currentSlide >= slides.length) {

            currentSlide = 0;

        }

        showSlide(currentSlide);

    }, 5000);

}

startHeroSlider();

/*==================================================
7. MARKETPLACE RENDERER
==================================================*/

function renderMarketplace(category) {

    if (!marketSlider) return;

    if (!marketplaceData[category]) return;

    marketSlider.innerHTML = "";

    marketSlider.innerHTML += `

<article class="service-card min-w-[370px] max-w-[370px] bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 snap-start">

<div class="relative overflow-hidden">

<img
src="${item.image}"
alt="${item.title}"
class="w-full h-72 object-cover hover:scale-110 transition duration-700">

<span class="absolute top-4 left-4 bg-amber-500 text-white px-4 py-2 rounded-full font-bold text-sm">
${item.badge}
</span>

<div class="absolute top-4 right-4 flex gap-2">

<button class="favorite-btn bg-white/90 rounded-full w-10 h-10">
❤️
</button>

<button class="share-btn bg-white/90 rounded-full w-10 h-10">
🔗
</button>

</div>

<div class="absolute bottom-4 left-4 bg-black/60 backdrop-blur text-white px-4 py-2 rounded-xl">

⭐ ${item.rating}

</div>

</div>

<div class="p-6">

<h3 class="text-2xl font-bold text-slate-800">
${item.title}
</h3>

<p class="text-slate-500 mt-2">
📍 ${item.location}
</p>

<div class="mt-6">

<p class="text-sm text-gray-500">
Starting From
</p>

<h2 class="text-3xl font-extrabold text-amber-600">
USD ${item.priceUSD}
</h2>

<p class="text-slate-700">
KES ${item.priceKES}
</p>

</div>

<div class="flex gap-3 mt-6">

<button
class="quick-view flex-1 border-2 border-amber-500 text-amber-600 rounded-xl py-3 font-bold"
data-index="${index}">
Quick View
</button>

<button
class="book-now flex-1 bg-amber-500 text-white rounded-xl py-3 font-bold hover:bg-amber-600">
Book Now
</button>

</div>

</div>

</article>

`;

    });

    attachQuickView();
attachBookButtons();
attachFavoriteButtons();
attachShareButtons();

}

/*==================================================
8. LOAD DEFAULT CATEGORY
==================================================*/



/*==================================================
9. CATEGORY SWITCHER
==================================================*/

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {

            btn.classList.remove(
                "bg-amber-500",
                "text-white"
            );

            btn.classList.add(
                "bg-white",
                "text-slate-700"
            );

        });

        button.classList.remove(
            "bg-white",
            "text-slate-700"
        );

        button.classList.add(
            "bg-amber-500",
            "text-white"
        );

        currentCategory = button.dataset.category;

        renderMarketplace(currentCategory);

    });

});

/*==================================================
10. MARKETPLACE SLIDER
==================================================*/

if (rightBtn && marketSlider) {

    rightBtn.addEventListener("click", () => {

        marketSlider.scrollBy({

            left: scrollAmount,

            behavior: "smooth"

        });

    });

}

if (leftBtn && marketSlider) {

    leftBtn.addEventListener("click", () => {

        marketSlider.scrollBy({

            left: -scrollAmount,

            behavior: "smooth"

        });

    });

}

/*==================================================
11. AUTO SLIDE
==================================================*/

function startMarketplaceAutoSlide() {

    if (!marketSlider) return;

    autoSlide = setInterval(() => {

        if (

            marketSlider.scrollLeft +

            marketSlider.clientWidth >=

            marketSlider.scrollWidth - 20

        ) {

            marketSlider.scrollTo({

                left: 0,

                behavior: "smooth"

            });

        }

        else {

            marketSlider.scrollBy({

                left: scrollAmount,

                behavior: "smooth"

            });

        }

    }, 5000);

}

startMarketplaceAutoSlide();

/*==================================================
12. PAUSE AUTO SLIDE
==================================================*/

if (marketSlider) {

    marketSlider.addEventListener("mouseenter", () => {

        clearInterval(autoSlide);

    });

    marketSlider.addEventListener("mouseleave", () => {

        startMarketplaceAutoSlide();

    });

    }
/*==================================================
13. QUICK VIEW MODAL
==================================================*/

function attachQuickView() {

    const quickViewButtons = document.querySelectorAll(".quick-view");

    quickViewButtons.forEach(button => {

        button.addEventListener("click", () => {

            const index = Number(button.dataset.index);

            const item = marketplaceData[currentCategory][index];

            if (!item || !quickViewModal) return;

            document.getElementById("modalImage").src = item.image;
            document.getElementById("modalImage").alt = item.title;

            document.getElementById("modalBadge").textContent = item.badge;

            document.getElementById("modalTitle").textContent = item.title;

            document.getElementById("modalLocation").textContent =
                "📍 " + item.location;

            document.getElementById("modalRating").textContent =
                "⭐ " + item.rating;

            document.getElementById("modalPrice").textContent =
                "USD " + item.priceUSD;

            document.getElementById("modalKes").textContent =
                "KES " + item.priceKES;

            quickViewModal.classList.remove("hidden");
            quickViewModal.classList.add("flex");

            document.body.classList.add("overflow-hidden");

        });

    });

}

/*==================================================
14. CLOSE QUICK VIEW
==================================================*/

if (closeModal) {

    closeModal.addEventListener("click", () => {

        quickViewModal.classList.add("hidden");

        quickViewModal.classList.remove("flex");

        document.body.classList.remove("overflow-hidden");

    });

}

if (quickViewModal) {

    quickViewModal.addEventListener("click", (event) => {

        if (event.target === quickViewModal) {

            quickViewModal.classList.add("hidden");

            quickViewModal.classList.remove("flex");

            document.body.classList.remove("overflow-hidden");

        }

    });

}

/*==================================================
15. SMART SERVICE FILTER
==================================================*/

if (serviceSelect) {

    serviceSelect.addEventListener("change", function () {

        const selected = this.value;

        const cards = document.querySelectorAll(".service-card");

        cards.forEach(card => {

            if (

                selected === "all" ||

                card.dataset.category === selected

            ) {

                card.classList.remove("hidden");

            }

            else {

                card.classList.add("hidden");

            }

        });

    });

}

/*==================================================
16. BOOK NOW
==================================================*/

function attachBookButtons() {

    document.querySelectorAll(".book-now").forEach(button => {

        button.addEventListener("click", () => {

            alert(
                "Booking system will be connected in Phase 2."
            );

        });

    });

}

attachBookButtons();

/*==================================================
17. SHARE
==================================================*/

function attachShareButtons() {

    document.querySelectorAll(".share-btn").forEach(button => {

        button.addEventListener("click", async () => {

            if (navigator.share) {

                try {

                    await navigator.share({

                        title: document.title,

                        text: "Check out Good Life Commercial Agencies",

                        url: window.location.href

                    });

                }

                catch (error) {

                    console.log(error);

                }

            }

        });

    });

}

attachShareButtons();

/*==================================================
18. FAVORITES
==================================================*/

function attachFavoriteButtons() {

    document.querySelectorAll(".favorite-btn").forEach(button => {

        button.addEventListener("click", () => {

            button.classList.toggle("text-red-500");
            button.classList.toggle("scale-125");

        });

    });

}

attachFavoriteButtons();
/*==================================================
19. BACK TO TOP
==================================================*/

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backToTop.classList.remove("hidden");

        } else {

            backToTop.classList.add("hidden");

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*==================================================
20. SCROLL REVEAL ANIMATION
==================================================*/

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.remove("opacity-0");
                entry.target.classList.remove("translate-y-10");

                entry.target.classList.add("opacity-100");
                entry.target.classList.add("translate-y-0");

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.15

    });

    revealElements.forEach(element => {

        observer.observe(element);

    });

}

/*==================================================
21. ESC KEY CLOSE MODAL
==================================================*/

document.addEventListener("keydown", (event) => {

    if (

        event.key === "Escape" &&

        quickViewModal &&

        quickViewModal.classList.contains("flex")

    ) {

        quickViewModal.classList.add("hidden");

        quickViewModal.classList.remove("flex");

        document.body.classList.remove("overflow-hidden");

    }

});

/*==================================================
22. LAZY IMAGE FALLBACK
==================================================*/

document.querySelectorAll("img").forEach(image => {

    image.addEventListener("error", () => {

        image.src =
        "https://placehold.co/800x600?text=Image+Unavailable";

    });

});

/*==================================================
23. FUTURE FIREBASE INITIALIZATION
==================================================*/

// Firebase configuration will be added
// during Phase 2.

/*==================================================
24. FUTURE MPESA INITIALIZATION
==================================================*/

// MPesa payment integration
// will be added during Phase 3.

/*==================================================
25. WEBSITE INITIALIZER
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    if (marketSlider) {

        renderMarketplace(currentCategory);

    }

    attachQuickView();

    attachBookButtons();

    attachFavoriteButtons();

    attachShareButtons();

});

/*==================================================
END OF SCRIPT
GOOD LIFE COMMERCIAL AGENCIES
==================================================*/
