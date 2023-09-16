import React from 'react'
import Button from 'app/components/Button'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'app/pages/Login/store/slice'
import { RootState } from 'store'

import './style.scss'

export default function Header() {
    const dispatch = useDispatch()
    const email: string = useSelector((state: RootState) => state.login.email)

    const onLogout = () => {
        dispatch(logout())
        localStorage.removeItem('accessToken')
    }

    return (
        <div className="header">
            <div className="container py-3 d-flex justify-content-between">
                <h2 className="logo text-center m-0 flex-grow-1">Video App</h2>
                <Button className='btn btn-info text-white' onClick={onLogout}>Logout</Button>
                <span className="ms-2 mb-0">{email}</span>
            </div>
        </div>
    );
}
