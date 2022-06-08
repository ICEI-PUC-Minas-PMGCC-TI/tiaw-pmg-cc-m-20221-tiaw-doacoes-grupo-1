const BASE_URL = 'http://polen-api.ddns.net/'
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

function _campaignBuilderFromArray(data) {
        
        return data.map(campaign => 
        campaignBuilder(
            campaign.name,
            campaign.region,
            campaign.description,
            campaign.img_src,
            campaign.category,
            campaign.about
        ));
}

export async function listCategories() {

    let resp = await fetch(BASE_URL + "api/v2/cause/categories")
    let result = await resp.json()

    return result.results
}

export async function listCampaignsByCategory(category) {
    let resp = await fetch(BASE_URL + "api/v2/list/" + category)
    let result = await resp.json()

    
    return _campaignBuilderFromArray(result.results)
}

export async function listCampaigns() {
    
    let resp = await fetch(BASE_URL + "api/v2/cause/all")
    let result = await resp.json()
    
    let output = {}
    
    Object.entries(result.results).forEach(value => {
        output[value[0]] = _campaignBuilderFromArray(value[1])
    });

    return output
}