import React from 'react';
import classNames from 'classnames';

import './Typography.css';

const Typography = ({
  children,
  className,
  is: Element,
  size,
  variant,
  ...rest
}) => {
  return (
    <Element
      className={classNames('typography', className, {
        [`typography--${size}`]: size,
      })}
      {...rest}
    >
      {children}
    </Element>
  );
};

Typography.defaultProps = {
  is: 'p',
};

export default Typography;
