// =========================
// ELEMENTS
// =========================

const navbar = document.querySelector(".header");
const backToTopBtn = document.getElementById("backToTop");
const menuLinks = document.querySelector(".nav-links");

// =========================
// NAVBAR SCROLL EFFECT
// =========================

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // BACK TO TOP BUTTON
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// =========================
// BACK TO TOP
// =========================

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// =========================
// MOBILE MENU TOGGLE (if menu button exists)
// =========================

const menuBtn = document.querySelector(".menu-btn");

if (menuBtn && menuLinks) {
  menuBtn.addEventListener("click", () => {
    menuLinks.classList.toggle("active");
  });
}

// =========================
// CLOSE MENU ON LINK CLICK (mobile)
// =========================

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    menuLinks.classList.remove("active");
  });
});

// =========================
// WHATSAPP FORM HANDLER (GLOBAL)
// =========================

function sendToWhatsApp(message) {
  const phone = "254705365075";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// =========================
// JOB FORM
// =========================

const jobForm = document.getElementById("jobApplyForm");

if (jobForm) {
  jobForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = jobForm.querySelector("input[type='text']").value;
    const phone = jobForm.querySelector("input[type='tel']").value;
    const email = jobForm.querySelector("input[type='email']").value;
    const category = jobForm.querySelector("select").value;
    const message = jobForm.querySelector("textarea").value;

    const text =
`💼 NEW JOB APPLICATION
------------------------
Name: ${name}
Phone: ${phone}
Email: ${email}
Category: ${category}
Message: ${message}`;

    sendToWhatsApp(text);
  });
}

// =========================
// HOTEL BOOKING FORM
// =========================

const hotelForm = document.getElementById("hotelBookingForm");

if (hotelForm) {
  hotelForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = hotelForm.querySelector("input[type='text']").value;
    const phone = hotelForm.querySelector("input[type='tel']").value;
    const email = hotelForm.querySelector("input[type='email']").value;
    const hotel = hotelForm.querySelector("select").value;
    const date = hotelForm.querySelector("input[type='date']").value;
    const nights = hotelForm.querySelectorAll("select")[1].value;
    const message = hotelForm.querySelector("textarea").value;

    const text =
`🏨 NEW HOTEL BOOKING
------------------------
Name: ${name}
Phone: ${phone}
Email: ${email}
Hotel: ${hotel}
Check-in Date: ${date}
Nights: ${nights}
Message: ${message}`;

    sendToWhatsApp(text);
  });
}

// =========================
// COMMUNITY FORM
// =========================

const communityForm = document.getElementById("communityForm");

if (communityForm) {
  communityForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = communityForm.querySelector("input[type='text']").value;
    const phone = communityForm.querySelector("input[type='tel']").value;
    const email = communityForm.querySelector("input[type='email']").value;
    const type = communityForm.querySelector("select").value;
    const message = communityForm.querySelector("textarea").value;

    const text =
`❤️ COMMUNITY SUPPORT REQUEST
------------------------
Name: ${name}
Phone: ${phone}
Email: ${email}
Type: ${type}
Message: ${message}`;

    sendToWhatsApp(text);
  });
}

// =========================
// BUSINESS FORM
// =========================

const businessForm = document.getElementById("businessForm");

if (businessForm) {
  businessForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = businessForm.querySelector("input[type='text']").value;
    const phone = businessForm.querySelector("input[type='tel']").value;
    const email = businessForm.querySelector("input[type='email']").value;
    const service = businessForm.querySelector("select").value;
    const message = businessForm.querySelector("textarea").value;

    const text =
`💼 BUSINESS SERVICE REQUEST
------------------------
Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${service}
Message: ${message}`;

    sendToWhatsApp(text);
  });
}

// =========================
// GALLERY SCROLL BUTTONS
// =========================

document.querySelectorAll(".gallery-wrapper").forEach(wrapper => {
  const scroll = wrapper.querySelector(".gallery-scroll");
  const leftBtn = wrapper.querySelector(".gallery-arrow.left");
  const rightBtn = wrapper.querySelector(".gallery-arrow.right");

  if (leftBtn && scroll) {
    leftBtn.addEventListener("click", () => {
      scroll.scrollBy({ left: -250, behavior: "smooth" });
    });
  }

  if (rightBtn && scroll) {
    rightBtn.addEventListener("click", () => {
      scroll.scrollBy({ left: 250, behavior: "smooth" });
    });
  }
});

// =========================
// COUNTER ANIMATION (COMMUNITY PAGE)
// =========================

const counters = document.querySelectorAll(".counter");

if (counters.length > 0) {
  counters.forEach(counter => {
    const update = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;
      const increment = target / 100;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(update, 20);
      } else {
        counter.innerText = target;
      }
    };

    update();
  });
  }
