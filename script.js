const menuBar = document.querySelector(".menubar");
const navheight=document.querySelector("#main-container-height");
const list= document.querySelector(".nav-links ul");
const icon = menuBar.querySelector("i");

menuBar.addEventListener("click", () => {
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-x");

    if (window.getComputedStyle(list).display === "none") {
        list.style.display = "flex";
        navheight.style.height = "100vh";

    } else {
        list.style.display = "none";
        navheight.style.height = "80px";

    }
});
