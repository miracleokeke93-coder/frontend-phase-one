const menuButton = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");

menuButton.addEventListener("click, () => {
    navList.classList.toggle("show");
});