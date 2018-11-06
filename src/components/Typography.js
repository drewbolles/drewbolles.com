import React from 'react';
import classNames from 'classnames';

import withTheme from '../utils/withTheme';

const Typography = ({
  children,
  className,
  is: Element,
  size,
  theme,
  variant,
  ...rest
}) => {
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

        h2.typography--large {
          font-size: 30px;
        }

        .typography--variant-caps {
          text-transform: uppercase;
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

Typography.defaultProps = {
  is: 'p',
};

export default withTheme(Typography);
