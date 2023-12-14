import React from 'react';
import { Link } from 'react-router-dom';
import './ContactComponent.css';

const ContactComponent = () => {
  return (
    <div>
      <header>
        <div>CampusSafe</div>
        <a href="#" id="settingsLink">
          <img id="settingsIcon" src="assets/settings.png" alt="settings" />
          <div id="settingsDropdown">
            <a href="settings.html">Settings</a>
            <a href="profile.html">Profile</a>
            <a href="index.html">Logout</a>
          </div>
        </a>
      </header>

      <main>
        <br />
        <br />
        <h1>
          IF YOU ARE IN IMMEDIATE DANGER, DIAL{' '}
          <a href="tel:911" style={{ color: 'black' }}>
            911
          </a>
          .
        </h1>
        <h2>UCR Police NON-EMERGENCY Line:</h2>
        <div className="bubble-container">
          <div className="bubble">
            <a href="tel:951-827-5222">951-827-5222</a>
          </div>
        </div>
        <h2>UCR 24/7 Crisis Counselor</h2>
        <div className="bubble-container">
          <div className="bubble">
            <a href="tel:951-827-8255">951-827-8255</a>
          </div>
        </div>
        <h2>24/7 Nurse Line</h2>
        <div className="bubble-container">
          <div className="bubble">
            <a href="tel:877-351-3457">877-351-3457</a>
          </div>
        </div>
        <h2>UCR Basic Needs</h2>
        <div className="bubble-container">
          <div className="bubble">
            <a href="tel:951-827-3663">951-827-3663</a>
          </div>
        </div>
      </main>

      <footer>
        <a href="map.html">
          <img id="icon1" src="assets/location.png" alt="map" />
        </a>
        <a href="contact.html">
          <img id="icon2" src="assets/calling.png" alt="calling" />
        </a>
        <a href="information.html">
          <img id="icon3" src="assets/info.png" alt="information" />
        </a>
      </footer>
    </div>
  );
};

export default ContactComponent;
