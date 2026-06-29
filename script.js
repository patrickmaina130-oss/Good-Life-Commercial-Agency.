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
price:"Starting From USD 350 • KSh 45,000",
image:"https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80"
},

{
name:"Amboseli National Park",
country:"🇰🇪 Kenya",
price:"Starting From USD 300 • KSh 39,000",
image:"https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80"
},

{
name:"Tsavo East National Park",
country:"🇰🇪 Kenya",
price:"Starting From USD 350 • KSh 45,000",
image:"https://images.unsplash.com/photo-1549366021-9f761d040a94?auto=format&fit=crop&w=1200&q=80"
},

{
name:"Lake Nakuru National Park",
country:"🇰🇪 Kenya",
price:"Starting From USD 250 • KSh 32,000",
image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
},

{
name:"Lake Naivasha",
country:"🇰🇪 Kenya",
price:"Starting From USD 220 • KSh 28,500",
image:"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80"
},

{
name:"Hell's Gate National Park",
country:"🇰🇪 Kenya",
price:"Starting From USD 220 • KSh 28,500",
image:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
},

{
name:"Samburu National Reserve",
country:"🇰🇪 Kenya",
price:"Starting From USD 600 • KSh 78,000",
image:"https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=80"
},

{
name:"Mount Kenya Adventure",
country:"🇰🇪 Kenya",
price:"Starting From USD 320 • KSh 41,500",
image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
},

{
name:"Diani Beach",
country:"🇰🇪 Kenya",
price:"Starting From USD 320 • KSh 41,500",
image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
},

{
name:"Watamu Beach",
country:"🇰🇪 Kenya",
price:"Starting From USD 350 • KSh 45,000",
image:"https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80"
},

{
name:"Serengeti National Park",
country:"🇹🇿 Tanzania",
price:"Starting From USD 900 • KSh 117,000",
image:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80"
},

{
name:"Ngorongoro Crater",
country:"🇹🇿 Tanzania",
price:"Starting From USD 950 • KSh 123,500",
image:"https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=1200&q=80"
},

{
name:"Zanzibar Holiday",
country:"🇹🇿 Tanzania",
price:"Starting From USD 700 • KSh 91,000",
image:"https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80"
},

{
name:"Mount Kilimanjaro",
country:"🇹🇿 Tanzania",
price:"Starting From USD 1,200 • KSh 156,000",
image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
},

{
name:"Bwindi Gorilla Trek",
country:"🇺🇬 Uganda",
price:"Starting From USD 1,300 • KSh 169,000",
image:"https://images.unsplash.com/photo-1549366021-9f761d040a94?auto=format&fit=crop&w=1200&q=80"
},

{
name:"Queen Elizabeth National Park",
country:"🇺🇬 Uganda",
price:"Starting From USD 650 • KSh 84,500",
image:"https://images.unsplash.com/photo-1527169402691-a7c4b4c7f6c5?auto=format&fit=crop&w=1200&q=80"
},

{
name:"Murchison Falls",
country:"🇺🇬 Uganda",
price:"Starting From USD 700 • KSh 91,000",
image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
},

{
name:"Volcanoes National Park",
country:"🇷🇼 Rwanda",
price:"Starting From USD 1,400 • KSh 182,000",
image:"https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=80"
}

];
