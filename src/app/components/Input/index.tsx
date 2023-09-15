import React from 'react'

const Input = ({ type,
    className,
    placeholder,
    name,
    value,
    onChange
}: React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            name={name}
            value={value}
            type={type}
            className={className}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}

export default Input