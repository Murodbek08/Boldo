$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1, // Bitta rasm ko‘rsatish
    loop: true, // Cheksiz aylanish
    nav: false, // Navigatsiya tugmalari
    dots: true, //flase Nuqtalar (indicator)
    autoplay: true, // Avtomatik aylanish
    autoplayTimeout: 3000, // 3 soniyada slayder o‘zgaradi
    responsive: {
      0: { items: 1.8 },
      600: { items: 3.5 },
      1000: { items: 6 },
    },
  });
});

// navbar shrink

window.addEventListener("scroll", function () {
  shrink();
});
let navbar = document.getElementById("header");
function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}
// dark-mode

const darkModeBtn = document.getElementById("darkModeBtn");
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// bac top
const scrollTopBtn = document.getElementById("scrollTopBtn");
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Aos
AOS.init();
