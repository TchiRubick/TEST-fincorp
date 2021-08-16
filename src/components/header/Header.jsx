import React from 'react';

import './Header.scss';

import fincorpLogo from '../../assets/img/logo.png';

const Header = () => (
  <div className="comp-header">
    <img src={fincorpLogo} alt="logo" />
    <span>For You & Family</span>
    <span>For Business</span>
  </div>
);

export default Header;
