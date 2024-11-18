import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Logout({ onLogout }) {
    const navigate = useNavigate();

    useEffect(() => {
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if (confirmLogout) {
            localStorage.removeItem('user'); // Clear user state
            onLogout(); // Update the authentication state
            navigate('/admin-login'); // Redirect to login
        } else {
            navigate('/');
        }
    }, [onLogout, navigate]);

    return null;
}


export default Logout;
