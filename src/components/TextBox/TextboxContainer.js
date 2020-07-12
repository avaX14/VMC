import React from 'react';
import Textbox from './Textbox';
import ScrollAnimation from 'react-animate-on-scroll';
import translate from '../../i18n/translate';

export default function TextboxContainer() {
  return (
    <ScrollAnimation
      className=" child-35"
      animateIn="bounceInLeft"
      duration={2}
    >
      <Textbox title={translate('aboutUs')} path="/about">
        {translate('aboutUsHome', { tag: <br /> })}
      </Textbox>
    </ScrollAnimation>
  );
}
