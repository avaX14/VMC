import React from 'react';
import vmcLogo from '../../images/logo1.svg';
import { Link } from 'react-router-dom';
import translate from '../../i18n/translate';

const News = () => {
  return (
    <div className="news d-flex justify-between">
      <img className="news-image" src={vmcLogo}></img>
      <div className="ml-5">
        <h5>Menadžer VMC-a u emisiji “Dobro veče Vojvodino”</h5>
        <span className="news-date">22. Maj</span>
        <p className="news-text">Na RTS-u sutra gostuje menadzer VMC-a u....</p>
        <Link to="/" className="text-box-read-more">
          {translate('readMore')}...
        </Link>
      </div>
    </div>
  );
};

export default News;
