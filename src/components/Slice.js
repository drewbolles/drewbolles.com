import React from 'react';
import classNames from 'classnames';
import Container from './Container';

import withTheme from '../utils/withTheme';

const Slice = ({
  bgColor,
  center,
  children,
  className,
  theme,
  variant,
  ...rest
}) => {
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
      <style jsx>{`
        .slice {
          padding: ${theme.baseSpacingUnit}px 0;
        }

        .slice--center {
          text-align: center;
        }

        .slice--bg-green {
          background-color: ${theme.colors.primary};
        }

        .slice--bg-green :global(a) {
          color: #fff;
        }

        .slice--bg-grey {
          background-color: #f5f5f5;
          border: 1px solid #e0e0e0;
          border-width: 1px 0;
        }

        @media (min-width: ${theme.breakpoints.m}px) {
          .slice {
            padding: ${theme.baseSpacingUnit * 2}px 0;
          }

          .slice--variant-callout {
            padding: ${theme.baseSpacingUnit * 3}px 0;
          }
        }
      `}</style>
    </div>
  );
};

export default withTheme(Slice);
