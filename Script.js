// ======================================================
// GOOD LIFE COMMERCIAL AGENCIES
// Production Script.js
// Part 1
// ======================================================

// ==============================
// SELECT ELEMENTS
// ==============================

const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const scrollTopBtn = document.querySelector(".scroll-top");
const currentYear = document.querySelector(".current-year");

const heroSlider = document.getElementById("hero-slider");

const navItems = document.querySelectorAll(".nav-links a");

const contactForm = document.querySelector(".contact-form form");
const newsletterForm = document.querySelector(".newsletter form");

// ==============================
// STICKY HEADER
// ==============================

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

// ==============================
// MOBILE MENU
// ==============================

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        menuBtn.classList.toggle("active");

    });

}

// Close mobile menu after clicking a link

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.classList.remove("active");

    });

});

// ==============================
// FOOTER YEAR
// ==============================

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}

// ==============================
// SCROLL TO TOP
// ==============================

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});

if (scrollTopBtn) {

    scrollTopBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

          }

// ======================================================
// GOOD LIFE COMMERCIAL AGENCIES
// Production Script.js
// Part 2
// ======================================================

// ==============================
// HERO IMAGE SLIDER
// ==============================

const heroImages = [

"https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=80",

"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",

"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",

"https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=900&q=80"

];

let currentHero = 0;

if(heroSlider){

    setInterval(()=>{

        currentHero++;

        if(currentHero >= heroImages.length){

            currentHero = 0;

        }

        heroSlider.style.opacity="0";

        setTimeout(()=>{

            heroSlider.src = heroImages[currentHero];

            heroSlider.style.opacity="1";

        },400);

    },5000);

}

// ==============================
// SMOOTH SCROLL
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});

// ==============================
// ACTIVE NAVIGATION
// ==============================

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-150;

        const height=section.offsetHeight;

        if(window.scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// ==============================
// HERO IMAGE FADE EFFECT
// ==============================

if(heroSlider){

    heroSlider.style.transition="opacity .6s ease";

                          }

// ======================================================
// GOOD LIFE COMMERCIAL AGENCIES
// script.js PART 3
// Premium Interactions
// ======================================================


// =========================
// HERO IMAGE SLIDER
// =========================

const heroSlider = document.getElementById("hero-slider");

if(heroSlider){

const heroImages = [

"https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=80",

"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",

"https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",

"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"

];

let currentHero = 0;

setInterval(()=>{

currentHero++;

if(currentHero >= heroImages.length){

currentHero = 0;

}

heroSlider.style.opacity = ".3";

setTimeout(()=>{

heroSlider.src = heroImages[currentHero];

heroSlider.style.opacity = "1";

},300);

},5000);

}


// =========================
// COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll(".hero-trust h2");

const animateCounter = (counter)=>{

const target = parseInt(counter.innerText.replace(/\D/g,""));

const suffix = counter.innerText.replace(/[0-9]/g,"");

let count = 0;

const speed = Math.max(20, target/100);

const update = ()=>{

count += speed;

if(count < target){

counter.innerText = Math.floor(count) + suffix;

requestAnimationFrame(update);

}else{

counter.innerText = target + suffix;

}

};

update();

};

const counterObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

animateCounter(entry.target);

counterObserver.unobserve(entry.target);

}

});

},{threshold:.5});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


// =========================
// SCROLL REVEAL
// =========================

const reveals = document.querySelectorAll(

".service-card,.destination-card,.why-card,.highlight-card,.trust-item"

);

const revealObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

reveals.forEach(item=>{

revealObserver.observe(item);

});


// =========================
// ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop = section.offsetTop - 150;

if(pageYOffset >= sectionTop){

current = section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

});


// =========================
// BUTTON RIPPLE EFFECT
// =========================

const buttons = document.querySelectorAll(

".btn,.service-btn,.package-btn"

);

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const ripple = document.createElement("span");

const rect = this.getBoundingClientRect();

ripple.style.left =

e.clientX - rect.left + "px";

ripple.style.top =

e.clientY - rect.top + "px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


// =========================
// CURRENT YEAR
// =========================

const year = document.getElementById("year");

if(year){

year.textContent = new Date().getFullYear();

}

console.log("Good Life Commercial Agencies loaded successfully.");

// ======================================================
// GOOD LIFE COMMERCIAL AGENCIES
// script.js PART 4
// Advanced UI Features
// ======================================================


// =========================
// PRELOADER
// =========================

window.addEventListener("load", () => {

    const loader = document.querySelector(".preloader");

    if(loader){

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },500);

    }

});


// =========================
// SEARCH BUTTON
// =========================

const searchBtn = document.querySelector(".search-btn");

if(searchBtn){

    searchBtn.addEventListener("click",()=>{

        alert("Search feature will be connected to the database in the Firebase version.");

    });

}


// =========================
// BUTTON HOVER EFFECT
// =========================

document.querySelectorAll(".btn,.service-btn,.package-btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-4px)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0)";

    });

});


// =========================
// IMAGE ZOOM EFFECT
// =========================

document.querySelectorAll("img").forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transition=".5s";

    });

});


// =========================
// DESTINATION CARD EFFECT
// =========================

document.querySelectorAll(".destination-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.transform=

        `perspective(900px)
        rotateX(${(y-150)/30}deg)
        rotateY(${-(x-150)/30}deg)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="perspective(900px) rotateX(0) rotateY(0)";

    });

});


// =========================
// ANNOUNCEMENT BAR PAUSE
// =========================

const premiumBar=document.querySelector(".premium-track");

if(premiumBar){

    premiumBar.addEventListener("mouseenter",()=>{

        premiumBar.style.animationPlayState="paused";

    });

    premiumBar.addEventListener("mouseleave",()=>{

        premiumBar.style.animationPlayState="running";

    });

}


// =========================
// PAGE FADE IN
// =========================

document.body.style.opacity="0";

window.addEventListener("load",()=>{

    document.body.style.transition="opacity .8s ease";

    document.body.style.opacity="1";

});


// =========================
// CONSOLE MESSAGE
// =========================

console.log("Good Life Commercial Agencies | Premium Version Ready");

