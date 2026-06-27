// ======================================================
// GOOD LIFE COMMERCIAL AGENCIES
// Production Script.js V2.0
// PART 1 — Core Initialization & Navigation
// ======================================================

"use strict";

// ======================================================
// DOM ELEMENTS
// ======================================================

const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

const searchBtn = document.querySelector(".search-btn");
const scrollTopBtn = document.querySelector(".scroll-top");

const heroSlider = document.getElementById("hero-slider");
const premiumTrack = document.querySelector(".premium-track");

const sections = document.querySelectorAll("section");

const yearElement =
    document.getElementById("year") ||
    document.querySelector(".current-year");

// ======================================================
// CURRENT YEAR
// ======================================================

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// ======================================================
// MOBILE MENU
// ======================================================

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");
        menuBtn.classList.toggle("active");

        document.body.classList.toggle("menu-open");

    });

}

// Close menu after clicking a navigation link

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuBtn.classList.remove("active");
        document.body.classList.remove("menu-open");

    });

});

// ======================================================
// STICKY HEADER
// ======================================================

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

}

// ======================================================
// ACTIVE NAVIGATION
// ======================================================

function updateActiveNav() {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 160;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

}

// ======================================================
// SCROLL TO TOP BUTTON
// ======================================================

function updateScrollTopButton() {

    if (!scrollTopBtn) return;

    if (window.scrollY > 500) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

}

if (scrollTopBtn) {

    scrollTopBtn.addEventListener("click", e => {

        e.preventDefault();

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

// ======================================================
// SMOOTH SCROLL
// ======================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});

// ======================================================
// SEARCH BUTTON
// ======================================================

if (searchBtn) {

    searchBtn.addEventListener("click", () => {

        alert(
            "Search functionality will be activated after Firebase integration."
        );

    });

}

// ======================================================
// GLOBAL SCROLL EVENTS
// ======================================================

window.addEventListener("scroll", () => {

    updateHeader();
    updateActiveNav();
    updateScrollTopButton();

});

// ======================================================
// INITIALIZATION
// ======================================================

window.addEventListener("load", () => {

    updateHeader();
    updateActiveNav();
    updateScrollTopButton();

    document.body.classList.add("loaded");

    console.log(
        "Good Life Commercial Agencies | Production Script V2.0 Initialized"
    );

});

// ======================================================
// GOOD LIFE COMMERCIAL AGENCIES
// Production Script.js V2.0
// PART 2 — Hero & Scroll Animations
// ======================================================

// ======================================================
// HERO IMAGE SLIDER
// ======================================================

if (heroSlider) {

    const heroImages = [

        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=80",

        "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=900&q=80",

        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",

        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80"

    ];

    let currentHeroImage = 0;

    heroSlider.style.transition = "opacity .7s ease";

    setInterval(() => {

        heroSlider.style.opacity = "0";

        setTimeout(() => {

            currentHeroImage++;

            if (currentHeroImage >= heroImages.length) {

                currentHeroImage = 0;,
// ======================================================
// GOOD LIFE COMMERCIAL AGENCIES
// Production Script.js V2.0
// PART 3 — Premium UI Effects
// ======================================================


// ======================================================
// BUTTON RIPPLE EFFECT
// ======================================================

const buttons = document.querySelectorAll(
    ".btn, .service-btn, .package-btn"
);

buttons.forEach(button => {

    button.style.position = "relative";
    button.style.overflow = "hidden";

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        ripple.className = "ripple";

        ripple.style.left = (e.clientX - rect.left) + "px";
        ripple.style.top = (e.clientY - rect.top) + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


// ======================================================
// DESTINATION CARD 3D EFFECT
// ======================================================

document.querySelectorAll(".destination-card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = (y - rect.height / 2) / 25;
        const rotateY = -(x - rect.width / 2) / 25;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.03)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

    });

});


// ======================================================
// IMAGE FADE-IN
// ======================================================

document.querySelectorAll("img").forEach(img => {

    if (img.complete) {

        img.classList.add("loaded");

    } else {

        img.addEventListener("load", () => {

            img.classList.add("loaded");

        });

    }

});


// ======================================================
// DISABLE EMPTY LINKS
// ======================================================

document.querySelectorAll('a[href="#"]').forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

    });

});


// ======================================================
// KEYBOARD ACCESSIBILITY
// ======================================================

document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        if (navLinks) navLinks.classList.remove("active");

        if (menuBtn) menuBtn.classList.remove("active");

        document.body.classList.remove("menu-open");

    }

});


// ======================================================
// HOME KEY = SCROLL TOP
// ======================================================

document.addEventListener("keydown", e => {

    if (e.key === "Home") {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    }

});


// ======================================================
// NETWORK STATUS
// ======================================================

window.addEventListener("offline", () => {

    console.warn("Internet connection lost.");

});

window.addEventListener("online", () => {

    console.log("Internet connection restored.");

});


// ======================================================
// PART 3 COMPLETE
// ======================================================
// ======================================================
// GOOD LIFE COMMERCIAL AGENCIES
// Production Script.js V2.0
// PART 4 — Forms, Performance & Final Initialization
// ======================================================


// ======================================================
// PRELOADER (Optional)
// ======================================================

const preloader = document.querySelector(".preloader");

if (preloader) {

    window.addEventListener("load", () => {

        preloader.classList.add("hide");

    });

}


// ======================================================
// CONTACT FORM
// ======================================================

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been received. Online submission will be activated after Firebase integration.");

        this.reset();

    });

}


// ======================================================
// NEWSLETTER FORM
// ======================================================

const newsletterForm = document.querySelector(".newsletter form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you for subscribing!");

        this.reset();

    });

}


// ======================================================
// LAZY LOAD ALL IMAGES
// ======================================================

document.querySelectorAll("img").forEach(img => {

    if (!img.hasAttribute("loading")) {

        img.setAttribute("loading", "lazy");

    }

});


// ======================================================
// REDUCE MOTION SUPPORT
// ======================================================

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (reduceMotion.matches) {

    document.documentElement.style.scrollBehavior = "auto";

}


// ======================================================
// INITIALIZE OPTIONAL COMPONENTS
// ======================================================

window.addEventListener("load", () => {

    document.body.classList.add("site-ready");

});


// ======================================================
// PERFORMANCE LOG
// ======================================================

window.addEventListener("load", () => {

    console.log("==================================");
    console.log("Good Life Commercial Agencies");
    console.log("Production Script.js V2.0");
    console.log("Status: Loaded Successfully");
    console.log("Ready for Firebase Integration");
    console.log("==================================");

});
console.log("Premium UI effects loaded.");
