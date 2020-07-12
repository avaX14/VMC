import React from 'react';
import ContactForm from './ContactForm';
import Location from '../../components/Footer/Location';
import translate from 'i18n/translate';
import ScrollAnimation from 'react-animate-on-scroll';

const ContactPage = () => {
  return (
    <ScrollAnimation
      animateIn="bounceInLeft"
      className="contact-container goals-box"
    >
      <div className="text-box-title">
        <h1>{translate('contact')}</h1>
        <hr className="text-box-title-line" />
      </div>
      <Location zoom={14}></Location>
      <ContactForm></ContactForm>
    </ScrollAnimation>
  );
};

export default ContactPage;
