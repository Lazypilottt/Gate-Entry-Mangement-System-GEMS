// Modal.js
import React from 'react';
import './logout.css'; // Add your modal styling here

function Modal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Are you sure you want to log out?</h2>
        <div className="modal-buttons">
          <button className="modal-button" onClick={onConfirm}>Yes</button>
          <button className="modal-button" onClick={onClose}>No</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
