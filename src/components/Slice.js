import React from 'react';
import classNames from 'classnames';

import Container from './Container';

import './Slice.css';

const Slice = ({ bgColor, center, children, className, variant, ...rest }) => {
  return (
    <div
      className={classNames('slice', className, {
        'slice--center': center,
        [`slice--bg-${bgColor}`]: bgColor,
        [`slice--variant-${variant}`]: variant,
      })}
      {...rest}
    >
      <Container>{children}</Container>
    </div>
  );
};

export default Slice;
