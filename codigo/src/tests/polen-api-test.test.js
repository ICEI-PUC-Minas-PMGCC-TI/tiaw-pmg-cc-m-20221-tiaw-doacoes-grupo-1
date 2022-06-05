import "mocha"
import { listCampaigns, listCampaignsByCategory, listCategories } from "../js/polen-api"
const assert = require('assert')


mocha.setup({
    reporter: 'spec',
    ui: 'bdd'
})



describe("Carregar categorias", () => {
    it("#listar tudo", () => {
        assert.doesNotThrow(async () => {
            let data = await listCampaigns("meio-ambiente")
            

            console.log(data)
        
        })
    })
    it("#list categorias", () => {
        assert.doesNotThrow(async () => {
            let data = await listCategories()

            console.log(data)
        })
    })
    it('#campanhas por categoria', () => {
        assert.doesNotThrow(async () => {
            let data = await listCampaignsByCategory('meio-ambiente')

            console.log(data)
        })
    })
})


mocha.run()