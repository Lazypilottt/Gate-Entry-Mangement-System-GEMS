import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        
        if (confirmLogout) {
            localStorage.removeItem('user');
            sessionStorage.removeItem('user');
            setTimeout(() => {
                navigate('/admin-login');
            }, 5000);
        } else {
            alert("Logout cancelled.");
            navigate('/');
        }
    };

    useEffect(() => {
        handleLogout();
    }, []);

    const containerStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: '30px',
        height: '100vh',
        backgroundColor: '#f4f4f9',
        animation: 'fadeIn 1.5s ease-in-out',
        position: 'relative',
    };

    const messageContainerStyles = {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        transform: 'translateY(20px)',
        animation: 'slideUp 1s ease-out',
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
    };

    const logoutMessageStyles = {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '15px',
        opacity: 0,
        animation: 'fadeInUp 1.5s ease-in-out forwards',
    };

    const redirectMessageStyles = {
        fontSize: '1.1rem',
        color: '#666',
        opacity: 0,
        animation: 'fadeInUp 1.5s ease-in-out 0.5s forwards',
    };

    return (
        <div style={containerStyles}>
            <div style={messageContainerStyles}>
                <h2 style={logoutMessageStyles}>Logging out...</h2>
                <p style={redirectMessageStyles}>You will be redirected to the admin login page shortly.</p>
            </div>
        </div>
    );
}

export default Logout;
