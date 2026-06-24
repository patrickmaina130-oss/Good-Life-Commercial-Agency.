// ==========================
// ELEMENTS
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");

// ==========================
// MOBILE MENU
// ==========================

if (menuBtn && navLinks) {

menuBtn.addEventListener("click", () => {

navLinks.classList.toggle("active");

});

}

// ==========================
// CLOSE MOBILE MENU
// ==========================

document.querySelectorAll(".nav-links a").forEach(link => {

link.addEventListener("click", () => {

if (window.innerWidth <= 768) {

navLinks.classList.remove("active");

}

});

});

// ==========================
// ACTIVE NAVIGATION
// ==========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 120;
const sectionHeight = section.offsetHeight;

if (window.scrollY >= sectionTop &&
window.scrollY < sectionTop + sectionHeight) {

current = section.getAttribute("id");

}

});

document.querySelectorAll(".nav-links a")
.forEach(link => {

link.classList.remove("active");

if (
link.getAttribute("href")
=== `#${current}`
) {

link.classList.add("active");

}

});

});

// ==========================
// NAVBAR SHADOW
// ==========================

window.addEventListener("scroll", () => {

if (window.scrollY > 50) {

navbar.style.boxShadow =
"0 10px 30px rgba(0,0,0,.15)";

}

else {

navbar.style.boxShadow =
"0 2px 15px rgba(0,0,0,.1)";

}

});

// ==========================
// SCROLL REVEAL
// ==========================

const revealElements = document.querySelectorAll(

".service-card, .destination-card, .stat-box"

);

const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

},

{

threshold:0.2

}

);

revealElements.forEach(el => {

el.classList.add("hidden");

observer.observe(el);

});

// ==========================
// COUNTER ANIMATION
// ==========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

let started = false;

const runCounter = () => {

if (started) return;

started = true;

const target =
parseInt(counter.dataset.target);

let count = 0;

const speed = target / 100;

const update = () => {

count += speed;

if (count < target) {

counter.innerText =
Math.ceil(count);

requestAnimationFrame(update);

}

else {

counter.innerText = target;

}

};

update();

};

const counterObserver =
new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

runCounter();

}

});

},

{

threshold:0.5

}

);

counterObserver.observe(counter);

});

// ==========================
// BOOKING FORM
// ==========================

const bookingForm =
document.querySelector(".booking-form");

if (bookingForm) {

bookingForm.addEventListener(

"submit",

(e) => {

e.preventDefault();

alert(

"Thank you. Your booking request has been received."

);

bookingForm.reset();

}

);

  }
