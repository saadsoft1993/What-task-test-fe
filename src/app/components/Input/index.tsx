import React from 'react'

import { FormControl } from 'react-bootstrap';

const Input = ({ type, className, placeholder }: React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <FormControl
            type={type}
            className={className}
            placeholder={placeholder}
        />
    )
}

export default Input