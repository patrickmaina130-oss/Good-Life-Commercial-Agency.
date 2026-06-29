
/*==================================================
GOOD LIFE COMMERCIAL AGENCIES
SCRIPT.JS
VERSION 3.0
PART 1
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("Good Life Commercial Agencies Loaded");

    /*==========================================
      HERO DESTINATIONS
    ==========================================*/

    const destinations = [

        {
            name: "Maasai Mara Safari",
            country: "🇰🇪 Kenya • 3 Days / 2 Nights",
            price: "USD 350 • KSh 45,000",
            image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80"
        },

        {
            name: "Amboseli National Park",
            country: "🇰🇪 Kenya",
            price: "USD 300 • KSh 39,000",
            image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80"
        },

        {
            name: "Tsavo East National Park",
            country: "🇰🇪 Kenya",
            price: "USD 350 • KSh 45,000",
            image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?auto=format&fit=crop&w=1200&q=80"
        },

        {
            name: "Lake Nakuru National Park",
            country: "🇰🇪 Kenya",
            price: "USD 250 • KSh 32,000",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
        },

        {
            name: "Lake Naivasha",
            country: "🇰🇪 Kenya",
            price: "USD 220 • KSh 28,500",
            image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80"
        },

        {
            name: "Diani Beach",
            country: "🇰🇪 Kenya",
            price: "USD 320 • KSh 41,500",
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
        },

        {
            name: "Serengeti National Park",
            country: "🇹🇿 Tanzania",
            price: "USD 900 • KSh 117,000",
            image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80"
        },

        {
            name: "Zanzibar Holiday",
            country: "🇹🇿 Tanzania",
            price: "USD 700 • KSh 91,000",
            image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80"
        },

        {
            name: "Bwindi Gorilla Trek",
            country: "🇺🇬 Uganda",
            price: "USD 1,300 • KSh 169,000",
            image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?auto=format&fit=crop&w=1200&q=80"
        },

        {
            name: "Volcanoes National Park",
            country: "🇷🇼 Rwanda",
            price: "USD 1,400 • KSh 182,000",
            image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=80"
        }

    ];

    const heroImage = document.getElementById("destination-image");
    const heroName = document.getElementById("destination-name");
    const heroCountry = document.getElementById("destination-country");
    const heroPrice = document.getElementById("destination-price");

    let current = 0;

    /*==========================================
  HERO SLIDER FUNCTIONALITY
==========================================*/

// Function to update hero content
function updateHero() {

    const destination = destinations[current];

    if (heroImage) heroImage.src = destination.image;
    if (heroName) heroName.textContent = destination.name;
    if (heroCountry) heroCountry.textContent = destination.country;
    if (heroPrice) heroPrice.textContent = destination.price;

}

// Initialize first slide
updateHero();

/*==========================================
  AUTO SLIDER (ROTATION)
==========================================*/

function nextDestination() {

    current++;

    if (current >= destinations.length) {
        current = 0;
    }

    updateHero();

}

function prevDestination() {

    current--;

    if (current < 0) {
        current = destinations.length - 1;
    }

    updateHero();

}

// Auto rotate every 5 seconds
let heroInterval = setInterval(nextDestination, 5000);

/*==========================================
  PAUSE ON HOVER (OPTIONAL BUT CLEAN UX)
==========================================*/

const heroSection = document.querySelector(".hero");

if (heroSection) {

    heroSection.addEventListener("mouseenter", () => {
        clearInterval(heroInterval);
    });

    heroSection.addEventListener("mouseleave", () => {
        heroInterval = setInterval(nextDestination, 5000);
    });

}

                          
