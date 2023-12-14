import React from 'react';
import map from './assets/ucr_map.png';
import './MapComponent.css';

const MapComponent = () => {
  return (
    <div>
      <main>
        <img id="ucr_map" src={map} alt="ucr_map_img" />
      </main>
    </div>
  );
};

export default MapComponent;
