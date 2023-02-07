import React, { useState } from 'react'

const AuthPage = () => {

    const [form, setForm] = useState({
        login: '',
        password: ''
    })

    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const login = () => {
        console.log(form)
    }

    return (
        <div className='auth_container'>
            <label htmlFor="login"></label>
            <input type="text" name="login" id="login" onChange={changeHandler}/>

            <label htmlFor="password"></label>
            <input type="text" name="password" id="password" onChange={changeHandler}/>

            <button onClick={login}>Войти</button>
        </div>
    )
}

export default AuthPage