// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Initial call
reveal();

// Sticky Navigation Glass Effect
window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.style.padding = "0.8rem 8%";
        nav.style.background = "rgba(15, 17, 19, 0.95)";
    } else {
        nav.style.padding = "1.2rem 8%";
        nav.style.background = "rgba(15, 17, 19, 0.85)";
    }
});
