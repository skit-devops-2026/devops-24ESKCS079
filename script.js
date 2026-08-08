// ===============================
// MedCare++ JavaScript
// ===============================


// ===============================
// SMOOTH SCROLLING
// ===============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId && targetId.startsWith("#")) {

            event.preventDefault();

            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }

    });

});


// ===============================
// GET STARTED BUTTON
// ===============================

const getStartedButtons = document.querySelectorAll(
    ".primary, #getStarted"
);

getStartedButtons.forEach(button => {

    button.addEventListener("click", function () {

        const featuresSection = document.querySelector("#features");

        if (featuresSection) {
            featuresSection.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// ===============================
// WATCH DEMO BUTTON
// ===============================

const demoButtons = document.querySelectorAll(
    ".secondary, #watchDemo"
);

demoButtons.forEach(button => {

    button.addEventListener("click", function () {

        const aiSection = document.querySelector("#ai");

        if (aiSection) {
            aiSection.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// ===============================
// LOGIN BUTTON
// ===============================

const loginButton = document.querySelector("#loginBtn");

if (loginButton) {

    loginButton.addEventListener("click", function () {

        const email = prompt("Enter your email:");

        if (email === null) {
            return;
        }

        if (email.trim() === "") {
            alert("Please enter your email.");
            return;
        }

        const password = prompt("Enter your password:");

        if (password === null) {
            return;
        }

        if (password.trim() === "") {
            alert("Please enter your password.");
            return;
        }

        alert("Login successful! Welcome to MedCare++ ❤️");

    });

}


// ===============================
// MOBILE MENU
// ===============================

const menuButton = document.querySelector("#menuBtn");
const mobileMenu = document.querySelector("#mobileMenu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", function () {

        mobileMenu.classList.toggle("hidden");

    });

}


// ===============================
// MOBILE MENU LINKS
// ===============================

const mobileLinks = document.querySelectorAll(
    "#mobileMenu a"
);

mobileLinks.forEach(link => {

    link.addEventListener("click", function () {

        if (mobileMenu) {
            mobileMenu.classList.add("hidden");
        }

    });

});


// ===============================
// CONTACT BUTTON
// ===============================

const contactButton = document.querySelector("#contactBtn");

if (contactButton) {

    contactButton.addEventListener("click", function () {

        const name = prompt("Enter your name:");

        if (name === null) {
            return;
        }

        if (name.trim() === "") {
            alert("Please enter your name.");
            return;
        }

        alert(
            `Thank you, ${name}! Our healthcare team will contact you soon.`
        );

    });

}


// ===============================
// FEATURE CARD INTERACTION
// ===============================

const featureCards = document.querySelectorAll(".card");

featureCards.forEach(card => {

    card.addEventListener("click", function () {

        const title = this.querySelector("h3");

        if (title) {

            alert(
                `${title.textContent}\n\nMedCare++ provides smart healthcare support through this feature.`
            );

        }

    });

});


// ===============================
// PAGE LOAD MESSAGE
// ===============================

window.addEventListener("load", function () {

    console.log(
        "MedCare++ loaded successfully 🚑❤️"
    );

});