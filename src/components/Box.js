import React from 'react';

import './Box.css';

const Box = ({ children, ...rest }) => {
  return (
    <div className="box" {...rest}>
      {children}
    </div>
  );
};

export default Box;
