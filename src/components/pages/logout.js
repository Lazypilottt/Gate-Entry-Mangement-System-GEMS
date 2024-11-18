// Logout.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal'; // Import the modal component
import './logout.css'; 

function Logout() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(true); // Track if the modal is open

  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode', darkModeToggle.checked);
  });

  // This will be triggered when the user confirms logout
  const handleLogout = () => {
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    navigate('/admin-login'); // Immediately navigate to the admin login page
  };

  const handleConfirmLogout = () => {
    setIsModalOpen(false); // Close the modal
    handleLogout(); // Proceed with logout
  };

  const handleCancelLogout = () => {
    setIsModalOpen(false); // Close the modal
    navigate('/'); // Navigate to the home page if logout is canceled
  };

  return (
    <div className="logout-container">
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCancelLogout} 
        onConfirm={handleConfirmLogout} 
      />
      <div className="message-container">
        <h2 className="logout-message">Logging out...</h2>
        <p className="redirect-message">You will be redirected to the admin login page shortly.</p>
      </div>
    </div>
  );
}

export default Logout;
