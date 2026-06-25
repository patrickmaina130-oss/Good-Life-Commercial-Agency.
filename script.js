// ===================================
// ELEMENTS
// ===================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const backToTop = document.getElementById("backToTop");
const bookingForm = document.querySelector(".booking-form");

// ===================================
// MOBILE MENU
// ===================================

if (menuBtn && navLinks) {

menuBtn.addEventListener("click", () => {

navLinks.classList.toggle("active");

menuBtn.setAttribute(
"aria-expanded",
navLinks.classList.contains("active")
? "true"
: "false"
);

});

}

// ===================================
// CLOSE MOBILE MENU ON LINK CLICK
// ===================================

document.querySelectorAll(".nav-links a").forEach(link => {

link.addEventListener("click", () => {

if (window.innerWidth <= 768) {

navLinks.classList.remove("active");

menuBtn.setAttribute(
"aria-expanded",
"false"
);

}

});

});

// ===================================
// ACTIVE NAVIGATION
// ===================================

function updateActiveNav() {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 140;

const sectionHeight = section.offsetHeight;

if (
window.scrollY >= sectionTop &&
window.scrollY < sectionTop + sectionHeight
) {

current = section.getAttribute("id");

}

});

document.querySelectorAll(".nav-links a")
.forEach(link => {

link.classList.remove("active");

if (
link.getAttribute("href") === `#${current}`
) {

link.classList.add("active");

}

});

}

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================

function updateNavbar() {

if (!navbar) return;

if (window.scrollY > 50) {

navbar.classList.add("scrolled");

} else {

navbar.classList.remove("scrolled");

}

}

// ===================================
// BACK TO TOP BUTTON
// ===================================

function updateBackToTop() {

if (!backToTop) return;

if (window.scrollY > 500) {

backToTop.classList.add("show-btn");

} else {

backToTop.classList.remove("show-btn");

}

}

if (backToTop) {

backToTop.addEventListener("click", () => {

window.scrollTo({
top: 0,
behavior: "smooth"
});

});

}

// ===================================
// SCROLL EVENTS
// ===================================

window.addEventListener("scroll", () => {

updateActiveNav();

updateNavbar();

updateBackToTop();

});

// ===================================
// SCROLL REVEAL ANIMATION
// ===================================

const revealElements = document.querySelectorAll(
".service-card, .destination-card, .why-card, .stat-box, .contact-card, .about-image, .about-text"
);

const revealObserver = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

revealObserver.unobserve(entry.target);

}

});

},

{
threshold: 0.15
}

);

revealElements.forEach(el => {

el.classList.add("hidden");

revealObserver.observe(el);

});

// ===================================
// COUNTER ANIMATION
// ===================================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

let started = false;

const startCounter = () => {

if (started) return;

started = true;

const target = parseInt(
counter.dataset.target
);

let count = 0;

const increment = Math.max(
1,
target / 100
);

const update = () => {

count += increment;

if (count < target) {

counter.innerText =
Math.ceil(count);

requestAnimationFrame(update);

} else {

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

startCounter();

counterObserver.unobserve(counter);

}

});

},

{
threshold: 0.5
}

);

counterObserver.observe(counter);

});

// ===================================
// BOOKING FORM
// ===================================

if (bookingForm) {

bookingForm.addEventListener(
"submit",
(e) => {

e.preventDefault();

const button =
bookingForm.querySelector(
".submit-btn"
);

const originalText =
button.innerText;

button.innerText =
"Submitting...";

button.disabled = true;

setTimeout(() => {

alert(
"Thank you! Your booking request has been received. We will contact you shortly."
);

bookingForm.reset();

button.innerText =
originalText;

button.disabled = false;

}, 1000);

}
);

}

// ===================================
// CLOSE MENU WHEN CLICKING OUTSIDE
// ===================================

document.addEventListener("click", (e) => {

if (
window.innerWidth <= 768 &&
navLinks.classList.contains("active")
) {

const clickedInsideMenu =
navLinks.contains(e.target);

const clickedButton =
menuBtn.contains(e.target);

if (
!clickedInsideMenu &&
!clickedButton
) {

navLinks.classList.remove("active");

menuBtn.setAttribute(
"aria-expanded",
"false"
);

}

}

});

// ===================================
// INITIAL LOAD
// ===================================

updateNavbar();

updateActiveNav();

updateBackToTop();

/* ==========================
SLIDESHOW
========================== */

const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

function showSlide(index){

slides.forEach(slide => {
slide.classList.remove('active');
});

slides[index].classList.add('active');

}

function nextSlide(){

currentSlide++;

if(currentSlide >= slides.length){
currentSlide = 0;
}

showSlide(currentSlide);

}

setInterval(nextSlide, 5000);
function scrollTourism(direction){

const gallery =
document.getElementById("tourismGallery");

gallery.scrollLeft += direction * 370;

}
