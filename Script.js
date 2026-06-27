// ======================================================
// GOOD LIFE COMMERCIAL AGENCIES
// Production Script.js V1.0
// PART 2 - Interactive Features
// ======================================================

// =========================
// HERO IMAGE SLIDER
// =========================

const heroSlider = document.getElementById("hero-slider");

if (heroSlider) {

    const heroImages = [

        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=80",

        "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=900&q=80",

        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",

        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80"

    ];

    let currentImage = 0;

    heroSlider.style.transition = "opacity .6s ease";

    setInterval(() => {

        heroSlider.style.opacity = "0";

        setTimeout(() => {

            currentImage++;

            if (currentImage >= heroImages.length) {

                currentImage = 0;

            }

            heroSlider.src = heroImages[currentImage];

            heroSlider.style.opacity = "1";

        }, 350);

    }, 5000);

}

// =========================
// HERO COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll(".hero-trust h2");

function animateCounter(counter) {

    const text = counter.innerText;

    const target = parseInt(text.replace(/\D/g, ""));

    const suffix = text.replace(/[0-9]/g, "");

    let count = 0;

    const increment = Math.max(1, Math.ceil(target / 100));

    function update() {

        count += increment;

        if (count < target) {

            counter.innerText = count + suffix;

            requestAnimationFrame(update);

        } else {

            counter.innerText = target + suffix;

        }

    }

    update();

}

if (counters.length) {

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                animateCounter(entry.target);

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.5

    });

    counters.forEach(counter => observer.observe(counter));

}

// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealItems = document.querySelectorAll(
".service-card, .destination-card, .why-card, .highlight-card, .trust-item"
);

if (revealItems.length) {

    const revealObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.15

    });

    revealItems.forEach(item => revealObserver.observe(item));

}

// =========================
// ANNOUNCEMENT BAR PAUSE
// =========================

const premiumTrack = document.querySelector(".premium-track");

if (premiumTrack) {

    premiumTrack.addEventListener("mouseenter", () => {

        premiumTrack.style.animationPlayState = "paused";

    });

    premiumTrack.addEventListener("mouseleave", () => {

        premiumTrack.style.animationPlayState = "running";

    });

}

// =========================
// CONSOLE MESSAGE
// =========================

console.log("Interactive features loaded successfully.");

// ======================================================
// GOOD LIFE COMMERCIAL AGENCIES
// Production Script.js V1.0
// PART 2 - Interactive Features
// ======================================================

// =========================
// HERO IMAGE SLIDER
// =========================

const heroSlider = document.getElementById("hero-slider");

if (heroSlider) {

    const heroImages = [

        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=80",

        "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=900&q=80",

        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",

        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80"

    ];

    let currentImage = 0;

    heroSlider.style.transition = "opacity .6s ease";

    setInterval(() => {

        heroSlider.style.opacity = "0";

        setTimeout(() => {

            currentImage++;

            if (currentImage >= heroImages.length) {

                currentImage = 0;

            }

            heroSlider.src = heroImages[currentImage];

            heroSlider.style.opacity = "1";

        }, 350);

    }, 5000);

}

// =========================
// HERO COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll(".hero-trust h2");

function animateCounter(counter) {

    const text = counter.innerText;

    const target = parseInt(text.replace(/\D/g, ""));

    const suffix = text.replace(/[0-9]/g, "");

    let count = 0;

    const increment = Math.max(1, Math.ceil(target / 100));

    function update() {

        count += increment;

        if (count < target) {

            counter.innerText = count + suffix;

            requestAnimationFrame(update);

        } else {

            counter.innerText = target + suffix;

        }

    }

    update();

}

if (counters.length) {

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                animateCounter(entry.target);

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.5

    });

    counters.forEach(counter => observer.observe(counter));

}

// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealItems = document.querySelectorAll(
".service-card, .destination-card, .why-card, .highlight-card, .trust-item"
);

if (revealItems.length) {

    const revealObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.15

    });

    revealItems.forEach(item => revealObserver.observe(item));

}

// =========================
// ANNOUNCEMENT BAR PAUSE
// =========================

const premiumTrack = document.querySelector(".premium-track");

if (premiumTrack) {

    premiumTrack.addEventListener("mouseenter", () => {

        premiumTrack.style.animationPlayState = "paused";

    });

    premiumTrack.addEventListener("mouseleave", () => {

        premiumTrack.style.animationPlayState = "running";

    });

}

// =========================
// CONSOLE MESSAGE
// =========================

console.log("Interactive features loaded successfully.");

// ======================================================
// GOOD LIFE COMMERCIAL AGENCIES
// Production Script.js V1.0
// PART 3 - Premium UI Enhancements
// ======================================================

// =========================
// SEARCH BUTTON
// =========================

const searchBtn = document.querySelector(".search-btn");

if (searchBtn) {

    searchBtn.addEventListener("click", () => {

        alert("Search functionality will be available in the Firebase version.");

    });

}

// =========================
// BUTTON RIPPLE EFFECT
// =========================

document.querySelectorAll(".btn, .service-btn, .package-btn").forEach(button => {

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

// =========================
// DESTINATION 3D HOVER EFFECT
// =========================

document.querySelectorAll(".destination-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = (y - rect.height / 2) / 25;

        const rotateY = -(x - rect.width / 2) / 25;

        card.style.transform =
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    });

});

// =========================
// IMAGE FADE-IN
// =========================

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("load", () => {

        img.classList.add("loaded");

    });

});

// =========================
// PAGE FADE-IN
// =========================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// =========================
// DISABLE EMPTY LINKS
// =========================

document.querySelectorAll('a[href="#"]').forEach(link => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

    });

});

// =========================
// LOG SUCCESS
// =========================

console.log("Good Life Commercial Agencies | Production Script V1.0 Loaded Successfully");

// ======================================================
// GOOD LIFE COMMERCIAL AGENCIES
// Production Script.js V1.0
// PART 4 - Performance & Final Enhancements
// ======================================================

// =========================
// PRELOADER (Optional)
// =========================

const preloader = document.querySelector(".preloader");

if (preloader) {

    window.addEventListener("load", () => {

        preloader.classList.add("hide");

    });

}

// =========================
// CONTACT FORM
// =========================

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Thank you. Your message has been received. Firebase integration will activate this form.");

        this.reset();

    });

}

// =========================
// NEWSLETTER
// =========================

const newsletterForm = document.querySelector(".newsletter form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Thank you for subscribing.");

        this.reset();

    });

}

// =========================
// LAZY LOAD IMAGES
// =========================

document.querySelectorAll("img").forEach(img=>{

    img.loading="lazy";

});

// =========================
// KEYBOARD ACCESSIBILITY
// =========================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        const nav=document.querySelector(".nav-links");

        const menu=document.querySelector(".menu-btn");

        if(nav){

            nav.classList.remove("active");

        }

        if(menu){

            menu.classList.remove("active");

        }

    }

});

// =========================
// BACK TO TOP SHORTCUT
// =========================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Home"){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

});

// =========================
// NETWORK STATUS
// =========================

window.addEventListener("offline",()=>{

    console.warn("No internet connection.");

});

window.addEventListener("online",()=>{

    console.log("Internet connection restored.");

});

// =========================
// PERFORMANCE LOG
// =========================

window.addEventListener("load",()=>{

    console.log("Good Life Commercial Agencies");

    console.log("Production Version V1.0");

    console.log("Website loaded successfully.");

});
