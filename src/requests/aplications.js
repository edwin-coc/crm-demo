const getHairTransplantApplications = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/hairtransplant/applications`, {
        headers: { 'Content-type': 'application/json' }
    })
    const responseData = await response.json()
    if(!response.ok) {
        const error = new Error(responseData.errors[0].message || 'Failed to Fetch!')
        throw error
    }
    return responseData
}

const getHairTransplantApplication = async ({ _id }) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/hairtransplant/application/${_id}`, {
        headers: { 'Content-type': 'application/json' }
    })
    const responseData = await response.json()
    if(!response.ok) {
        const error = new Error(responseData.errors[0].message || 'Failed to Fetch!')
        throw error
    }
    return responseData
}

export {
    getHairTransplantApplications,
    getHairTransplantApplication
}