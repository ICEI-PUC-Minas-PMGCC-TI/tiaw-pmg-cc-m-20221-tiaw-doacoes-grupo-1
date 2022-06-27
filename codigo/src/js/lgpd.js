const lgpdContainer = document.querySelector(".lgpd-cookies");
const lgpdButton = document.querySelector(".cookie_ok");
const lgpdPref = window.localStorage.getItem("cookie");

if(!lgpdPref) localStorage.setItem('cookie', false);

if(lgpdPref === "true") {
    lgpdContainer.style.display = "none";
    lgpdButton.setAttribute("aria-expanded", false);
} else {
    lgpdButton.addEventListener("click", () => {
        const lgpdVisible = lgpdButton.getAttribute("aria-expanded");
        if(lgpdVisible === "true") {
            lgpdButton.setAttribute("aria-expanded", false);
            lgpdContainer.style.display = "none";
            window.localStorage.setItem('cookie', true);
        } 
    });
}