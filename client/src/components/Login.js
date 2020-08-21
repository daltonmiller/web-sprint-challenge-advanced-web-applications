import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Login = (props) => {
    const history = useHistory()
    const [application, setApplication] = useState([])
    const [formState, setFormState] = useState ({
        username: '',
        password: '',
    })

    const inputChange = e => {
        e.persist()
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    const formSubmit = (e) => {
        e.preventDefault()
        console.log('formsubmitted')
        axiosWithAuth()
        .post('/login', formState)
        .then(res => {
            console.log(res.data)
            window.localStorage.setItem('token', res.data.payload)
            history.push('/protected')
        })
    }
    return (
        <div>
            <form onSubmit={formSubmit}>
                username:
                <input
                type="text"
                name="username"
                id="username"
                placeholder="username"
                value={formState.username}
                onChange={inputChange}
                />
                password:
                <input
                type="text"
                name="password"
                id="password"
                placeholder="password"
                value={formState.password}
                onChange={inputChange}
                />
                <button onClick={formSubmit}>submit</button>
            </form>
        </div>

    )
}

export default Login