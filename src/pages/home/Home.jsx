import React from 'react';

import './Home.scss';

import CoverSection from '../../components/sections/cover/CoverSection';

const Home = () => (
  <div className="page-home">
    <div className="page-home__cover">
      <CoverSection />
    </div>
    Page Home
  </div>
);

export default Home;
