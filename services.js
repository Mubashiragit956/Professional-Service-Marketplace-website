/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

        const navLinks = document.querySelector(".nav-links");

        navLinks.classList.toggle("show");

}

/* =========================================
   GET STARTED BUTTON
========================================= */

function getStarted() {
        window.location.href = "contact.html";
}


/* =========================================
   SEARCH FOCUS
========================================= */

function focusSearch() {

        const searchInput = document.getElementById("serviceSearch");

        searchInput.focus();

}


/* =========================================
   SEARCH SERVICES
========================================= */

function searchServices() {

        const searchInput =
                document.getElementById("serviceSearch");

        const searchValue =
                searchInput.value.toLowerCase().trim();

        const cards =
                document.querySelectorAll(".service-card");


        cards.forEach(function (card) {

                const title =
                        card.querySelector("h3").textContent.toLowerCase();

                const description =
                        card.querySelector("p").textContent.toLowerCase();


                if (
                        title.includes(searchValue) ||
                        description.includes(searchValue)
                ) {

                        card.classList.remove("hidden");

                } else {

                        card.classList.add("hidden");

                }

        });

}


/* =========================================
   SEARCH WHILE TYPING
========================================= */

document
        .getElementById("serviceSearch")
        .addEventListener("input", searchServices);


/* =========================================
   CATEGORY FILTER
========================================= */

const categoryButtons =
        document.querySelectorAll(".category-btn");

const serviceCards =
        document.querySelectorAll(".service-card");


categoryButtons.forEach(function (button) {

        button.addEventListener("click", function () {

                categoryButtons.forEach(function (btn) {
                        btn.classList.remove("active");
                });

                button.classList.add("active");


                const category =
                        button.getAttribute("data-category");


                serviceCards.forEach(function (card) {

                        const cardCategory =
                                card.getAttribute("data-category");


                        if (
                                category === "all" ||
                                cardCategory === category
                        ) {

                                card.classList.remove("hidden");

                        } else {

                                card.classList.add("hidden");

                        }

                });

        });

});


/* =========================================
   SIDEBAR CATEGORY FILTER
========================================= */

const categoryInputs =
        document.querySelectorAll(
                'input[name="service-category"]'
        );


categoryInputs.forEach(function (input) {

        input.addEventListener("change", function () {

                const selectedCategory =
                        input.value;


                serviceCards.forEach(function (card) {

                        const cardCategory =
                                card.getAttribute("data-category");


                        if (
                                selectedCategory === "all" ||
                                cardCategory === selectedCategory
                        ) {

                                card.classList.remove("hidden");

                        } else {

                                card.classList.add("hidden");

                        }

                });

        });

});


/* =========================================
   PRICE FILTER
========================================= */

const priceInputs =
        document.querySelectorAll(
                'input[name="price"]'
        );


priceInputs.forEach(function (input) {

        input.addEventListener("change", function () {

                const selectedPrice =
                        input.value;


                serviceCards.forEach(function (card) {

                        const price =
                                Number(card.getAttribute("data-price"));


                        let showCard = true;


                        if (selectedPrice === "0-50") {

                                showCard = price <= 50;

                        }

                        else if (selectedPrice === "50-100") {

                                showCard =
                                        price > 50 &&
                                        price <= 100;

                        }

                        else if (selectedPrice === "100-200") {

                                showCard =
                                        price > 100 &&
                                        price <= 200;

                        }

                        else if (selectedPrice === "200") {

                                showCard = price > 200;

                        }


                        if (showCard) {

                                card.classList.remove("hidden");

                        } else {

                                card.classList.add("hidden");

                        }

                });

        });

});


/* =========================================
   CLEAR FILTERS
========================================= */

function clearFilters() {

        document
                .getElementById("serviceSearch")
                .value = "";


        document
                .querySelector(
                        'input[name="service-category"][value="all"]'
                )
                .checked = true;


        document
                .querySelector(
                        'input[name="price"][value="all"]'
                )
                .checked = true;


        categoryButtons.forEach(function (button) {

                button.classList.remove("active");

        });


        document
                .querySelector(
                        '.category-btn[data-category="all"]'
                )
                .classList.add("active");


        serviceCards.forEach(function (card) {

                card.classList.remove("hidden");

        });

}


/* =========================================
   VIEW SERVICE
========================================= */

function viewService(serviceName) {

        alert(
                serviceName +
                " selected. Service details will open here."
        );

}