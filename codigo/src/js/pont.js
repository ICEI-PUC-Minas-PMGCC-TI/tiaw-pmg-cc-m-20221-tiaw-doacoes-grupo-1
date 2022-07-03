const links = document.querySelectorAll('a[data-pts="on"]');
const divPts = document.querySelector('#pontuacao');
const paragPts = document.querySelector('#pontuacao .pont-number');

let jsonPontos = {};
const jsonStandard = {
    pontos: 0
};


const existe = localStorage.getItem('pontos');
if(existe) {
    jsonPontos = JSON.parse(existe);
    divVisible();
} else {
    localStorage.setItem('pontos', JSON.stringify(jsonStandard));
    jsonPontos = jsonStandard;
}
atualizaDivPontos(jsonPontos.pontos);


links.forEach(element => {
    element.onclick = () => {
        adicionaPonto();
        divVisible();
    };
});


function adicionaPonto() {
    const pontuacaoAtual = parseInt(jsonPontos.pontos);
    jsonPontos.pontos = pontuacaoAtual + 1;
    localStorage.setItem('pontos', JSON.stringify(jsonPontos));
    atualizaDivPontos(jsonPontos.pontos);
}

function atualizaDivPontos(pontos) {
    paragPts.textContent = pontos;
}

function divVisible() {
    if(parseInt(jsonPontos.pontos) !== 0) divPts.classList.remove('pontos-disabled');
}
