import React from 'react';
import { Link } from 'react-router-dom';
import './InfoComponent.css';

const InfoComponent = () => {
  return (
    <div>
      <header>
        <div>CampusSafe</div>
        {/* Add your settings dropdown */}
      </header>
      <main>
        <div className="bubble-container">
          <div className="bubble">
            <a
              href="https://wrc.ucr.edu/?_gl=1*14jl2lt*_ga*MjA0OTEwMDAxMy4xNjk2NzA2ODQz*_ga_S8BZQKWST2*MTcwMjA4Njc4My4xOS4xLjE3MDIwODY5NjcuMC4wLjA.*_ga_Z1RGSBHBF7*MTcwMjA4Njc3OC4xOS4xLjE3MDIwODY5NjcuMC4wLjA."
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>UCR WRC</span>
            </a>
          </div>

          {/* Add more bubble items as needed */}
          <div className="bubble">
            <a
              href="insert link here"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Insert Link Title Here</span>
            </a>
          </div>
        </div>
      </main>
      <footer>
        <Link to="/map"><img id="icon1" src="assets/location.png" alt="map" /></Link>
        <Link to="/contact"><img id="icon2" src="assets/calling.png" alt="calling" /></Link>
        <Link to="/information"><img id="icon3" src="assets/info.png" alt="information" /></Link>
      </footer>
    </div>
  );
};

export default InfoComponent;
