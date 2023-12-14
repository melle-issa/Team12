import React from 'react';
import map from './assets/location.png';
import calling from './assets/calling.png';
import info from './assets/info.png';

const Footer = () => {
  return (
    <footer>
      <a href="map"><img src={map} alt="map" height ={50} width={50} /></a>
      <a href="contact"><img src={calling} alt="contact" height ={50} width={50} /></a>
      <a href="information"><img src={info} alt="information" height ={50} width={50} /></a>
    </footer>
  );
};

export default Footer;
