const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav__links');
const navLinks = document.querySelectorAll('.nav__links li a');
const navItems = document.querySelectorAll('.nav__links li');

/* Header shrink on scroll */
window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})

/* Nav slide and animation on burger menu click */
const navSlide = () => {

    burger.addEventListener('click', () => {

        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

}

navSlide();

/* Active Menu Status */
navLinks.forEach(button => {
    button.addEventListener('click', function () {
        navLinks.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    })
})