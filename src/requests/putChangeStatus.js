const putHairTransplantChangeStatus = async ({ _id, application, survey, photos, payment }) => {
    const body = { _id, application, survey, photos, payment }
    const response = await fetch(`${import.meta.env.VITE_API_URL}/hairtransplant/application/changestatus`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json', },
        body: JSON.stringify(body)
    })
    const responseData = await response.json()
    if(!response.ok) {
        const error = new Error(responseData.errors[0].message || 'Failed to Fetch!')
        throw error
    }
    return responseData
}

export { putHairTransplantChangeStatus }