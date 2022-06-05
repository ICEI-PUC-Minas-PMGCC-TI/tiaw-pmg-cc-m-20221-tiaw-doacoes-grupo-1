require("regenerator-runtime/runtime");

export const CATEGORIES = [
    "meio-ambiente",
    "direitos-humanos",
]

export async function listCategories() {

    let resp = await fetch("http://127.0.0.1:5000/api/v2/cause/categories")
    let result = await resp.json()

    return result
}

export async function listCampaignsByCategory(category) {
    let resp = await fetch("http://127.0.0.1:5000/api/v2/list/" + category)
    let result = await resp.json()

    return result
}

export async function listCampaigns() {
    
    let resp = await fetch("http://127.0.0.1:5000/api/v2/cause/all")
    let result = await resp.json()

    return result
}