import React from 'react'

import { Button as BootstrapButton } from 'react-bootstrap';

const Button = ({ className, children, onClick, disabled }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <BootstrapButton
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </BootstrapButton>
    )
}

export default Button