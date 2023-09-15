import React from 'react'

import { Button } from 'react-bootstrap';

import './style.scss'

export default function Header() {
    return (
        <div className="header">
            <div className="container py-3 d-flex justify-content-between">
                <h2 className="logo text-center m-0 flex-grow-1">Video App</h2>
                <Button className='btn btn-info text-white' >Logout</Button>
            </div>
        </div>
    );
}
