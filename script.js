/* ================= TYPING EFFECT ================= */

const typingText = document.querySelector(".typing-text");

const texts = [
    "I am a Web Developer",
    "I am a BCA (AI & ML) Student",
    "I love Building Projects",
    "I enjoy Learning Technology"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentText = texts[textIndex];

    if (!deleting) {

        typingText.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            textIndex++;

            if (textIndex === texts.length) {
                textIndex = 0;
            }

        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}


typeEffect();



/* ================= CONTACT FORM ================= */

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Thank you for contacting me! I will get back to you soon."
        );

        this.reset();

    });



/* ================= BACK TO TOP ================= */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});


backToTop.addEventListener("click", function() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/* ================= NAVBAR ACTIVE LINK ================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", function() {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 100;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});