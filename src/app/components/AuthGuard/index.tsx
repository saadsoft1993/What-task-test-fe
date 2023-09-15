import React from 'react';
import { useSelector } from 'react-redux';

// components
import { Navigate, useLocation } from 'react-router-dom';

interface AuthGuardProps {
    children: React.ReactNode
}

const AuthGuard = ({ children }: AuthGuardProps) => {
    const accessToken: string = useSelector((state: any) => state.login.accessToken);
    const { pathname } = useLocation()

    if (pathname === '/login' && accessToken) {
        return <Navigate to='/' />;
    }

    if (pathname === '/' && !accessToken) {
        return <Navigate to='/login' />;
    }

    return <>{children}</>;
}

export default AuthGuard