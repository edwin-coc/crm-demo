import { useEffect, useState } from 'react'

import { getTags } from '../requests/tags'

export default function useTags () {

    const [tags, setTags] = useState([])

    const fetchGetTags = async () => {
        try {
            const result = await getTags()
            setTags(result.data)
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => { fetchGetTags() }, [])

    return { tags }
}