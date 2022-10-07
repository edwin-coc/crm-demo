const getTags = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/tags`, {
        headers: { 'Content-type': 'application/json' }
    })
    const responseData = await response.json()
    if(!response.ok) {
        const error = new Error(responseData.errors[0].message || 'Failed to Fetch!')
        throw error
    }
    return responseData
}

const addHairTransplantTags = async ({ _id, tags }) => {
    const body = { _id, tags }
    const response = await fetch(`${import.meta.env.VITE_API_URL}/hairtransplant/tags/add`, {
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

const removeHairTransplantTags = async ({ _id, tag }) => {
    const body = { _id, tag }
    const response = await fetch(`${import.meta.env.VITE_API_URL}/hairtransplant/tags/remove`, {
        method: 'DELETE',
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

export { getTags, addHairTransplantTags, removeHairTransplantTags }