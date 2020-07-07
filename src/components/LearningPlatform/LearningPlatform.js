import React from 'react';
import LearningLogo from '../../images/training.svg';

export const LearningPlatform = () => {
  return (
    <div className="learning-platform">
      <img src={LearningLogo}></img>
      <p className="ml-3">online Platforma za učenje</p>
    </div>
  );
};

export default LearningPlatform;
