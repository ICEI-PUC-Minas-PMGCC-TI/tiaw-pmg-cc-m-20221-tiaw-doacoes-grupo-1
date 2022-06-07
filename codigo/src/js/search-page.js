const urlSearchParams = new URLSearchParams(window.location.search)
const polen = require('./polen-api');

let options = {
    valueNames: ['name', 'region', 'description', 'img_src', 'category', 'about'],
    item: values => {
        return `
        <div class="blog-card">
	<div class="meta">
		<div class="photo" style="background-image: url(${values['img_src']})"></div>
		<ul class="details">
            <li class="place">Região: ${values.region}</li>
            <li class="tags">Categoria: ${values.category}</li>
		</ul>
	</div>
	<div class="desc">
		<h1>${values.name}</h1>
		<p>${values.description}</p>
		<p class="read-more">
			<a href="${values['about']}" rel="external" target="_blank">Saiba Mais</a>
		</p>
	</div>
</div>
`         
    },
    i: 20,
}

let values = []

export let campaigns = new List('campaign-results', options, values);

polen.listCampaignsByCategory('meio-ambiente')
    .then(c => campaigns.add(c, () => searchCampaigns(search.value)))
    .catch(e => console.error("Erro ao tentar listar campanhas:", e))

polen.listCampaignsByCategory('direitos-humanos')
    .then(c => campaigns.add(c, () => searchCampaigns(search.value)))
    .catch(e => console.error("Erro ao tentar listar campanhas:", e))

function searchCampaigns(text) {
    campaigns.fuzzySearch(text, ['name', 'region', 'description', 'category']);
    console.log(campaigns.list)
}

searchCampaigns(urlSearchParams.get("search"));

const search = document.querySelector("#header-searchInput");


search.value = urlSearchParams.get("search")

search.addEventListener('input', e => {
    searchCampaigns(e.target.value);
})



onload = () => {
    $("#menu").click(() => {
        $(".overlay").toggleClass("open");
        $(".superlay").toggleClass("open");
    });
    
    $(".cross").click(() => {
        $(".overlay").addClass("open");
        $(".superlay").toggleClass("open");
    });
}