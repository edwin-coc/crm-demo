import { useState, useEffect } from 'react'
import { getEmails } from '../requests/emails'

export default function useEmails() {

    const [emails, setEmails] = useState([])

    const fetchGetEmails = async () => {
        try {
            const result = await getEmails()
            setEmails(result.data)
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => { fetchGetEmails() }, [])

    return { emails }
}