$(document).ready(function () {
  $(".owl-carousel-1").owlCarousel({
    items: 1, // Bitta rasm ko‘rsatish
    loop: true, // Cheksiz aylanish
    nav: false, // Navigatsiya tugmalari
    dots: true, //flase Nuqtalar (indicator)
    autoplay: true, // Avtomatik aylanish
    autoplayTimeout: 1000, // 3 soniyada slayder o‘zgaradi
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1.8 },
      600: { items: 3.5 },
      1000: { items: 5 },
    },
  });
});

$(document).ready(function () {
  $(".owl-carousel-2").owlCarousel({
    items: 1, // Bitta rasm ko‘rsatish
    loop: true, // Cheksiz aylanish
    nav: false, // Navigatsiya tugmalari
    dots: false, //flase Nuqtalar (indicator)
    autoplay: true, // Avtomatik aylanish
    autoplayTimeout: 1000, // 3 soniyada slayder o‘zgaradi
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
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

// loading
const loadingOverlay = document.getElementById("loadingOverlay");
window.addEventListener("load", () => {
  setTimeout(() => {
    loadingOverlay.style.display = "none";
  }, 4000);
});
// Aos
AOS.init();
