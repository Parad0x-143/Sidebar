// script.js

const openMenuButton = document.getElementById("open-menu");
const sideMenu = document.getElementById("side-menu");
const content = document.getElementById("content");

openMenuButton.addEventListener("click", function() {
    if (sideMenu.style.left === "0px") {
        sideMenu.style.left = "-250px"; // Close the menu
        content.style.marginLeft = "0";
    } else {
        sideMenu.style.left = "0px"; // Open the menu
        content.style.marginLeft = "250px";
    }
});
￼Enter
