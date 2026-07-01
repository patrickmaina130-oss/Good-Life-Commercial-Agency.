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
