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

/*=========================================
GOOD LIFE HERO DESTINATION SLIDER
=========================================*/

const destinations = [

{
name:"Maasai Mara Safari",
country:"🇰🇪 Kenya • 3 Days / 2 Nights",
price:"USD 350 • KSh 45,000",
image:"https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80"
},

{
name:"Amboseli National Park",
country:"🇰🇪 Kenya • 3 Days / 2 Nights",
price:"USD 300 • KSh 39,000",
image:"https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80"
},

{
name:"Diani Beach",
country:"🇰🇪 Kenya • 3 Days",
price:"USD 320 • KSh 41,500",
image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
},

{
name:"Serengeti National Park",
country:"🇹🇿 Tanzania • 4 Days",
price:"USD 900 • KSh 117,000",
image:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80"
},

{
name:"Zanzibar Holiday",
country:"🇹🇿 Tanzania • 4 Days",
price:"USD 700 • KSh 91,000",
image:"https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80"
}

];

let current = 0;

function changeDestination(){

document.getElementById("destination-image").src =
destinations[current].image;

document.getElementById("destination-name").innerHTML =
destinations[current].name;

document.getElementById("destination-country").innerHTML =
destinations[current].country;

document.getElementById("destination-price").innerHTML =
destinations[current].price;

current++;

if(current>=destinations.length){

current=0;

}

}

setInterval(changeDestination,5000);
