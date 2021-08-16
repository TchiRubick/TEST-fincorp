import React from 'react';

import './CardOptions.scss';

const CardOptions = (props) => {
  const {
    title,
    children,
    image,
    color,
  } = props;

  return (
    <div className="comp-card-options">
      <div className="comp-card-options__image">
        <img src={image} alt={`${title}_image`} style={{ backgroundColor: color, width: '6rem', height: '6rem' }} />
      </div>
      <div className="comp-card-options__title">
        <span className="comp-card-options__title-text">{title}</span>
      </div>
      <div className="comp-card-options__text">
        {children}
      </div>
    </div>
  );
};

export default CardOptions;
