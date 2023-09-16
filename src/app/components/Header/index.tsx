import React from 'react'
import Button from 'app/components/Button'
import { useDispatch } from 'react-redux';
import { logout } from 'app/pages/Login/store/slice'

import './style.scss'

export default function Header() {
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout())
        localStorage.removeItem('accessToken')
    }

    return (
        <div className="header">
            <div className="container py-3 d-flex justify-content-between">
                <h2 className="logo text-center m-0 flex-grow-1">Video App</h2>
                <Button className='btn btn-info text-white' onClick={onLogout}>Logout</Button>
            </div>
        </div>
    );
}
