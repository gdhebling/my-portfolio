const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav__links");
const navLinks = document.querySelectorAll(".nav__links li a");
const navItems = document.querySelectorAll(".nav__links li");
const sections = document.querySelectorAll("section");

/* Header shrink and active menu on scroll */
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("scrolling-active", windowPosition);

  let index = sections.length;
  while (--index && window.scrollY + 400 < sections[index].offsetTop) {}
  navLinks.forEach((link) => link.classList.remove("active"));
  navLinks[index].classList.add("active");
});

/* Nav slide and animation on burger menu click */
const navSlide = () => {
  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navItems.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 0.5
        }s`;
      }
    });

    // Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
