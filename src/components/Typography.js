import React from 'react';
import classNames from 'classnames';

import useTheme from '../utils/useTheme';

const Typography = ({
  children,
  className,
  is: Element = 'p',
  size,
  variant,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Element
        className={classNames('typography', className, {
          [`typography--${size}`]: size,
          [`typography--variant-${variant}`]: variant,
        })}
        {...rest}
      >
        {children}
      </Element>

      <style jsx>{`
        p.typography--large {
          margin-bottom: 24px;
          font-size: 18px;
        }

        .typography--variant-caps {
          text-transform: uppercase;
        }

        @media (min-width: ${theme.breakpoints.m}px) {
          h2.typography--large {
            font-size: 30px;
          }
        }

        @media (min-width: ${theme.breakpoints.l}px) {
          h2.typography--large {
            font-size: 45px;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Typography;
