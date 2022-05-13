const searchPage = require("../js/search-page")
import 'mocha'

const assert = require('assert')


mocha.setup({
    reporter: 'spec',
    ui: 'bdd'
})

describe("Listagem", () => {
    describe("localstorange", () => {
        it("#get", () => {
            assert.doesNotThrow(() => {JSON.stringify(localStorage.getItem("campanhas"))})
        })
    })
    describe("Campanhas", () => {
        it("#add", () => {
            assert.doesNotThrow(() => searchPage.add(
                {
                name: 'Test',
                date: '31/02/2023',
                id: Math.trunc(Math.random() * 2**32),
                'campaign-url': 'https://www.google.com',
                'url-image': 'https://source.unsplash.com/random/300*300',
                region: 'Brazil', 
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                categories: 'Lorem ipsum dolor sit'.split()
            }))
        })
        it("#filter", () => {
            assert.equal(searchPage.campaigns.fuzzySearch("hello"), undefined)
            assert.equal(searchPage.campaigns.fuzzySearch(""), undefined)
        })
    })
})

mocha.run()