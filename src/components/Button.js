import React from 'react';
import classNames from 'classnames';

import './Button.css';

const Button = ({ children, href, variant, ...rest }) => {
  const El = href ? 'a' : 'button';
  return (
    <El
      className={classNames('button', {
        [`button--variant-${variant}`]: variant,
      })}
      href={href}
      {...rest}
    >
      {children}
    </El>
  );
};

export default Button;
