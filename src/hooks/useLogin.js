import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useFormik } from 'formik'
import validator from 'validator'

import { login } from '../requests/login'

export default function useLogin() {

    const [spinner, setSpinner] = useState(false)
    const [MyAlert, setMyAlert] = useState(false)

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validate: values => {
            const errors = {}
            if(!validator.isLength(values.username, { min: 5, max: 30 })) {
                errors.username = 'The username must contain between 5 to 30 characters!'
            }
            if(!validator.isLength(values.password, { min: 8, max: 30 })) {
                errors.password = 'The password must contain between 8 to 30 characters!'
            }
            return errors
        },
        onSubmit: async ({ username, password }) => {
            try {
                setSpinner(true)
                const result = await login({ username, password })
                localStorage.setItem('access_token', result.token)
                localStorage.setItem('access_role', result.data.role)
                localStorage.setItem('access_username', result.data.username)
                setSpinner(false)
                navigate('/dashboard', { replace: true })
            } catch (error) {
                setSpinner(false)
                setMyAlert(error.message)
            }
        }
    })

    return {
        formik,
        spinner,
        MyAlert
    }
}