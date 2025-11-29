const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

const interactiveBtn = document.querySelector(".header-submenu")
const submenu = document.querySelector(".submenu")

interactiveBtn.addEventListener("click", () => {
    if(submenu.style.display === "block") {
        submenu.style.display = "none";
    } else {
        submenu.style.display = "block"
    }
})
