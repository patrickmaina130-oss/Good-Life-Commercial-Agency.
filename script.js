"use strict";

/*==================================================
GOOD LIFE COMMERCIAL AGENCIES
SCRIPT.JS
PART 1
HEADER • NAVIGATION • SMOOTH SCROLL
==================================================*/

/*==============================
ELEMENTS
==============================*/

const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");
const searchBtn = document.querySelector(".search-btn");
const bookBtn = document.querySelector(".book-btn");

/*==============================
STICKY HEADER SHADOW
==============================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.style.boxShadow = "0 12px 30px rgba(0,0,0,.18)";
    } else {
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,.08)";
    }

});

/*==============================
MOBILE MENU
==============================*/

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");
    menuBtn.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});

/*==============================
CLOSE MENU AFTER CLICK
==============================*/

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");
        menuBtn.classList.remove("active");
        menuBtn.textContent = "☰";

    });

});

/*==============================
SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});

/*==============================
SEARCH BUTTON EFFECT
==============================*/

searchBtn.addEventListener("click", () => {

    searchBtn.style.transform = "scale(.90)";

    setTimeout(() => {

        searchBtn.style.transform = "";

    },150);

});

/*==============================
BOOK BUTTON EFFECT
==============================*/

bookBtn.addEventListener("click", () => {

    bookBtn.style.transform = "scale(.95)";

    setTimeout(() => {

        bookBtn.style.transform = "";

    },150);

});

/*==============================
ACTIVE NAVIGATION
==============================*/

window.addEventListener("scroll", () => {

    let current = "";

    document.querySelectorAll("section").forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

console.log("Good Life Commercial Agencies - Script Part 1 Loaded Successfully.");

/*==================================================
SCRIPT.JS
PART 2
HERO SECTION
==================================================*/

/*==============================
HERO STATISTICS COUNTER
==============================*/

const statNumbers = document.querySelectorAll(".hero-stats h3");

const counterObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const text = counter.innerText;

        const target = parseInt(text.replace(/\D/g, ""));
        const suffix = text.replace(/[0-9]/g, "");

        let count = 0;

        const speed = target / 60;

        const updateCounter = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.floor(count) + suffix;

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target + suffix;

            }

        };

        updateCounter();

        observer.unobserve(counter);

    });

});

statNumbers.forEach(counter => {

    counter.innerText = "0";

    counterObserver.observe(counter);

});

/*==============================
HERO IMAGE FLOATING EFFECT
==============================*/

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 70;
    const y = (window.innerHeight / 2 - e.clientY) / 70;

    heroImage.style.transform =
        `translate(${x}px, ${y}px) scale(1.02)`;

});

/*==============================
RESET IMAGE POSITION
==============================*/

window.addEventListener("mouseleave", () => {

    heroImage.style.transform =
        "translate(0,0) scale(1)";

});

/*==============================
HERO CARD PULSE
==============================*/

const heroCard = document.querySelector(".hero-card");

setInterval(() => {

    heroCard.animate([

        {
            transform: "translateY(0px)"
        },

        {
            transform: "translateY(-8px)"
        },

        {
            transform: "translateY(0px)"
        }

    ], {

        duration: 2500,

        iterations: 1,

        easing: "ease-in-out"

    });

}, 4000);

/*==============================
BUTTON RIPPLE EFFECT
==============================*/

document.querySelectorAll(".btn-primary,.btn-secondary").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = this.getBoundingClientRect();

        ripple.style.left = `${e.clientX - rect.left}px`;

        ripple.style.top = `${e.clientY - rect.top}px`;

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

console.log("Hero Part Loaded Successfully");

/*==================================================
GOOD LIFE COMMERCIAL AGENCIES
SCRIPT.JS
PART 3
SERVICES SECTION
==================================================*/

/*==============================
SERVICES REVEAL ANIMATION
==============================*/

const serviceCards = document.querySelectorAll(".service-card");

const serviceObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

            setTimeout(() => {

                entry.target.classList.add("show-card");

            }, index * 150);

        }

    });

}, {

    threshold: 0.2

});

serviceCards.forEach(card => {

    serviceObserver.observe(card);

});

/*==============================
SERVICE CARD TILT EFFECT
==============================*/

serviceCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 10;
        const rotateX = ((rect.height / 2 - y) / rect.height) * 10;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

    });

});

/*==============================
SERVICE ICON BOUNCE
==============================*/

const icons = document.querySelectorAll(".icon");

icons.forEach(icon => {

    icon.addEventListener("mouseenter", () => {

        icon.animate([

            { transform: "translateY(0)" },

            { transform: "translateY(-10px)" },

            { transform: "translateY(0)" }

        ], {

            duration: 500,

            easing: "ease"

        });

    });

});

/*==============================
SERVICE BUTTON CLICK
==============================*/

document.querySelectorAll(".service-card a").forEach(button => {

    button.addEventListener("click", (e) => {

        e.preventDefault();

        button.textContent = "Opening...";

        setTimeout(() => {

            button.textContent = "Learn More";

        }, 1000);

    });

});

console.log("Services Part Loaded Successfully");

/*==================================================
GOOD LIFE COMMERCIAL AGENCIES
SCRIPT.JS
PART 4
GLOBAL UTILITIES
==================================================*/

/*==============================
SCROLL PROGRESS BAR
==============================*/

const progressBar = document.createElement("div");

progressBar.className = "scroll-progress";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

/*==============================
BACK TO TOP BUTTON
==============================*/

const backTop = document.createElement("button");

backTop.className = "back-top";

backTop.innerHTML = "↑";

document.body.appendChild(backTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*==============================
GLOBAL SCROLL REVEAL
==============================*/

const revealItems = document.querySelectorAll(

    ".section-title,.hero-card,.hero-image,.hero-content"

);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("reveal");

        }

    });

}, {

    threshold: 0.2

});

revealItems.forEach(item => {

    revealObserver.observe(item);

});

/*==============================
PAGE LOADER
==============================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/*==============================
KEYBOARD SHORTCUTS
==============================*/

document.addEventListener("keydown", (e) => {

    if (e.key === "Home") {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

});

/*==============================
WINDOW RESIZE
==============================*/

window.addEventListener("resize", () => {

    console.log(
        "Viewport:",
        window.innerWidth + " x " + window.innerHeight
    );

});

console.log("Good Life Commercial Agencies - Script Part 4 Loaded");
