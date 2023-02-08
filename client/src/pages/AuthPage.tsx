import React, { useState } from 'react'
import { useHttp } from '../hooks/Http.hook'
import { useAppDispatch, useAppSelector } from '../hooks/Redux.hook'
import { login } from '../store/reducers/authSlice'

const AuthPage = () => {
    const { request, loading } = useHttp()

    const dispatch = useAppDispatch()
    const { token, username } = useAppSelector(state => state.auth)

    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const enter = () => {
        request('http://localhost:4000/auth/login', 'POST', form)
            .then(json => {
                dispatch(login({ token: json.token, username: form.username }))

            })

    }

    return (
        <div className='auth_container'>
            
            <label htmlFor="username">Имя пользователя</label>
            <input type="text" name="username" id="username" onChange={changeHandler} />

            <label htmlFor="password">Пароль</label>
            <input type="password" name="password" id="password" onChange={changeHandler} />

            <button onClick={enter}>Войти</button>
            {loading
                ?
                <h1>Loading...</h1>
                :
                <>
                    <h1>{token}</h1>
                    <h1>{username}</h1>
                </>
            }

        </div>
    )
}

export default AuthPage