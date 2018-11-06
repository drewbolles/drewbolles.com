import React from 'react';

import './Container.css';

const Container = ({ children, gutter }) => {
  return <div className="container">{children}</div>;
};

Container.defaultProps = {
  gutter: 16,
};

export default Container;
