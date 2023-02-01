import React from 'react'

interface InputProps {
    label?: string,
    name: string,
    value?: string,
    type: string,
    changeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ label, name, value, type, changeHandler }: InputProps) => {
    return (
        <div>
            {label ?
                <label htmlFor={name}>{label}</label>
                :
                <></>
            }
            <input name={name} value={value} type={type} onChange={changeHandler} />
        </div>
    )
}

export default Input