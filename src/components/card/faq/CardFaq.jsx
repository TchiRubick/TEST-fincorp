import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './CardFaq.scss';

const CardFaq = (props) => {
  const { contents } = props;

  const renderContents = () => contents.map((c) => (
    <Accordion key={c.title}>
      <AccordionSummary expandIcon={<ExpandMoreIcon color="blue" />}>
        <span className="comp-faq-card__title">{c.title}</span>
      </AccordionSummary>
      <AccordionDetails>
        <span className="comp-faq-card__text">{c.children}</span>
      </AccordionDetails>
    </Accordion>
  ));

  return (
    <div className="comp-faq-card">
      {renderContents()}
    </div>
  );
};

export default CardFaq;
