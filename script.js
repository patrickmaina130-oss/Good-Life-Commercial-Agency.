/*==================================================
GOOD LIFE COMMERCIAL AGENCIES
SCRIPT.JS
VERSION 2.0
==================================================*/

document.addEventListener("DOMContentLoaded", function () {

    console.log("Website Loaded Successfully");

    /*==========================================
      SECTION 5 - AUTO SERVICES SLIDER
    ==========================================*/

    const slider = document.querySelector(".services-slider");

    if (slider) {

        let cardWidth = 365;

        function autoSlide() {

            if (
                slider.scrollLeft + slider.clientWidth >=
                slider.scrollWidth - 10
            ) {

                slider.scrollTo({
                    left: 0,
                    behavior: "smooth"
                });

            } else {

                slider.scrollBy({
                    left: cardWidth,
                    behavior: "smooth"
                });

            }

        }

        let slide = setInterval(autoSlide, 4000);

        slider.addEventListener("touchstart", function () {
            clearInterval(slide);
        });

        slider.addEventListener("mouseenter", function () {
            clearInterval(slide);
        });

        slider.addEventListener("mouseleave", function () {

            slide = setInterval(autoSlide, 4000);

        });

    }

});
