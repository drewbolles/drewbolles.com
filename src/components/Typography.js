import React from 'react';
import classNames from 'classnames';
import { withMedia } from 'react-media-query-hoc';

const Typography = ({
  children,
  className,
  is: Element,
  media,
  size,
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
          font-size: ${media.l ? '45px' : '30px'};
        }

        .typography--variant-caps {
          text-transform: uppercase;
        }
      `}</style>
    </React.Fragment>
  );
};

Typography.defaultProps = {
  is: 'p',
};

export default withMedia(Typography);
