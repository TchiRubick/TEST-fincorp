import React from 'react';

import './ChoiceSection.scss';

import Container from '../../container/Container';
import CardOptions from '../../options/card/CardOptions';

import home from '../../../assets/img/home-insurance-1.png';
import car from '../../../assets/img/car-insurance-1.png';
import life from '../../../assets/img/life-insurance-1.png';
import business from '../../../assets/img/business-insurance-1.png';
import travel from '../../../assets/img/travel-insurance-1.png';
import other from '../../../assets/img/other-insurance-1.png';

const choiceList = [
  {
    image: home,
    title: 'Home Insurance',
    content: 'Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.',
    color: '#aff3ff',
  },
  {
    image: car,
    title: 'Car Insurance',
    content: 'Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.',
    color: '#fbd1ff',
  },
  {
    image: life,
    title: 'Life Insurance',
    content: 'Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.',
    color: '#daffd3',
  },
  {
    image: business,
    title: 'Business Insurance',
    content: 'Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.',
    color: '#fff5b3',
  },
  {
    image: travel,
    title: 'Travel Insurance',
    content: 'Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.',
    color: '#ffdad2',
  },
  {
    image: other,
    title: 'Other Insurance',
    content: 'Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.',
    color: '#d2d3ff',
  },
];

const ChoiceSection = () => {
  const renderListCard = () => choiceList.map((c) => (
    <CardOptions title={c.title} image={c.image} color={c.color} key={c.title}>
      {c.content}
    </CardOptions>
  ));

  return (
    <Container>
      <div className="section-choice">
        <div className="section-choice__title">
          <span className="section-choice__main">
            Choose your Insurance
          </span>
          <span className="section-choice__sub">
            Keep Your Life Smile, Safe, and Wealthy
          </span>
        </div>
        <div className="section-choice__content">
          {renderListCard()}
        </div>
      </div>
    </Container>
  );
};

export default ChoiceSection;
