const searchByStatusHairTransplant = async ({ myStates }) => {
    const body = {
        application: myStates.includes('application'),
        survey: myStates.includes('survey'),
        photos: myStates.includes('photos'),
        payment: myStates.includes('payment')
    }
    const response = await fetch(`${import.meta.env.VITE_API_URL}/hairtransplant/search/status`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(body)
    })
    const responseData = await response.json()
    if(!response.ok) {
        const error = new Error(responseData.errors[0].message || 'Failed to Fetch!')
        throw error
    }
    return responseData
}

const searchByTagsHairTransplant = async ({ myTags }) => {
    const body = { tags: myTags }
    const response = await fetch(`${import.meta.env.VITE_API_URL}/hairtransplant/search/tags`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(body)
    })
    const responseData = await response.json()
    if(!response.ok) {
        const error = new Error(responseData.errors[0].message || 'Failed to Fetch!')
        throw error
    }
    return responseData
}

const searchByStatusTagsHairTransplant = async ({ myStates, myTags }) => {
    const body = {
        application: myStates.includes('application'),
        survey: myStates.includes('survey'),
        photos: myStates.includes('photos'),
        payment: myStates.includes('payment'),
        tags: myTags
    }
    const response = await fetch(`${import.meta.env.VITE_API_URL}/hairtransplant/search/statustags`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(body)
    })
    const responseData = await response.json()
    if(!response.ok) {
        const error = new Error(responseData.errors[0].message || 'Failed to Fetch!')
        throw error
    }
    return responseData
}

export {
    searchByStatusHairTransplant,
    searchByTagsHairTransplant,
    searchByStatusTagsHairTransplant
}