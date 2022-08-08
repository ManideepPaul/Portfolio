const navbar = document.querySelector(".navbar");
const ham = document.querySelector(".ham");
const mobNav = document.querySelector(".mob-nav");
const mobMenu = document.querySelector(".mob-menu");

window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('nav-active')
    } else {
        navbar.classList.remove('nav-active')
    }
};

ham.addEventListener('click', () => {
    mobNav.classList.toggle("mob-visible");
    mobMenu.classList.toggle("mob-menu-visible");
})