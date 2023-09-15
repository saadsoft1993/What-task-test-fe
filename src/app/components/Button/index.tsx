import React from 'react'

import { Button as BootstrapButton } from 'react-bootstrap';

const Button = ({ className, children }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <BootstrapButton
            className={className}
        >
            {children}
        </BootstrapButton>
    )
}

export default Button