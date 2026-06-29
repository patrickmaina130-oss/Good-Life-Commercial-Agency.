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
