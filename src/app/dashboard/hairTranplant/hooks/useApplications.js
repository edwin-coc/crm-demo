import { useEffect, useState } from 'react'
import { getHairTransplantApplications, getHairTransplantApplication } from '../../../../requests/aplications'

export default function useApplications() {

    const [applications, setApplications] = useState([])
    const [store, setStore] = useState([])
    const [MyAlert, setMyAlert] = useState(false)
    const [spinner, setSpinner] = useState(false)
    const [application, setApplication] = useState({})

    const fetchGetApplications = async () => {
        try {
            setSpinner(true)
            const result = await getHairTransplantApplications()
            setApplications(result.data)
            setStore(result.data)
            setSpinner(false)
        } catch (error) {
            setSpinner(false)
            setMyAlert(error.message)
        }
    }
    const filter = data => {
        const dataLower = data.toLowerCase()
        if(dataLower === '') return setApplications(store)
        setApplications(store)
        const filterApplications = applications.filter(element => {
            return (
                element.firstName.toLowerCase().includes(dataLower) ||
                element.lastName.toLowerCase().includes(dataLower) ||
                element.email.toLowerCase().includes(dataLower) ||
                element.phoneNumber.toLowerCase().includes(dataLower) ||
                element._id.toLowerCase().includes(dataLower)
            )
        })
        setApplications(filterApplications)
    }
    const fetchGetApplication = async _id => {
        try {
            const result = await getHairTransplantApplication({ _id })
            setApplication(result.data)
        } catch (error) {
            setMyAlert(error.message)
        }
    }

    useEffect(() => { fetchGetApplications() }, [])

    return {
        fetchGetApplications,
        applications,
        MyAlert,
        spinner,
        filter,
        application,
        fetchGetApplication
    }
}