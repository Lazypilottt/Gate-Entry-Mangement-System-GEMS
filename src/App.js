import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './components/icons/logo.jpeg';
import './App.css';
import Navigation from './components/navigation';
import Home from './components/pages/home';
import EntryExit from './components/pages/entry-exit';
import Profile from './components/pages/profiles';
import Logout from './components/pages/admin-login';







function App() {
    return (
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="./src/components/pages/entry-exit.js" element={<EntryExit />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/gate-entry" element={<GateEntryManagementSystem />} />
        </Routes>
      </Router>
    );
  }

class GateEntryManagementSystem extends React.Component {
  render() {
      return (
        <>
          <div className="container">
              <header className="header">
               <img src={logo} alt="logo" className="logo"/>
                  <h1>Gate Entry Management System - GEMS</h1>
              </header>
              <nav className="navbar">
                  <span>Home Page</span>
                  <span>Profiles</span>
                  <span>Entry/Exit</span>
                  <span>Log Out</span>
              </nav>
              
              <section className="filter-section">
                  <label>
                      Name:
                      <input type="text" />
                  </label>
                  <label>
                      Roll No:
                      <input type="text" />
                  </label>
                  <label>
                      Category:
                      <input type="text" />
                  </label>
                  <label>
                      Date of Arrival:
                      <input type="text" />
                  </label>
              </section>
              
              <table className="table">
                  <thead>
                      <tr>
                          <th>Name</th>
                          <th>Roll No</th>
                          <th>Category</th>
                          <th>Date and Time of Arrival</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Agastya Nath</td>
                          <td>12340140</td>
                          <td>Student</td>
                          <td>12/11/2024, 11:30 AM</td>
                      </tr>
                      {/* Additional rows can be added here */}
                  </tbody>
              </table>
          </div>
          </>
      );
  }
  
}
export default GateEntryManagementSystem;

ReactDOM.render(<GateEntryManagementSystem />, document.getElementById('root'));
