import React from 'react';

import './GuaranteeSection.scss';

import Container from '../../container/Container';
import BaseButton from '../../buttons/base/BaseButton';

import shield from '../../../assets/img/shield-2.png';

const GuaranteeSection = () => (
  <Container>
    <div className="section-guarantee">
      <div className="section-guarantee__block">
        <img src={shield} alt="shield" />
        <div className="section-guarantee__block-text">
          <span className="section-guarantee__block-text__title">
            100% Satisfaction Guarantee
          </span>
          <span className="section-guarantee__block-text__description">
            We offer no questions asked refund policy for 14 days from the policy date.
          </span>
        </div>
        <div className="section-guarantee__block-text__button">
          <BaseButton color="green">
            Get your free Quote
          </BaseButton>
        </div>
      </div>
    </div>
  </Container>
);

export default GuaranteeSection;
