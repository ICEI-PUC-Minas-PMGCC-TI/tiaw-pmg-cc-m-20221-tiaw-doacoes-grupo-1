import { List } from "list.js";

let options = {
    valueNames: ['name', 'region', 'date', 'description', 'url-image'],
    item: values => {
        return `<li class="campaign-item">
            <h3>${values.name}</h3>
            <p>${values.description}</p>
            <img src='${values['url-image']}'/>
            <p>${values.region}</p>
            <p>${values.date}</p>
        </li>`
    } 
}

let values = [
    {
        name: 'Deslizamento em Petrópolis',
        date: '15/02/2022',
        'url-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/18_02_2022_Sobrevoo_e_reuni%C3%A3o_de_trabalho_sobre_medidas_emergenciais_do_Governo_Federal_para_a_cidade_de_Petr%C3%B3polis_%2851889351218%29.jpg/280px-18_02_2022_Sobrevoo_e_reuni%C3%A3o_de_trabalho_sobre_medidas_emergenciais_do_Governo_Federal_para_a_cidade_de_Petr%C3%B3polis_%2851889351218%29.jpg',
        region: 'Petrópolis - RJ', 
        description: 'As enchentes e deslizamentos de terra em Petrópolis, cidade localizada na Região Serrana no estado do Rio de Janeiro, Brasil, ocorreram no fim da tarde e na noite de 15 de fevereiro de 2022. Foram 775 deslizamentos de terra em toda a cidade, além de diversas ruas alagadas.'
    }
]

let campaigns = new List("campaign-results", options, values)

document.querySelector("#search-campaign > input").addEventListener('input', e => {
    campaigns.fuzzySearch(e.target.value, ['name', 'region', 'date', 'description']);
})

