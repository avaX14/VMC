import React from 'react';
import { Link } from 'react-router-dom';
import translate from '../../i18n/translate';

const Textbox = ({ title, path, children, className }) => {
  return (
    <div className={`text-box ${className}`}>
      <div className="text-box-title">
        <h2>{title}</h2>
        <hr className="text-box-title-line" />
      </div>
      <p className="text-box-description">{children}</p>
      <Link to={path} className="text-box-read-more">
        {translate('readMore')}...
      </Link>
    </div>
  );
};

export default Textbox;
