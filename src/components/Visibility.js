import React from 'react';

import './Visibility.css';

const Visibility = ({ children }) => {
  return <span className="visually-hidden">{children}</span>;
};

export default Visibility;
