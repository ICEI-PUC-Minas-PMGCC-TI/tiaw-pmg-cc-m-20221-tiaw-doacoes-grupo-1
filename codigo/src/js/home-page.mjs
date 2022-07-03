import {listCampaigns} from "./polen-api.js"

const btnResults = document.querySelector("#btnresults");
const cardContainer = document.querySelector("#cardsContainer");

listCampaigns()
    .then(res => {
        showCampangs(res);
    });

function showCampangs(campaign) {
    console.log(campaign);

    const campaing = campaign["combate-a-fome"];

    let cards = ``;
    for(let i = 0; i < 4; i++) {
        if(i == 0) {
            cards += `<div class="row">`;
        } else if(i % 2 == 0) {
            cards += `</div><div class="row">`;
        } 
        cards += `
            <div class="col-lg-6 col-md-6 col-sm-12">
                <article class="article-card">
                <a href="${campaing[i].about}" target="_blank"
                    rel="nofollow" data-pts="on"><img src="${campaing[i].img_src}"
                        alt="${campaing[i].name}" /></a>
                <h2 class="text-uppercase text-center">${campaing[i].name}</h2>
                <p>${campaing[i].description}</p>
                <div class="more">
                    <a href="${campaing[i].about}" target="_blank"
                        rel="nofollow" data-pts="on">
                        saber mais
                    </a>
                </div>
                </article>
            </div>
        `;
        if(i == 3) {
            cards += `</div>`;
        }
    }
    cardContainer.innerHTML = cards;
}

btnResults.onclick = () => {
    window.location = `src/pages/login.html`;

}