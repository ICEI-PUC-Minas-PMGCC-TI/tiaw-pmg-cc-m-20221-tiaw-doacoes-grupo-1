const urlSearchParams = new URLSearchParams(window.location.search)

let options = {
    valueNames: ['name', 'region', 'date', 'description', 'url-image', 'categories', 'id', 'campaign-url'],
    item: values => {
        return `
        <div class="card ">
            <div class="card-body">
                <div class="d-flex flex-column flex-md-row gap-2">
                <img class="card-img m-auto" src="${values['url-image']}" alt="${values.name}">
                <div>
                    <h5 class="card-title">${values.name}</h5>
                    <p class="card-text">${values.description}</p>
                    <a href="${values['campaign-url']}" rel="external" target="_blank" class="btn btn-primary">Ir para página</a>
                </div>
                </div>
            </div>
            <div class="card-footer d-flex justify-content-between">
                <p>${values.region}</p>
                <p>${values.date}</p>
            </div>
        </div>
        `                   
    },
    i: 20,
}

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
        name: 'Deslizamento em Petrópolis',
        date: '15/02/2022',
        id: Math.trunc(Math.random() * 2**32),
        'campaign-url': 'https://www.petropolis.rj.gov.br/pmp/index.php/imprensa/noticias/item/18763-prefeitura-cria-conta-para-receber-doa%C3%A7%C3%B5es-para-v%C3%ADtimas-das-chuvas',
        'url-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/18_02_2022_Sobrevoo_e_reuni%C3%A3o_de_trabalho_sobre_medidas_emergenciais_do_Governo_Federal_para_a_cidade_de_Petr%C3%B3polis_%2851889351218%29.jpg/280px-18_02_2022_Sobrevoo_e_reuni%C3%A3o_de_trabalho_sobre_medidas_emergenciais_do_Governo_Federal_para_a_cidade_de_Petr%C3%B3polis_%2851889351218%29.jpg',
        region: 'Petrópolis - RJ', 
        description: 'As enchentes e deslizamentos de terra em Petrópolis, cidade localizada na Região Serrana no estado do Rio de Janeiro, Brasil, ocorreram no fim da tarde e na noite de 15 de fevereiro de 2022. Foram 775 deslizamentos de terra em toda a cidade, além de diversas ruas alagadas.',
        categories: ['deslizamento', 'inundação']
    },

]

let campaigns = new List('campaign-results', options, values);

campaigns.fuzzySearch(urlSearchParams.get("search"), ['name', 'region', 'date', 'description', 'categories']);

const search = document.querySelector("#header-searchInput");

search.value = urlSearchParams.get("search")

search.addEventListener('input', e => {
    campaigns.fuzzySearch(e.target.value, ['name', 'region', 'date', 'description', 'categories']);
})