import React from 'react';

import './FaqSection.scss';

import CardFaq from '../../card/faq/CardFaq';
import Container from '../../container/Container';

const faqData = [
  {
    title: 'What are the documents required for claiming?',
    children: 'A pre-authorization form is required in case of cashless claims which are to be submitted to the TPA. Other documents might also be required and you should have the knowledge of the required documents.',
  },
  {
    title: 'Which are the network hospitals in your vicinity?',
    children: 'A pre-authorization form is required in case of cashless claims which are to be submitted to the TPA. Other documents might also be required and you should have the knowledge of the required documents.',
  },
  {
    title: 'Will I get covered for my pre-existing illnesses?',
    children: 'A pre-authorization form is required in case of cashless claims which are to be submitted to the TPA. Other documents might also be required and you should have the knowledge of the required documents.',
  },
  {
    title: 'Is maternity covered in health insurance policies?',
    children: 'A pre-authorization form is required in case of cashless claims which are to be submitted to the TPA. Other documents might also be required and you should have the knowledge of the required documents.',
  },
];

const FaqSection = () => (
  <Container>
    <div className="section-faq">
      <CardFaq contents={faqData} />
    </div>
  </Container>
);

export default FaqSection;
