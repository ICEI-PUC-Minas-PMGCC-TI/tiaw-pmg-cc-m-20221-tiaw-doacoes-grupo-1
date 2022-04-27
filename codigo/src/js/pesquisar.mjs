let options = {
    valueNames: ['name', 'region', 'date'],
    item: values => {
        return `<li>
            <h3>${values.name}</h3>
            <p>${values.region}</p>
            <p>${values.date}</p>
        </li>`
    } 
}

let values = [
 {name: 'Deslizamento em Petrópolis', date: '15/02/2022', region: 'Petropolis - RJ'}
]

let campaigns = new List("campaign-results", options, values)

document.querySelector("#search-campaign > input").addEventListener('input', e => {
    campaigns.fuzzySearch(e.target.value);
})

