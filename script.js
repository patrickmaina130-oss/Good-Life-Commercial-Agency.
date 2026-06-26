// ======================================================
// GOOD LIFE COMMERCIAL AGENCIES
// script.js Part 1
// ======================================================

// =========================
// SELECT ELEMENTS
// =========================

const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

// =========================
// STICKY HEADER
// =========================

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

// =========================
// MOBILE MENU
// =========================

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        menuBtn.classList.toggle("active");

    });

}

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.classList.remove("active");

    });

});

// =========================
// SMOOTH SCROLLING
// =========================

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

// =========================
// ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;

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

// =========================
// HERO CARD FLOAT EFFECT
// =========================

const heroCard = document.querySelector(".hero-card");

if (heroCard) {

    let direction = 1;

    setInterval(() => {

        heroCard.style.transform =
            direction === 1
                ? "translateY(-10px)"
                : "translateY(0px)";

        direction *= -1;

    }, 2000);

}

// =========================
// SCROLL TO TOP BUTTON
// =========================

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';

topBtn.className = "scroll-top";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ======================================================
// GOOD LIFE COMMERCIAL AGENCIES
// script.js Part 2
// ======================================================

// =========================
// ANIMATED COUNTERS
// =========================

const counters = document.querySelectorAll(".stat-card h2");

const speed = 80;

const startCounters = () => {

    counters.forEach(counter => {

        const text = counter.innerText.replace(/[^0-9]/g, "");

        const target = Number(text);

        if (!target) return;

        let count = 0;

        const increment = Math.ceil(target / speed);

        const updateCounter = () => {

            count += increment;

            if (count >= target) {

                count = target;

            }

            if (counter.innerText.includes("+")) {

                counter.innerText = count + "+";

            } else {

                counter.innerText = count;

            }

            if (count < target) {

                requestAnimationFrame(updateCounter);

            }

        };

        updateCounter();

    });

};

const statsSection = document.querySelector(".statistics");

if (statsSection) {

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounters();

                observer.disconnect();

            }

        });

    });

    observer.observe(statsSection);

}

// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(

".service-card,.destination-card,.community-card,.gallery-item,.testimonial-card,.contact-container,.booking-content"

);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.15

});

revealElements.forEach(el=>{

    el.classList.add("hidden");

    revealObserver.observe(el);

});

// =========================
// AUTO HERO DESTINATION SLIDER
// =========================

const heroImages=[

"images/maasai-mara.jpg",

"images/amboseli.jpg",

"images/diani.jpg",

"images/watamu.jpg",

"images/tsavo.jpg"

];

const heroImg=document.querySelector(".hero-card img");

let heroIndex=0;

if(heroImg){

setInterval(()=>{

heroIndex++;

if(heroIndex>=heroImages.length){

heroIndex=0;

}

heroImg.style.opacity="0";

setTimeout(()=>{

heroImg.src=heroImages[heroIndex];

heroImg.style.opacity="1";

},400);

},5000);

}

// =========================
// GALLERY IMAGE EFFECT
// =========================

document.querySelectorAll(".gallery-item img").forEach(img=>{

img.addEventListener("click",()=>{

window.open(img.src,"_blank");

});

});

// =========================
// WHATSAPP BOOKING
// =========================

document.querySelectorAll(".btn-primary").forEach(btn => {

    btn.addEventListener("click", () => {

        const text = btn.textContent.toLowerCase();

        if (text.includes("whatsapp")) {

            window.open(
                "https://wa.me/254705365075?text=Hello%20Good%20Life%20Commercial%20Agencies.%20I%20would%20like%20to%20make%20a%20booking.",
                "_blank"
            );

        }

    });

});


// =========================
// CONTACT FORM
// =========================

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert(

"Thank you for contacting Good Life Commercial Agencies. We will get back to you shortly."

);

form.reset();

});

}

// =========================
// SEARCH BUTTON
// =========================

const searchBtn=document.querySelector(".search-btn");

if(searchBtn){

searchBtn.addEventListener("click",()=>{

const search=prompt("Search our website:");

if(search){

window.find(search);

}

});

}

// =========================
// CURRENT YEAR IN FOOTER
// =========================

const year=document.querySelector(".current-year");

if(year){

year.textContent=new Date().getFullYear();

}
