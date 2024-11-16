import React from 'react';

function Profile() {
    return (
        <div className="profile-container">
            <h1>User Profile</h1>
            <p>View and update your profile information here.</p>
            <div className="profile-info">
                <label>
                    Name:
                    <input type="text" placeholder="Enter your name" />
                </label>
                <label>
                    Roll No:
                    <input type="text" placeholder="Enter your roll number" />
                </label>
                <button>Update Profile</button>
            </div>
        </div>
    );
}

export default Profile;
