import React from 'react';
import classNames from 'classnames';

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
        [`typography--variant-${variant}`]: variant,
      })}
      {...rest}
    >
      {children}
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

        @media (min-width: 992px) {
          h2.typography--large {
            font-size: 45px;
          }
        }
      `}</style>
    </Element>
  );
};

Typography.defaultProps = {
  is: 'p',
};

export default Typography;
