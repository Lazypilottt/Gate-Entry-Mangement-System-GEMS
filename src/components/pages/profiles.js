import React, { useState } from 'react';
import axios from 'axios';

function Profile() {
  const [searchQuery, setSearchQuery] = useState('');
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      // Assuming the backend has an API to search profiles by name or ID
      const response = await axios.get(`http://localhost:5000/get-profile/${searchQuery}`);
      setProfileData(response.data);
      setError(null); // Reset error state
    } catch (err) {
      setError('Profile not found.');
      setProfileData(null); // Reset profile data
    }
  };

  return (
    <div className="profile-container">
      <h1>Search Profile</h1>
      <form onSubmit={handleSearch}>
        <label>
          Search by Name or ID:
          <input
            type="text"
            value={searchQuery}
            onChange={handleChange}
            placeholder="Enter Name or ID"
            required
          />
        </label>
        <button type="submit">Search</button>
      </form>

      {error && <p className="error">{error}</p>}

      {profileData && (
        <div className="profile-details">
          <h2>Profile Details</h2>
          <p><strong>Name:</strong> {profileData.name}</p>
          <p><strong>ID:</strong> {profileData.ID}</p>
          <p><strong>Category:</strong> {profileData.category}</p>
          <p><strong>Date of Arrival:</strong> {profileData.date_time_of_arrival}</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
