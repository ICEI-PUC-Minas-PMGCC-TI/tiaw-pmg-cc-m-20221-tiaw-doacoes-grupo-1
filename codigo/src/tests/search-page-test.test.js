const searchPage = require("../js/search-page")
import 'mocha'
import { campaignBuilder } from '../js/polen-api'

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
                campaignBuilder(
                'Test',
                'Brazil', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                'https://source.unsplash.com/random/300*300',
                'Lorem',
                'https://www.google.com',
            )))
        })
        it("#filter", () => {
            assert.equal(searchPage.campaigns.fuzzySearch("hello"), undefined)
            assert.equal(searchPage.campaigns.fuzzySearch(""), undefined)
        })
    })
})

mocha.run()