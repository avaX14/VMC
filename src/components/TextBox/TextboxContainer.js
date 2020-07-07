import React from 'react';
import Textbox from './Textbox';
import ScrollAnimation from 'react-animate-on-scroll';
import translate from '../../i18n/translate';

export default function TextboxContainer() {
  return (
    <div className="box-container">
      <ScrollAnimation
        className="center-container"
        animateIn="bounceInLeft"
        duration={2}
      >
        <Textbox title={translate('aboutUs')} path="/about">
          {translate('aboutUsHome', { tag: <br /> })}
        </Textbox>

        <Textbox className="news" title={translate('ourMission')} path="/about">
          {translate('ourMissionHome')}
        </Textbox>
      </ScrollAnimation>
    </div>
  );
}
