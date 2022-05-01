const searchBtn = document.querySelector(".search-mobile-button");
const searchMobile = document.querySelector("#search-mobile");

searchBtn.addEventListener("click", () => {
    const visibilidade = searchBtn.getAttribute("aria-expanded");
    if(visibilidade === "false") {
        searchBtn.setAttribute("aria-expanded", true);
        searchMobile.classList.remove("disable");
        searchMobile.setAttribute("aria-expanded", true);
    } else if(visibilidade === "true") {
        searchBtn.setAttribute("aria-expanded", false);
        searchMobile.classList.add("disable");
        searchMobile.setAttribute("aria-expanded", false);
    }
});