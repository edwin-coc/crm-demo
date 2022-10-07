import { useState } from 'react'

import { putHairTransplantChangeStatus } from '../../../../requests/putChangeStatus'

export default function() {

    const [checked, setChecked] = useState(null)

    const submitToogleChecked = async ({ element, _id }) => {
        try {
            const data = {
                _id,
                ...checked,
                [element]: !checked[element]
            }
            await putHairTransplantChangeStatus(data)
        } catch (error) {
            alert(error.message)
        }
        setChecked({
            ...checked,
            [element]: !checked[element]
        })
    }

    return {
        checked,
        setChecked,
        submitToogleChecked
    }
}