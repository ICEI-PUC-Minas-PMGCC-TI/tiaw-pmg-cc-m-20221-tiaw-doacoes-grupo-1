import "../js/search-page"

const mocha = require('mocha')
const assert = require('assert')


if (window.location.pathname == "/codigo/src/pages/search-page.html") {
    mocha.setup({
        ui: 'bbd',
        reporter: 'spec'
    })
    describe("Listagem", () => {
        describe("localstorange", () => {
            it("#get", () => {
                assert.doesNotThrow(() => {JSON.stringify(localStorage.getItem("z"))})
            })
        })
    })

    mocha.run()
}