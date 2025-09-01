const menuBtn = document.getElementById("menu_btn");
const navLinks = document.querySelector(".nav_links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.className = isOpen ? "ri-close-line" : "ri-menu-line";

});

navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        navLinks.classList.remove("open");
        menuBtnIcon.className = "ri-menu-line";
    }
});