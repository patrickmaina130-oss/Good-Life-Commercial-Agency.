/*==================================================
GOOD LIFE COMMERCIAL AGENCIES
SCRIPT.JS
PART 1
HEADER • SMOOTH SCROLL • ACTIVE NAV
==================================================*/

"use strict";

/*==================================================
SELECT ELEMENTS
==================================================*/

const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".nav-links a");

/*==================================================
HEADER SHADOW ON SCROLL
==================================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.12)";

    } else {

        header.style.boxShadow = "0 2px 15px rgba(0,0,0,.06)";

    }

});

/*==================================================
SMOOTH SCROLL
==================================================*/

navLinks.forEach(link => {

    link.addEventListener("click", (e) => {

        const target = link.getAttribute("href");

        if (target.startsWith("#")) {

            e.preventDefault();

            const section = document.querySelector(target);

            if (section) {

                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }

    });

});

/*==================================================
ACTIVE NAVIGATION
==================================================*/

window.addEventListener("scroll", () => {

    let currentSection = "";

    document.querySelectorAll("section[id]").forEach(section => {

        const top = section.offsetTop - 100;
        const height = section.offsetHeight;

        if (window.scrollY >= top &&
            window.scrollY < top + height) {

            currentSection = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});

/*==================================================
PAGE LOADED
==================================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log("Good Life Commercial Agencies loaded successfully.");

});

/*==================================================
SCRIPT.JS
PART 2
SCROLL ANIMATIONS
==================================================*/

/*==================================================
REVEAL ELEMENTS
==================================================*/

const revealElements = document.querySelectorAll(
    ".about-content, .service-card, .features .service-card"
);

const revealOnScroll = () => {

    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {

            element.classList.add("fade-up");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);

/*==================================================
SERVICE CARD HOVER EFFECT
==================================================*/

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

/*==================================================
ABOUT IMAGE EFFECT
==================================================*/

const aboutImage = document.querySelector(".about-image img");

if (aboutImage) {

    aboutImage.addEventListener("mouseenter", () => {

        aboutImage.style.transform = "scale(1.03)";
        aboutImage.style.transition = ".4s ease";

    });

    aboutImage.addEventListener("mouseleave", () => {

        aboutImage.style.transform = "scale(1)";

    });

}

/*==================================================
GOOD LIFE COMMERCIAL AGENCIES
SCRIPT.JS
PART 3
TOURS • REAL ESTATE • JOBS
==================================================*/

"use strict";

/*==================================================
REVEAL SECTIONS ON SCROLL
==================================================*/

const cards = document.querySelectorAll(
    ".tours .service-card, .real-estate .service-card, .jobs .service-card"
);

const revealCards = () => {

    const triggerPoint = window.innerHeight * 0.85;

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerPoint) {

            card.classList.add("fade-up");

        }

    });

};

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);

/*==================================================
BOOK TOUR BUTTON
==================================================*/

document.querySelectorAll(".tours .btn").forEach(button => {

    button.addEventListener("click", () => {

        console.log("Tour booking button clicked.");

    });

});

/*==================================================
CARD HOVER EFFECT
==================================================*/

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

/*==================================================
IMAGE ZOOM EFFECT
==================================================*/

document.querySelectorAll(".tours .service-card img").forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transform = "scale(1.05)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});

/*==================================================
GOOD LIFE COMMERCIAL AGENCIES
SCRIPT.JS
PART 4
CONTACT • BACK TO TOP
==================================================*/

"use strict";

/*==================================================
BACK TO TOP BUTTON
==================================================*/

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

/*==================================================
CONTACT FORM
==================================================*/

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const name = this.querySelector('input[type="text"]').value.trim();
        const email = this.querySelector('input[type="email"]').value.trim();
        const phone = this.querySelector('input[type="tel"]').value.trim();
        const message = this.querySelector("textarea").value.trim();

        if (!name || !email || !phone || !message) {

            alert("Please fill in all fields.");

            return;

        }

        alert("Thank you! Your message has been received.");

        this.reset();

    });

}

/*==================================================
FOOTER YEAR
==================================================*/

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} Good Life Commercial Agencies. All Rights Reserved.`;

}

/*==================================================
PAGE READY
==================================================*/

window.addEventListener("load", () => {

    console.log("Good Life Commercial Agencies website loaded successfully.");

});
