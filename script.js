"use strict";

/*==================================================
GLOBAL ELEMENTS
==================================================*/

const navbar = document.querySelector(".header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const backToTop = document.querySelector(".back-to-top");

/*==================================================
NAVBAR SCROLL EFFECT
==================================================*/

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

/*==================================================
MOBILE MENU TOGGLE
==================================================*/

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });
}

/*==================================================
CLOSE MENU ON LINK CLICK
==================================================*/

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
    });
});

/*==================================================
BACK TO TOP VISIBILITY
==================================================*/

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

/*==================================================
BACK TO TOP ACTION
==================================================*/

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/*==================================================
ACTIVE LINK ON SCROLL (SCROLL SPY)
==================================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/*==================================================
SMOOTH SECTION SCROLL
==================================================*/

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", (e) => {

        e.preventDefault();

        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: "smooth"
            });
        }

    });
});

 /*==================================================
BUTTON INTERACTION FEEL
==================================================*/

const buttons = document.querySelectorAll("button, .btn, a");

buttons.forEach(btn => {
    btn.addEventListener("mousedown", () => {
        btn.style.transform = "scale(0.97)";
    });

    btn.addEventListener("mouseup", () => {
        btn.style.transform = "scale(1)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});                    

/*==================================================
CONTACT FORM VALIDATION
==================================================*/

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputs = contactForm.querySelectorAll("input, textarea");
        let isValid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                isValid = false;
                input.style.border = "1px solid red";
            } else {
                input.style.border = "1px solid #ddd";
            }
        });

        if (isValid) {
            alert("Message sent successfully! We will get back to you soon.");

            contactForm.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });
  
   }

/*==================================================
PAGE LOADED EFFECT
==================================================*/

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

/*==================================================
CLEAN LINK BEHAVIOR
==================================================*/

document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
    });
});

/*==================================================
GLOBAL SMOOTH SCROLL ENFORCEMENT
==================================================*/

document.documentElement.style.scrollBehavior = "smooth";
