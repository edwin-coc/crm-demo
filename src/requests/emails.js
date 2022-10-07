const getEmails = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/emails`, {
        headers: { 'Content-type': 'application/json' },
    })
    const responseData = await response.json()
    if(!response.ok) {
        const error = new Error(responseData.errors[0].message || 'Failed to Fetch!')
        throw error
    }
    return responseData
}

const postHairTransplantEmailingStatus = async ({ myStates, _idTemplate }) => {
    const body = {
        application: myStates.includes('application'),
        survey: myStates.includes('survey'),
        photos: myStates.includes('photos'),
        payment: myStates.includes('payment'),
        _idTemplate
    }
    const response = await fetch(`${import.meta.env.VITE_API_URL}/hairtransplant/emailing/status`, {
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

const postHairTransplantEmailingTags = async ({ tags, _idTemplate }) => {
    const body = { tags, _idTemplate }
    const response = await fetch(`${import.meta.env.VITE_API_URL}/hairtransplant/emailing/tags`, {
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

const postHairTransplantEmailingStatusTags = async ({ application, survey, photos, payment, tags, _idTemplate }) => {
    const body = { application, survey, photos, payment, tags, _idTemplate }
    const response = await fetch(`${import.meta.env.VITE_API_URL}/hairtransplant/emailing/status`, {
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
    getEmails,
    postHairTransplantEmailingStatus,
    postHairTransplantEmailingTags,
    postHairTransplantEmailingStatusTags
}