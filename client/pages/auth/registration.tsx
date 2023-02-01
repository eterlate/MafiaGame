import Input from '@/components/Input'
import React, { useState } from 'react'

const Registration = () => {
    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const formHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const submitHandler = () => {
        console.log(form)
    }

    return (
        <div className='registration_main'>
            <Input label='Введите название аккаунта' name='username' type='text' changeHandler={formHandler}/>
            <Input label='Введите пароль' name='username' type='text' changeHandler={formHandler}/>
            <button onClick={submitHandler}>Подтвердить</button>
        </div>
    )
}

export default Registration