import React from 'react';

import './CoverSection.scss';

import Header from '../../header/Header';
import MainButton from '../../buttons/main/MainButton';
import Container from '../../container/Container';

const CoverSection = () => (
  <Container>
    <div className="section-cover">
      <div className="section-cover__header">
        <Header />
      </div>
      <div className="section-cover__greeting">
        <span className="section-cover__greeting-subtitle">
          hello, we are fincorp
        </span>
        <span className="section-cover__greeting-title">
          Insurance <br />
          made easy.
        </span>
        <div>
          <MainButton>
            Get your free Quote
          </MainButton>
        </div>
      </div>
      <div className="section-cover__title">
        <span className="section-cover__title__main">
          A new take on insurance
        </span>
        <span className="section-cover__title__sub">
          Great for individuals and business
        </span>
      </div>
    </div>
  </Container>
);

export default CoverSection;
