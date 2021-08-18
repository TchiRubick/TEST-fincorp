import React from 'react';

import './GuaranteeSeconSection.scss';

import Container from '../../container/Container';
import BaseButton from '../../buttons/base/BaseButton';

import shield from '../../../assets/img/shield-1.png';

const GuaranteeSeconSection = () => (
  <Container>
    <div className="section-guarantee-second">
      <div className="section-guarantee-second__block">
        <img src={shield} alt="shield" />
        <div className="section-guarantee-second__block-text">
          <span className="section-guarantee-second__block-text__title">
            Insurance made easy
          </span>
          <span className="section-guarantee-second__block-text__description">
            At fincorp, we are commited to provide top-notch services to our customers.
          </span>
        </div>
        <div className="section-guarantee-second__block-text__button">
          <BaseButton color="green">
            Get your free Quote
          </BaseButton>
        </div>
      </div>
    </div>
  </Container>
);

export default GuaranteeSeconSection;
