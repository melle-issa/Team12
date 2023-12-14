import React from 'react';
import { Link } from 'react-router-dom';
import './ContactComponent.css';

const ContactComponent = () => {
  return (
    <div>
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
    </div>
  );
};

export default ContactComponent;
