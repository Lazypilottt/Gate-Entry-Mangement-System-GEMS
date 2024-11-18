import React from 'react';
import { BrowserRouter as Router, Routes, Route, UNSAFE_ErrorResponseImpl } from 'react-router-dom';
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
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/student" element={<Student />} />
                <Route path="/faculty" element={<Faculty />} />
                <Route path="/visitor" element={<Visitor />} />
                <Route path="/support" element={<Support />} />
            </Routes>
        </Router>
    );
}
export default App;
