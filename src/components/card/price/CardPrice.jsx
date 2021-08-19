import React from 'react';

import './CardPrice.scss';

import BaseButton from '../../buttons/base/BaseButton';
import tick from '../../../assets/img/tick.png';

const CardPrice = (props) => {
  const {
    color,
    title,
    price,
    contents,
    off,
    sticker,
  } = props;

  const renderContent = () => contents.map((c) => (
    <div className="content-price-card" key={c}>
      <img src={tick} alt="tick" />
      {c}
    </div>
  ));

  const renderOff = () => {
    if (!off) {
      return null;
    }

    return (
      <span className={`content-price-badge  __${color || ''}`}>
        {`save ${off} %`}
      </span>
    );
  };

  const renderSticker = () => {
    if (!sticker) {
      return null;
    }

    return <div className={`content-price-sticker  __${color || ''}`} />;
  };

  return (
    <div className={`comp-card-price __${color || ''}`}>
      {renderSticker()}
      <span className={`comp-card-price__title __${color || ''}`}>
        {title}
      </span>
      {renderOff()}
      <div className={`comp-card-price__price __${color || ''}`}>
        <span className="comp-card-price__price-unit">$</span>
        <span className="comp-card-price__price-value">{price}</span>
      </div>
      <div className="comp-card-price__content">
        {renderContent()}
      </div>
      <div className="comp-card-price__button">
        <BaseButton color={color}>
          Choose plan
        </BaseButton>
      </div>
    </div>
  );
};

export default CardPrice;
