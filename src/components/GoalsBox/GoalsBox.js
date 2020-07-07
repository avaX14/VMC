import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const GoalsBox = ({ title, image, children, className, animation }) => {
  return (
    <ScrollAnimation animateIn={animation} className="goals-box">
      <div className="text-box-title">
        <h1>{title}</h1>
        <hr className="text-box-title-line" />
      </div>
      <div className={`goals-box-content ${className}`}>
        <div className={`mt-4 ${className ? 'ml-4  ' : 'mr-4'}`}>
          <img src={image}></img>
        </div>
        <div className={`goals-box-content-text ${className ? 'mt-5 ' : ''}`}>
          <p>{children}</p>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default GoalsBox;
