// Preloader
window.addEventListener("load", function () {
    document.getElementById("preloader").style.display = "none";
});

// Scroll animatsiya
const scrollElements = document.querySelectorAll(".scroll-effect");

const scrollHandler = () => {
    scrollElements.forEach((el) => {
        const elementPosition = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (elementPosition < screenHeight - 50) {
            el.classList.add("scroll-visible");
        }
    });
};

window.addEventListener("scroll", scrollHandler);
scrollHandler();

// Mobil menyu
const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});