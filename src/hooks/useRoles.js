import { useEffect, useState } from 'react'

export default function useRoles() {

    const [role, setRole] = useState('')

    const getRole = () => {
        const myRole = localStorage.getItem('access_role')
        setRole(myRole)
    }

    useEffect(() => { getRole() }, [])

    return { role }
}