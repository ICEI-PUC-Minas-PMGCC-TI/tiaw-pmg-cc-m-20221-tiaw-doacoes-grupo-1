//Open and close mobile menu, yes it could be done without EventListener.
const menuToggle = document.querySelector(".menu-btn");
const menuContainer = document.querySelector("#container--primaryNav");
const menuToggle2 = document.querySelector(".menu-btn2");

menuToggle.addEventListener("click", () => {
    const visibilidade = menuToggle.getAttribute("aria-expanded");
    if(visibilidade === "false") {
        menuToggle.setAttribute("aria-expanded", true);
        menuContainer.setAttribute("data-visible", true);
        menuToggle2.setAttribute("aria-expanded", true);
    }
});

menuToggle2.addEventListener("click", () => {
    const visibilidade = menuToggle2.getAttribute("aria-expanded");
    if(visibilidade === "true") {
        menuToggle.setAttribute("aria-expanded", false);
        menuContainer.setAttribute("data-visible", false);
        menuToggle2.setAttribute("aria-expanded", false);
    }
});

