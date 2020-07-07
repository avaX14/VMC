import React from 'react';

const Social = ({ icon, url }) => {
  return (
    <a href={url} target="_blank">
      <img src={icon}></img>
    </a>
  );
};

export default Social;
