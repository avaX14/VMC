import React, { useCallback } from 'react';
import logo from '../../images/logo1.svg';
import translate from 'i18n/translate';
import SelectLanguage from 'components/SelectLanguage/SelectLanguage';

export default function Topbar() {
  return (
    <div className="topbar ">
      <div className="center-container position-relative">
        <div className="topbar-logo">
          <img src={logo}></img>
          {/* <h2>{translate('test', { label: <b>dobar</b> })}</h2> */}
        </div>
        <SelectLanguage></SelectLanguage>
      </div>
    </div>
  );
}
