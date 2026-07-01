/*==================================================
SMART SERVICE FILTER
==================================================*/

const serviceSelect = document.getElementById("serviceSelect");

const cards = document.querySelectorAll(".service-card");

serviceSelect.addEventListener("change", function () {

    const selected = this.value;

    cards.forEach(card => {

        if (selected === "all") {

            card.style.display = "block";

        } else if (card.dataset.category === selected) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});

/*==================================================
QUICK VIEW
==================================================*/

let currentCategory = "tours";

function attachQuickView(){

document.querySelectorAll(".quick-view").forEach(btn=>{

btn.addEventListener("click",()=>{

const item = marketplaceData[currentCategory][btn.dataset.index];

document.getElementById("modalImage").src=item.image;

document.getElementById("modalBadge").textContent=item.badge;

document.getElementById("modalTitle").textContent=item.title;

document.getElementById("modalLocation").textContent=item.location;

document.getElementById("modalRating").textContent="⭐ "+item.rating;

document.getElementById("modalPrice").textContent="USD "+item.priceUSD;

document.getElementById("modalKes").textContent="KES "+item.priceKES;

document.getElementById("quickViewModal").classList.remove("hidden");

document.getElementById("quickViewModal").classList.add("flex");

});

});

}

document.getElementById("closeModal").addEventListener("click",()=>{

document.getElementById("quickViewModal").classList.add("hidden");

document.getElementById("quickViewModal").classList.remove("flex");

});
