const menuBar = document.querySelector(".menubar");
const list= document.querySelector(".nav-links ul");
const icon = menuBar.querySelector("i");
const navLinks = document.querySelectorAll(".nav-links ul li a");

menuBar.addEventListener("click", () => {
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-x");

    if (window.getComputedStyle(list).display === "none") {
        list.style.display = "flex";

    } else {
        list.style.display = "none";

    }
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 992) {
            list.style.display = "none";
            icon.classList.remove("fa-x");
            icon.classList.add("fa-bars");
        }
    });
});