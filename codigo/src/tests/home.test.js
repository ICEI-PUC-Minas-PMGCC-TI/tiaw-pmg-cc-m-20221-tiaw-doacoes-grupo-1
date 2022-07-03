const assert = require('assert');
const mocha = require('mocha');
const { expect } = require('chai');
const { sum } = require('../home/js/script');

mocha.setup({
    reporter: "spec",
    ui: "bdd"
});

describe('soma dois numeros', () => { //à título de exemplo
    it('somar dois numeros', () => {
        const res = sum(2, 2);
        expect(res).to.be.eq(4);
    });

    it('soma um numero', () => {
        const res = sum(2);
        expect(res).to.be.eq(2);
    });

    it('identifica se são numeros?', () => {
        const res = sum("s", "a");
        expect(res).to.be.eq(0);
    });
});

describe('Ao clicar no menu', () => {
    it('O menu aparece?', () => {
        const overlay = document.querySelector('.overlay');
        const superlay = document.querySelector('.superlay');
        const menu = document.querySelector('#menu');
        const visibilidade = menu.getAttribute('aria-expanded');
    
        const classeEsperada = superlay.classList.contains('open');
        if (visibilidade === 'false') {
            expect(classeEsperada).to.be.eq(false);
        } else expect(classeEsperada).to.be.eq(true);
    });
});

describe('Os dados JSON', () => {

    it('São salvos?', () => {
        const data = localStorage.getItem('identificador');
        if(data === null) {
            localStorage.setItem('identificador', JSON.stringify(
                {
                    nome: '',
                    email: '',
                    mensagem: '',
                    data: Math.trunc(Math.random() * 60 + 10)
                }
            ))
        } else {
            const obj = JSON.parse(data);
            const chaves = Object.keys(obj);
            console.log(chaves)
            if(chaves.length >= 4) {
                let res = true;
                for(let i = 0; i < chaves.length && res; i++) {
                    switch(i) {
                        case 0:
                            res = chaves[0] == 'nome';
                            break;
                        case 1:
                            res = chaves[1] == 'email';
                            break;
                        case 2:
                            res = chaves[2] == 'mensagem';
                            break;
                        case 3:
                            res = chaves[3] == 'data';
                            break;
                    }
                }
                expect(res).to.be.eq(true);
            } 
        }
    });

    it('Podem ser lidos?', () => {
        const data = localStorage.getItem('identificador');
        if(data !== null) {
            const obj = JSON.parse(data);
            expect(typeof obj).to.be.eq('object')
        }
    });
});

describe('O formulario', () => {
    it('Esta sendo enviado?', () => {
        const alt = localStorage.getItem('identificador');
        const obj = JSON.parse(alt);
        if(alt.name !== '') expect(alt.name).to.be.string;
    });
});

describe('Barra Política de Privacidade', () => {
    it('Armazenamento', () => {
        const lgButton = document.querySelector('.cookie_ok');

        const lgpdVisible = lgButton.getAttribute("aria-expanded");

        if(lgpdVisible === 'false') {
            expect(localStorage.getItem('cookie')).to.be.eq('true');
        } else if(lgpdVisible === 'true') {
            expect(localStorage.getItem('cookie')).to.be.eq('false');
        }
    })
});

mocha.run();