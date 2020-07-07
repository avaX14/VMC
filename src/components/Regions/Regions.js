import React from 'react';
import Serbia from '../../images/Map_of_Serbia.svg';
import SerbiaMap from './MapOfSerbia';
import ScrollAnimation from 'react-animate-on-scroll';
import Companies from './Companies';
import translate from 'i18n/translate';

export default function Regions() {
  return (
    <div className="regions-container">
      <div className="regions-container-content text-center pt-4">
        <h1>{translate('companiesByRegion')}</h1>
        <hr className="region-container-content-line" />
        <div className="map-container">
          <SerbiaMap></SerbiaMap>
          <Companies></Companies>
        </div>
      </div>
      {/* <img src={Serbia} alt="React Logo" /> */}
    </div>
  );
}
