import React from 'react';

import './DetailsOptions.scss';

import tick from '../../../assets/img/tick.png';

const DetailsOptions = (props) => {
  const { title, children } = props;

  return (
    <div className="comp-details-options">
      <div className="comp-details-options__icon">
        <img src={tick} alt="tick" className="comp-details-options__icon-img" />
      </div>
      <div className="comp-details-options__text">
        <span className="comp-details-options__text-title">
          {title}
        </span>
        <span className="comp-details-options__text-sub">
          {children}
        </span>
      </div>
    </div>
  );
};

export default DetailsOptions;
