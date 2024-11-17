import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './components/icons/logo.jpeg';
import Navigation from './components/navigation';
import Home from './components/pages/home';
import EntryExit from './components/pages/entry-exit';
import Profile from './components/pages/profiles';
import Logout from './components/pages/logout';
import './App.css';
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode', darkModeToggle.checked);
});

function App() {
    return (
        <Router>
            <div className='container'>
                <header className='header'>
                <img src={logo} alt="logo" className="logo"/>
                    <h1>Gate Entry Management System</h1>
                </header>
            </div>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/entry-exit" element={<EntryExit />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </Router>
    );
}
export default App;