/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

        const nav =
                document.querySelector(".nav-links");

        nav.classList.toggle("show");

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

        const search =
                document.getElementById("blogSearch");

        search.focus();

}


/* =========================================
   CATEGORY FILTER
========================================= */

const categoryButtons =
        document.querySelectorAll(".category-btn");

const blogCards =
        document.querySelectorAll(".blog-card");


categoryButtons.forEach(function (button) {

        button.addEventListener(
                "click",
                function () {

                        /* Remove active class */

                        categoryButtons.forEach(function (btn) {

                                btn.classList.remove("active");

                        });


                        /* Add active class */

                        button.classList.add("active");


                        const selectedCategory =
                                button.dataset.category;


                        let visibleCards = 0;


                        blogCards.forEach(function (card) {

                                const cardCategory =
                                        card.dataset.category;


                                if (
                                        selectedCategory === "all" ||
                                        selectedCategory === cardCategory
                                ) {

                                        card.style.display = "block";

                                        visibleCards++;

                                }

                                else {

                                        card.style.display = "none";

                                }

                        });


                        showNoResults(visibleCards);

                }
        );

});


/* =========================================
   SEARCH BLOGS
========================================= */

function searchBlogs() {

        const searchInput =
                document.getElementById("blogSearch");

        const searchValue =
                searchInput.value
                        .toLowerCase()
                        .trim();


        let visibleCards = 0;


        blogCards.forEach(function (card) {

                const title =
                        card.querySelector("h2")
                                .textContent
                                .toLowerCase();


                const category =
                        card.querySelector(".blog-category")
                                .textContent
                                .toLowerCase();


                if (
                        title.includes(searchValue) ||
                        category.includes(searchValue)
                ) {

                        card.style.display = "block";

                        visibleCards++;

                }

                else {

                        card.style.display = "none";

                }

        });


        showNoResults(visibleCards);

}


/* =========================================
   LIVE SEARCH
========================================= */

const searchInput =
        document.getElementById("blogSearch");


searchInput.addEventListener(
        "input",
        function () {

                searchBlogs();

        }
);


/* =========================================
   NO RESULTS
========================================= */

function showNoResults(count) {

        const message =
                document.getElementById("noResults");


        if (count === 0) {

                message.style.display = "block";

        }

        else {

                message.style.display = "none";

        }

}


/* =========================================
   READ ARTICLE
========================================= */

function readArticle(title) {

        alert(
                "Opening article: " + title
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