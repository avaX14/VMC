import React from 'react';
import Location from './Location';
import Social from './Social';
import Facebook from '../../images/facebook.svg';
import Twitter from '../../images/twitter.svg';
import Linkedin from '../../images/linkedin.svg';
import Youtube from '../../images/youtube.svg';
import translate from 'i18n/translate';

export default function Footer() {
  return (
    <footer className="footer-container pt-4 pb-4">
      <div className="footer-container-box">
        <Location zoom={17} title={true}></Location>
      </div>
      <div className="footer-container-box d-flex justify-content-center">
        <div>
          <h4 className="mb-4 text-uppercase">{translate('contact')}</h4>
          <p className="contact-name">Zoran Pekez</p>
          <p className="contact-name">+ 381 (0)21 844 - 923</p>
          <p className="contact-name">+ 381 (0)63 75-58-305 </p>
          <p className="contact-name">e-mail:zpekez@vmc.rs</p>
        </div>
      </div>
      <div className="footer-container-box d-flex justify-content-center">
        <div className="social-container">
          <Social
            icon={Facebook}
            url="https://www.facebook.com/vmc.klaster"
          ></Social>
          <Social icon={Twitter} url="https://twitter.com/VMCKlaster"></Social>
          <Social icon={Linkedin} url="http://lnkd.in/U2JVdD"></Social>
          <Social
            icon={Youtube}
            url="http://www.youtube.com/user/officevmcrs"
          ></Social>
        </div>
      </div>
    </footer>
  );
}
