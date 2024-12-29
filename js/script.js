const headerEl = document.querySelector("header");
const mobileNavEl = document.querySelector(".mobile-menu-btn");
const mobileLinksEl = document.querySelectorAll(".main-nav-link");
mobileNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// When the links are clicked, remove the nav-open class
mobileLinksEl.forEach(function (link) {
  link.addEventListener("click", function () {
    headerEl.classList.remove("nav-open");
  });
});
