import React from 'react';
import { Link } from 'react-router-dom';
import './MapComponent.css';

const MapComponent = () => {
  return (
    <div>
      <header>
        <div>CampusSafe</div>
        {/* Add your settings dropdown */}
      </header>
      <main>
        <img id="ucr_map" src="/assets/ucr_map.png" alt="ucr_map_img" />
      </main>
      <footer>
        <Link to="/map"><img id="icon1" src="assets/location.png" alt="map" /></Link>
        <Link to="/contact"><img id="icon2" src="assets/calling.png" alt="calling" /></Link>
        <Link to="/information"><img id="icon3" src="assets/info.png" alt="information" /></Link>
      </footer>
    </div>
  );
};

export default MapComponent;
