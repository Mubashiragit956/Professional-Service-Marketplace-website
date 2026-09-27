/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

        const nav =
                document.querySelector(".nav-links");

        nav.classList.toggle("show");

}


/* =========================================
   GET STARTED
========================================= */

function goToContact() {

        window.location.href = "contact.html";

}


/* =========================================
   SEND MESSAGE
========================================= */

function sendMessage() {

        window.location.href =
                "contact.html";

}


/* =========================================
   REQUEST SERVICE
========================================= */
function requestService() {
        window.location.href = "contact.html";
}



/* =========================================
   PROFILE TABS
========================================= */

function showTab(tabId, button) {


        /* Hide all tab contents */

        const contents =
                document.querySelectorAll(".tab-content");

        contents.forEach(function (content) {

                content.classList.remove(
                        "active-content"
                );

        });


        /* Remove active from buttons */

        const buttons =
                document.querySelectorAll(".tab-btn");

        buttons.forEach(function (btn) {

                btn.classList.remove("active");

        });


        /* Show selected tab */

        const selectedTab =
                document.getElementById(tabId);

        selectedTab.classList.add(
                "active-content"
        );


        /* Activate button */

        button.classList.add("active");

}