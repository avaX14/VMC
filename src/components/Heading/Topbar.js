import React, { useCallback } from 'react';
import logo from '../../images/logo1.svg';
import translate from 'i18n/translate';
import SelectLanguage from 'components/SelectLanguage/SelectLanguage';
import LearningPlatform from 'components/LearningPlatform/LearningPlatform';

export default function Topbar() {
  return (
    <div className="topbar-container">
      <div className="topbar center-container">
        <div className="topbar-logo">
          <img src={logo}></img>
          {/* <h2>{translate('test', { label: <b>dobar</b> })}</h2> */}
        </div>
        <LearningPlatform></LearningPlatform>
        <SelectLanguage></SelectLanguage>
      </div>
    </div>
  );
}
