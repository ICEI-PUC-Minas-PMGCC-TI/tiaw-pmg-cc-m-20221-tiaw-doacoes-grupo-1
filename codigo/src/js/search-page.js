const urlSearchParams = new URLSearchParams(window.location.search)

let options = {
    valueNames: ['name', 'region', 'date', 'description', 'url-image', 'categories', 'id', 'campaign-url'],
    item: values => {
        return `
        <a href="${values['campaign-url']}" rel="external" target="_blank">
            <div class="grid-card">
                <div class="card-img">
                    <img src="${values['url-image']}" alt="${values.name}">
                </div>
                <div class="card-legend">
                    <p>${values.name}</p>
                </div>
            </div>
        </a>
        `                    
    },
    i: 20,
}

let values = [
    {
        name: 'Deslizamento em Petrópolis',
        date: '15/02/2022',
        id: Math.trunc(Math.random() * 2**32),
        'campaign-url': 'https://www.google.com.br/',
        'url-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/18_02_2022_Sobrevoo_e_reuni%C3%A3o_de_trabalho_sobre_medidas_emergenciais_do_Governo_Federal_para_a_cidade_de_Petr%C3%B3polis_%2851889351218%29.jpg/280px-18_02_2022_Sobrevoo_e_reuni%C3%A3o_de_trabalho_sobre_medidas_emergenciais_do_Governo_Federal_para_a_cidade_de_Petr%C3%B3polis_%2851889351218%29.jpg',
        region: 'Petrópolis - RJ', 
        description: 'As enchentes e deslizamentos de terra em Petrópolis, cidade localizada na Região Serrana no estado do Rio de Janeiro, Brasil, ocorreram no fim da tarde e na noite de 15 de fevereiro de 2022. Foram 775 deslizamentos de terra em toda a cidade, além de diversas ruas alagadas.',
        categories: ['deslizamento', 'inundação']
    },
    {
        name: 'abc def',
        date: '15/02/2123',
        id: Math.trunc(Math.random() * 2**32),
        'campaign-url': 'https://www.google.com.br/',
        'url-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/18_02_2022_Sobrevoo_e_reuni%C3%A3o_de_trabalho_sobre_medidas_emergenciais_do_Governo_Federal_para_a_cidade_de_Petr%C3%B3polis_%2851889351218%29.jpg/280px-18_02_2022_Sobrevoo_e_reuni%C3%A3o_de_trabalho_sobre_medidas_emergenciais_do_Governo_Federal_para_a_cidade_de_Petr%C3%B3polis_%2851889351218%29.jpg',
        region: 'Belo Horizonte - MG', 
        description: 'Teste',
        categories: ['deslizamento', 'inundação']
    }
]

let campaigns = new List('campaign-results', options, values);

campaigns.fuzzySearch(urlSearchParams.get("search"), ['name', 'region', 'date', 'description', 'categories']);

const searchM = document.querySelector("#header-searchInput-mobile");
const searchD = document.querySelector("#header-searchInput-desktop");

[searchM, searchD].forEach(s => {

    s.value = urlSearchParams.get("search")

    s.addEventListener('input', e => {
        campaigns.fuzzySearch(e.target.value, ['name', 'region', 'date', 'description', 'categories']);
    })
});