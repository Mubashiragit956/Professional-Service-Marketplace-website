/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

        const navLinks =
                document.querySelector(".nav-links");

        navLinks.classList.toggle("show");

}

/* =========================================
   GET STARTED BUTTON
========================================= */

function getStarted() {
        window.location.href = "contact.html";
}


/* =========================================
   SEARCH BUTTON
========================================= */

const searchButton =
        document.querySelector(".search-btn");


if (searchButton) {

        searchButton.addEventListener(
                "click",
                function () {

                        alert(
                                "Search feature is available soon."
                        );

                }
        );

}


/* =========================================
   CLOSE MOBILE MENU
========================================= */

const navLinks =
        document.querySelectorAll(".nav-links a");


navLinks.forEach(function (link) {

        link.addEventListener(
                "click",
                function () {

                        document
                                .querySelector(".nav-links")
                                .classList.remove("show");

                }
        );

});