import React from 'react';
import Salesman from '../../images/salesman.svg';

export const SideSlider = () => {
  return (
    <a target="_blank" href="http://app.vmc.rs/public/login">
      <div className="side-slider">
        <img src={Salesman}></img>
        <p className="ml-3">Zahtevi i Ponude</p>
      </div>
    </a>
  );
};

export default SideSlider;
