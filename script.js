/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");


/* Open / Close Mobile Menu */

menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("show");

});


/* =========================================
   CLOSE MENU AFTER CLICKING NAV LINK
========================================= */

const navLinks = document.querySelectorAll(".nav-link");


navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

                navMenu.classList.remove("show");

        });

});


/* =========================================
   SEARCH BUTTON
========================================= */

const searchBtn = document.getElementById("searchBtn");


searchBtn.addEventListener("click", function () {

        alert("Search feature will be added soon!");

});
/* =========================================
   HERO SEARCH
========================================= */

const heroSearchBtn =
        document.getElementById("heroSearchBtn");

const heroSearchInput =
        document.getElementById("heroSearchInput");


heroSearchBtn.addEventListener("click", function () {

        const searchValue =
                heroSearchInput.value.trim();


        if (searchValue === "") {

                alert("Please enter a service to search.");

                heroSearchInput.focus();

                return;
        }


        alert(
                "Searching for: " + searchValue
        );

});


/* =========================================
   SEARCH WITH ENTER KEY
========================================= */

heroSearchInput.addEventListener(
        "keydown",
        function (event) {

                if (event.key === "Enter") {

                        heroSearchBtn.click();

                }

        }
);/* =========================================
   POPULAR SERVICES
========================================= */

const serviceDetails =
        document.querySelectorAll(".service-details");


serviceDetails.forEach(function (link) {

        link.addEventListener("click", function (event) {

                event.preventDefault();

                const card =
                        this.closest(".service-card");

                const serviceName =
                        card.querySelector("h3").textContent;

                alert(
                        serviceName +
                        " details page will open soon."
                );

        });

});


/* =========================================
   VIEW ALL SERVICES
========================================= */

const allServices =
        document.querySelector(".all-services");


if (allServices) {

        allServices.addEventListener(
                "click",
                function (event) {

                        event.preventDefault();

                        alert(
                                "All Services page will open soon."
                        );

                }
        );

}
/* =========================================
   PROVIDER PROFILE BUTTON
========================================= */

function viewProfile(providerName) {

        alert(
                "Opening profile of " + providerName
        );

}


/* =========================================
   VIEW ALL PROVIDERS
========================================= */

const viewAllProviders =
        document.querySelector(".view-all-providers");

viewAllProviders.addEventListener("click", function (event) {

        event.preventDefault();

        alert("Showing all providers...");

});
/* =========================================
   GET STARTED BUTTON
========================================= */

function getStarted() {
        window.location.href = "contact.html";
}
// =========================================
// FOOTER CURRENT YEAR
// =========================================

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();
