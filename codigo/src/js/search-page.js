const urlSearchParams = new URLSearchParams(window.location.search)
const assert = require("assert")

let options = {
    valueNames: ['name', 'region', 'date', 'description', 'url-image', 'categories', 'id', 'campaign-url'],
    item: values => {
        return `
        <div class="blog-card">
	<div class="meta">
		<div class="photo" style="background-image: url(${values['url-image']})"></div>
		<ul class="details">
			<li class="date">${values.date}</li>
            <li class="place">${values.region}</li>
            <li class="tags">${values.categories.join(", ")}</li>
		</ul>
	</div>
	<div class="desc">
		<h1>${values.name}</h1>
		<p>${values.description}</p>
		<p class="read-more">
			<a href="${values['campaign-url']}" rel="external" target="_blank">Saiba Mais</a>
		</p>
	</div>
</div>
`         
    },
    i: 20,
}


//Camapnhas
let values = [
    {
        name: 'Deslizamento em Petrópolis',
        date: '15/02/2022',
        id: Math.trunc(Math.random() * 2**32),
        'campaign-url': 'https://www.petropolis.rj.gov.br/pmp/index.php/imprensa/noticias/item/18763-prefeitura-cria-conta-para-receber-doa%C3%A7%C3%B5es-para-v%C3%ADtimas-das-chuvas',
        'url-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/18_02_2022_Sobrevoo_e_reuni%C3%A3o_de_trabalho_sobre_medidas_emergenciais_do_Governo_Federal_para_a_cidade_de_Petr%C3%B3polis_%2851889351218%29.jpg/280px-18_02_2022_Sobrevoo_e_reuni%C3%A3o_de_trabalho_sobre_medidas_emergenciais_do_Governo_Federal_para_a_cidade_de_Petr%C3%B3polis_%2851889351218%29.jpg',
        region: 'Petrópolis - RJ', 
        description: 'As enchentes e deslizamentos de terra em Petrópolis, cidade localizada na Região Serrana no estado do Rio de Janeiro, Brasil, ocorreram no fim da tarde e na noite de 15 de fevereiro de 2022. Foram 775 deslizamentos de terra em toda a cidade, além de diversas ruas alagadas.',
        categories: ['deslizamento', 'inundação']
    },
    {
        name: 'Desabamento de cânion em Capitólio',
        date: '10/01/2022',
        id: Math.trunc(Math.random() * 2**32),
        'campaign-url': 'https://www.cnnbrasil.com.br/nacional/veja-o-que-se-sabe-sobre-o-desabamento-de-rocha-em-capitolio-mg/',
        'url-image': 'https://upload.wikimedia.org/wikipedia/pt/thumb/0/04/Deslizamento_em_Capit%C3%B3lio.jpeg/200px-Deslizamento_em_Capit%C3%B3lio.jpeg',
        region: 'Capitólio - MG', 
        description: 'Na segunda-feira (10), dois dias após o desabamento de um bloco rochoso nos cânions que circundam o lago de Furnas, no município de Capitólio, em Minas Gerais, matando dez pessoas, o governador do estado, Romeu Zema, participou de uma entrevista coletiva em que tentou explicar o que causou a tragédia. “Foi algo inédito, nunca aconteceu anteriormente”, afirmou. “Nos últimos 100 anos, não sabemos de nenhuma ocorrência dessas. Seria [algo] muito difícil de prever.”',
        categories: ['deslizamento']
    },
]

let campaigns = new List('campaign-results', options);

function add(val){
    campaigns.add(val)
    localStorage.setItem("campanhas", JSON.stringify(campaigns.items))
}

campaigns.fuzzySearch(urlSearchParams.get("search"), ['name', 'region', 'date', 'description', 'categories']);

const search = document.querySelector("#header-searchInput");

//Testa a barra de pesquisa existe
assert.ok(search, "Search node não encontrada")


search.value = urlSearchParams.get("search")

search.addEventListener('input', e => {
    campaigns.fuzzySearch(e.target.value, ['name', 'region', 'date', 'description', 'categories']);
})

//Atualiza as campanhas
assert.doesNotThrow(() => add(values), "Impossível atualizar lista")
//Verifica se o localStorange conseguiu guardar as campanhas
assert.doesNotThrow(() => localStorage.getItem("campanhas"), "Impossível resgatar campanhas")



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