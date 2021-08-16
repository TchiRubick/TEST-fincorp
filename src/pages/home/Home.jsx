import React from 'react';

import './Home.scss';

import CoverSection from '../../components/sections/cover/CoverSection';
import DetailsSection from '../../components/sections/details/DetailsSection';

const Home = () => (
  <div className="page-home">
    <div className="page-home__cover">
      <CoverSection />
    </div>
    <div className="page-home__details">
      <DetailsSection />
    </div>
    Page Home
  </div>
);

export default Home;
