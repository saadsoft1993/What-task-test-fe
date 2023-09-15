import React from 'react'

import { Button as BootstrapButton } from 'react-bootstrap';

const Button = ({ className, children, onClick }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <BootstrapButton
            className={className}
            onClick={onClick}
        >
            {children}
        </BootstrapButton>
    )
}

export default Button