import React from 'react';
import classNames from 'classnames';

import withTheme from '../utils/withTheme';

const Button = ({ children, href, theme, variant, ...rest }) => {
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
      <style jsx>{`
        .button {
          display: inline-flex;
          align-items: center;
          min-width: 88px;
          min-height: 36px;
          padding: 3px ${theme.baseSpacingUnit}px;
          border: 0;
          border-radius: 3px;
          background-color: ${theme.colors.primary};
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-decoration: none;
          text-transform: uppercase;
          transition: 150ms ease-out background-color;
        }

        .button:hover {
          background-color: #43a047;
          text-decoration: none;
        }

        .button:active {
          transform: translateY(2px);
        }

        .button--variant-plain {
          min-width: 0;
          min-height: 0;
          padding: 8px 16px;
          background-color: transparent;
          color: ${theme.colors.primary};
          font-weight: 400;
        }

        .button--variant-plain:hover {
          background-color: #f5f5f5;
        }
      `}</style>
    </El>
  );
};

export default withTheme(Button);
