import {listCampaignsByCategory} from './polen-api.js'


let usuarioCorrente = sessionStorage.getItem('usuarioCorrente')

if (!usuarioCorrente) window.location = 'login.html'


usuarioCorrente = JSON.parse(usuarioCorrente)

const scrollDiv = document.querySelector('#carsHorizontal');
const usrInfo = document.querySelector('#userInfo')




scrollDiv.onwheel = (e) => {
    const scrollDivAria = scrollDiv.getAttribute('aria-details');
    
    if(scrollDivAria === 'scroll-h' && window.innerWidth > 550) {
        e.preventDefault();
        scrollDiv.scrollLeft += (e.deltaY);
    }
}


listCampaignsByCategory('meio-ambiente').then(campaings => {
    
    campaings.forEach(campaing => {
        scrollDiv.innerHTML += `<div class="cars-itre">
        <div class="itre-img">
        <img src="${campaing.img_src}" alt="${campaing.name}">
        </div>
        <div class="itre-content">
        <h3 class="itre-title"><a href="${campaing.about}" target="_blank" rel="external">${campaing.name}</a></h3>
        <h4 class="itre-region">${campaing.region}</h4>
        <p>${campaing.description}</p>
        </div>
        </div>`
        
    });
})

usrInfo.innerHTML += `
    <p class="nome">${usuarioCorrente.nome}</p>
    <p class="email">${usuarioCorrente.email}</p>
    <p class="id">${usuarioCorrente.id}</p>
`