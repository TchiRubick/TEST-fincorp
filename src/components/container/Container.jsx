import React from 'react';

import './Container.scss';

const Container = (props) => {
  const { children } = props;

  return (
    <div className="comp-container">
      {children}
    </div>
  );
};

export default Container;
