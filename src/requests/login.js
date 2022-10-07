const login = async ({ username, password }) => {
    const body = { username, password }
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
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

export { login }