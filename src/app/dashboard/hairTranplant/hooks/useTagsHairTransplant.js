import { useState } from 'react'

import { addHairTransplantTags, removeHairTransplantTags } from '../../../../requests/tags'

export default function() {

    const [myTags, setMyTags] = useState([])
    const [tagsList, setTagsList] = useState([])

    const handleChangeTags = event => {
        const { target: { value } } = event
        setMyTags(typeof value === 'string' ? value.split(',') : value)
    }

    const submitAddTags = async ({ _id }) => {
        try {
            await addHairTransplantTags({ _id, tags: myTags })
            setTagsList([...tagsList, ...myTags])
            setMyTags([])
        } catch (error) {
            alert(error.message)
        }
    }

    const deleteTag = async ({ _id, tag }) => {
        try {
            await removeHairTransplantTags({ _id, tag })
            const newTags = tagsList.filter(element => element !== tag)
            setTagsList(newTags)
        } catch (error) {
            alert(error.message)
        }
    }

    return {
        myTags,
        handleChangeTags,
        submitAddTags,
        tagsList,
        setTagsList,
        deleteTag
    }
}