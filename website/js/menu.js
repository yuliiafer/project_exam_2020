// select menu for mobile and image for menu, and declare variables
const menuIcon = document.querySelector(".menu");
const menuMobile = document.querySelector(".menu-mobile");
// declare a variable for active mobile menu
let menuActive;
// add event click on the icon
menuIcon.addEventListener("click", () => {
    if (menuActive === true) {
        // image as close icon
        menuIcon.src = "images/menu-white.png";
        // width of the menu
        menuMobile.style.width = "0";
        // menu is close
        menuActive = false;
    } else {
        // image as burger-menu-icon
        menuIcon.src = "images/close-white.png";
        // hidden
        menuMobile.style.width = "60%";
        // menu is open
        menuActive = true;
    }
})