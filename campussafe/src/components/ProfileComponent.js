import React from 'react';
import './ProfileComponent.css';

const ProfileComponent = () => {
  return (
    <div>
      <h1>User Profile</h1>
      <div id="profile-container">
        <div className="user-info">
          <label htmlFor="username">Username:</label>
          <span id="username">JohnDoe</span>
        </div>

        <div className="user-info">
          <label htmlFor="email">Email:</label>
          <span id="email">jdoe001@ucr.edu</span>
        </div>

        {/* Add more user information fields as needed */}

        <button onClick={() => alert("Logout logic goes here")}>Logout</button>
      </div>
    </div>
  );
};

export default ProfileComponent;
