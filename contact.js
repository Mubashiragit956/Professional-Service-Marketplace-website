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

function getStarted() {

        window.location.href = "contact.html";

}


/* =========================================
   FOCUS CONTACT FORM
========================================= */

function focusContactForm() {

        const nameInput =
                document.getElementById("name");

        nameInput.focus();

        nameInput.scrollIntoView({
                behavior: "smooth",
                block: "center"
        });

}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
        document.getElementById("contactForm");


contactForm.addEventListener(
        "submit",
        function (event) {

                event.preventDefault();


                /* Get values */

                const name =
                        document.getElementById("name")
                                .value
                                .trim();

                const email =
                        document.getElementById("email")
                                .value
                                .trim();

                const message =
                        document.getElementById("message")
                                .value
                                .trim();


                /* Error elements */

                const nameError =
                        document.getElementById("nameError");

                const emailError =
                        document.getElementById("emailError");

                const messageError =
                        document.getElementById("messageError");

                const successMessage =
                        document.getElementById("successMessage");


                /* Clear old errors */

                nameError.textContent = "";
                emailError.textContent = "";
                messageError.textContent = "";

                successMessage.textContent = "";


                let isValid = true;


                /* =====================================
                   NAME VALIDATION
                ====================================== */

                if (name === "") {

                        nameError.textContent =
                                "Please enter your name.";

                        isValid = false;

                }


                /* =====================================
                   EMAIL VALIDATION
                ====================================== */

                if (email === "") {

                        emailError.textContent =
                                "Please enter your email.";

                        isValid = false;

                }

                else if (!isValidEmail(email)) {

                        emailError.textContent =
                                "Please enter a valid email.";

                        isValid = false;

                }


                /* =====================================
                   MESSAGE VALIDATION
                ====================================== */

                if (message === "") {

                        messageError.textContent =
                                "Please enter your message.";

                        isValid = false;

                }

                else if (message.length < 10) {

                        messageError.textContent =
                                "Message should contain at least 10 characters.";

                        isValid = false;

                }


                /* =====================================
                   SUCCESS
                ====================================== */

                if (isValid) {

                        successMessage.textContent =
                                "✓ Your message has been sent successfully!";

                        contactForm.reset();

                }

        }
);


/* =========================================
   EMAIL VALIDATION
========================================= */

function isValidEmail(email) {

        const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailPattern.test(email);

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