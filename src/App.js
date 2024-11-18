import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import logo from './components/icons/logo.jpeg';
import Navigation from './components/navigation';
import Home from './components/pages/home';
import EntryExit from './components/pages/entry-exit';
import Profile from './components/pages/profiles';
import Logout from './components/pages/logout';
import AdminLogin from './components/pages/admin-login';
import Student from './components/pages/student';
import Faculty from './components/pages/faculty';
import Visitor from './components/pages/visitors';
import Support from './components/pages/support';
import './App.css';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check if the user is authenticated on initial load
        const user = localStorage.getItem('user');
        setIsAuthenticated(!!user);
    }, []);

    const handleLogin = () => {
        localStorage.setItem('user', 'authenticated'); // Save authentication state
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('user'); // Remove authentication state
        setIsAuthenticated(false);
    };

    return (
        <Router>
            <div className="app-content-container">
                {isAuthenticated && (
                    <header className="header">
                        <div className="header-container">
                            <img src={logo} alt="logo" className="logo" />
                            <h1>Gate Entry Management System</h1>
                        </div>
                    </header>
                )}
                {isAuthenticated && <Navigation />}
                <div className="app-content-container">
                    <Routes>
                        {!isAuthenticated && (
                            <Route path="*" element={<Navigate to="/admin-login" />} />
                        )}
                        <Route
                            path="/admin-login"
                            element={<AdminLogin onLogin={handleLogin} />}
                        />
                        {isAuthenticated && (
                            <>
                                <Route path="/" element={<Home />} />
                                <Route path="/entry-exit" element={<EntryExit />} />
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
                                <Route path="/student" element={<Student />} />
                                <Route path="/faculty" element={<Faculty />} />
                                <Route path="/visitor" element={<Visitor />} />
                                <Route path="/support" element={<Support />} />
                            </>
                        )}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;

