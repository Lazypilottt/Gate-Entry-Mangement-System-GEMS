import React from 'react';


function Logout() {
    return (
        <div className="logout-container">
            <h1>Logout</h1>
            <p>Thank you for using the Gate Entry Management System!</p>
            <button onClick={() => alert('Logged out successfully!')}>
                Logout
            </button>
        </div>
    );
}

export default Logout;
