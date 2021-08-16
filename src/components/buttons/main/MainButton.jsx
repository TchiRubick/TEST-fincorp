import React from 'react';

import './MainButton.scss';

const MainButton = (props) => {
  const { onClick, children } = props;

  return (
    <button type="button" onClick={onClick} className="comp-button-main">
      {children}
    </button>
  );
};

export default MainButton;
