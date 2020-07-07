import React from 'react';
import Phone from '../../images/phone1.svg';
import Pin from '../../images/PIN.svg';
import translate from 'i18n/translate';

const Company = ({ name, address, phone }) => {
  return (
    <div className="company-box text-left">
      <h5 className="address-name ">{name}</h5>
      <div className="d-flex">
        <img src={Phone}></img>
        <p className="ml-2 small-text"> {address}</p>
      </div>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <img src={Pin}></img>

          <p className="ml-2 small-text">{phone}</p>
        </div>
        <div>
          <a className="read-more">{translate('readMore')}...</a>
        </div>
      </div>
    </div>
  );
};

export default Company;
