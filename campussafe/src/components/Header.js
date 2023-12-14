import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import settings from './assets/settings.png';
import './Header.css';

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div>CampusSafe</div>
      <div id="settingsLink" onClick={toggleDropdown}>
        <img id="settingsIcon" src={settings} alt="settings" />
        {isDropdownVisible && (
          <div id="settingsDropdown" ref={dropdownRef}>
            <Link to="/profile">Profile</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/event-form">Event Form</Link> {/* Add this line */}
            <Link to="/">Logout</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;