const menuButton = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");

if (menuButton && navList) {
menuButton.addEventListener("click, () => {
    navList.classList.toggle("show");
}};
}