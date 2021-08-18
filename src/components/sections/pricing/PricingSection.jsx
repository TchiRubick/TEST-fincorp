import React from 'react';

import './PricingSection.scss';

import CardPrice from '../../card/price/CardPrice';
import Container from '../../container/Container';

const priceBasic = {
  title: 'basic',
  price: 9,
  contents: [
    'Rapidiously strategize value',
    'Progressively visualize leadership',
    'Equity invested supply chains',
  ],
  color: 'green',
};

const pricePremium = {
  title: 'premium',
  price: 49,
  contents: [
    'Rapidiously strategize value',
    'Progressively visualize leadership',
    'Equity invested supply chains',
  ],
  color: 'blue',
};

const pricePro = {
  title: 'professional',
  price: 19,
  contents: [
    'Rapidiously strategize value',
    'Progressively visualize leadership',
    'Equity invested supply chains',
    'Proactively leverage',
  ],
  color: 'orange',
  off: 20,
};

const PricingSection = () => (
  <Container>
    <div className="section-pricing">
      <div className="section-pricing__title">
        <span className="section-pricing__title-main">Honest Pricing</span>
        <span className="section-pricing__title-sub">Simple & honest pricing. No hidden fees.</span>
      </div>
      <div className="section-pricing__block">
        <CardPrice {...{ ...priceBasic }} />
        <CardPrice {...{ ...pricePro }} sticker />
        <CardPrice {...{ ...pricePremium }} />
      </div>
      <div className="section-pricing__footer">
        Footer pricing
      </div>
    </div>
  </Container>
);

export default PricingSection;
