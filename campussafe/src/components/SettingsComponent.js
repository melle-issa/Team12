import React from 'react';
import './SettingsComponent.css'; // Make sure to include your CSS file

const SettingsComponent = () => {
  return (
    <div>
      <main>
        <div class="settings-section">
          <h2>Profile Settings</h2>
          <label for="profilePicture">Profile Picture</label>
          <input type="file" id="profilePicture" />

          <label for="name">Name</label>
          <input type="text" id="name" />

          <label for="email">Email</label>
          <input type="email" id="email" />

          <label for="password">Password</label>
          <input type="password" id="password" />

          <button id="saveChangesButton">Save Changes</button>
        </div>

        <div class="settings-section">
          <div class="green-bubble">
            <div class="toggle-content">
              <div class="alert-types">
                <div class="alert-type">
                  <div class="toggle-content">
                    <h2>Notification Preferences</h2>
                    <p>Receive Emergency Alerts</p>
                  </div>
                  <label class="toggle-switch">
                    <input type="checkbox" id="emergencyAlerts" />
                    <span class="slider"></span>
                  </label>
                </div>
                {/* ... (Continue with other alert types) */}
              </div>
              <hr class="divider" />
              <div class="general-alerts">
                <div class="alert-type">
                  <label for="updates">Receive General Notifications</label>
                  <label class="toggle-switch">
                    <input type="checkbox" id="updates" />
                    <span class="slider"></span>
                  </label>
                </div>
                {/* ... (Continue with other general alerts) */}
              </div>
            </div>
          </div>
        </div>

        <div class="settings-section">
          <div class="green-bubble">
            <div class="toggle-content">
              {/* Add your content for the green bubble here */}
            </div>
          </div>
        </div>

        <div class="settings-section">
          <div class="green-bubble">
            <div class="toggle-content">
              {/* Add your content for the green bubble here */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsComponent;
