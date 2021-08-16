import React from 'react';

import './DetailsSection.scss';

import Container from '../../container/Container';
import DetailsOptions from '../../options/details/DetailsOptions';

const detailsContent = [
  {
    title: 'Comprehensive Insurance',
    content: 'Dynamically repurpose e-business users rather than granular products.',
  },
  {
    title: 'Support is just a call away',
    content: 'Rapidiously customize value-added platforms compliant action items.',
  },
  {
    title: 'Say goodbye to paperwork.',
    content: 'Globally deliver economically sound communities relationships. ',
  },
];

const DetailsSection = () => {
  const renderDetailsOptions = () => detailsContent.map((d) => (
    <DetailsOptions title={d.title} key={d.title}>
      {d.content}
    </DetailsOptions>
  ));

  return (
    <Container>
      <div className="section-splitter-details">
        <div />
        <div className="section-details">
          <span className="section-details__title">
            Monotonectally deploy seamless data and resource maximizing systems.
          </span>
          <span className="section-details__intro">
            Great for individuals and small families up to 4 members.
          </span>
          <span className="section-details__description">
            A strong, up-to-date, employee benefits health insurance
            program is vital for attracting and retaining good employees.
            It takes diligence, creativity and attention to detail to ensure
            you are getting the best “bang for your buck” each and every year.
          </span>
          <div className="section-details__details">
            {renderDetailsOptions()}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DetailsSection;
