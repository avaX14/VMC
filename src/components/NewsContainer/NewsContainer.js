import React from 'react';
import News from './News';
import ScrollAnimation from 'react-animate-on-scroll';
import translate from 'i18n/translate';

const NewsContainer = () => {
  return (
    <ScrollAnimation
      className=" child-55 news-container goals-box"
      animateIn="bounceInRight"
      duration={2}
    >
      <div className="text-box-title">
        <h1>Vesti</h1>
        <hr className="text-box-title-line" />
      </div>
      <News className="mt-5"></News>
      <News></News>
      <News></News>
      <h4 className="text-center mt-3 news-container-see-all">
        Vidi sve vesti
      </h4>
    </ScrollAnimation>
  );
};

export default NewsContainer;
