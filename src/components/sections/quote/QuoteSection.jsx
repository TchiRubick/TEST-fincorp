import React from 'react';

import './QuoteSection.scss';

import quoteImg from '../../../assets/img/quote.png';
import Container from '../../container/Container';

const QuoteSection = () => (
  <Container>
    <div className="section-quote">
      <div className="section-quote__text">
        <img src={quoteImg} alt="quote" />
        <span className="section-quote__text-content">
          I need to understand what’s going on – it’s my health and I want to feel secure in it.
          With my previous health insurance, I didn’t know how any of it worked.
        </span>
        <span className="section-quote__text-author">
          Matthew Young
        </span>
        <span className="section-quote__text-author-location">
          Legal Consultant, United States
        </span>
      </div>
    </div>
  </Container>
);

export default QuoteSection;
