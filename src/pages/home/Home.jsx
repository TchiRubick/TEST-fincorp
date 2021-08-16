import React from 'react';

import './Home.scss';

import CoverSection from '../../components/sections/cover/CoverSection';
import DetailsSection from '../../components/sections/details/DetailsSection';
import ChoiceSection from '../../components/sections/choice/ChoiceSection';

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
  </div>
);

export default Home;
