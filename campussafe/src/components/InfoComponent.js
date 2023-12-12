import React from 'react';
import { Link } from 'react-router-dom';
import './InfoComponent.css';

const InfoComponent = () => {
  return (
    <div>
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
    </div>
  );
};

export default InfoComponent;
