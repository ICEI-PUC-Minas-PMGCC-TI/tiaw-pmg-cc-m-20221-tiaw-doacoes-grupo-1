require("regenerator-runtime/runtime");


export function campaignBuilder(name, region, description, img_src, category, about) {
    return {
        'name': name,
        'region': region,
        'description': description,
        'img_src': img_src,
        'category': category,
        'about': about
    }
}

export async function listCategories() {

    let resp = await fetch("http://127.0.0.1:5000/api/v2/cause/categories")
    let result = await resp.json()

    return result
}

export async function listCampaignsByCategory(category) {
    let resp = await fetch("http://127.0.0.1:5000/api/v2/list/" + category)
    let result = await resp.json()

    return campaignBuilder(
        result.name,
        result.region,
        result.description,
        region.img_src,
        region.category,
        region.about
    )
}

export async function listCampaigns() {
    
    let resp = await fetch("http://127.0.0.1:5000/api/v2/cause/all")
    let result = await resp.json()

    return campaignBuilder(
        result.name,
        result.region,
        result.description,
        region.img_src,
        region.category,
        region.about
    )
}