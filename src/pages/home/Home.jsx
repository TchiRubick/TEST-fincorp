import React from 'react';

import './Home.scss';

import CoverSection from '../../components/sections/cover/CoverSection';
import DetailsSection from '../../components/sections/details/DetailsSection';
import ChoiceSection from '../../components/sections/choice/ChoiceSection';
import ClaimSection from '../../components/sections/claim/ClaimSection';
import QuoteSection from '../../components/sections/quote/QuoteSection';
import GuaranteeSection from '../../components/sections/guarantee/GuaranteeSection';
import PricingSection from '../../components/sections/pricing/PricingSection';
import FaqSection from '../../components/sections/faq/FaqSection';
import GuaranteeSeconSection from '../../components/sections/guaranteeSecond/GuaranteeSeconSection';
import FooterSection from '../../components/sections/footer/FooterSection';

const Home = () => (
  <div className="page-home">
    <div className="page-home__cover">
      <CoverSection />
    </div>
    <div className="page-home__details">
      <DetailsSection />
    </div>
    <div className="page-choice">
      <ChoiceSection />
    </div>
    <div className="page-claim">
      <ClaimSection />
    </div>
    <div className="page-quote">
      <QuoteSection />
    </div>
    <div className="page-guarantee">
      <GuaranteeSection />
    </div>
    <div className="page-price">
      <PricingSection />
      <FaqSection />
      <GuaranteeSeconSection />
    </div>
    <div className="page-footer">
      <FooterSection />
    </div>
  </div>
);

export default Home;
