import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div>CampusSafe</div>
      <div id="settingsLink">
        <img id="settingsIcon" src="assets/settings.png" alt="settings" />
        <div id="settingsDropdown">
          <Link to="/profile">Profile</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/logout">Logout</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
