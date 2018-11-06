import React from 'react';
import classNames from 'classnames';
import { withMedia } from 'react-media-query-hoc';
import PropTypes from 'prop-types';

import withTheme from '../utils/withTheme';

export const Row = ({ children, center }) => {
  return (
    <div className="row">
      {children}
      <style jsx>{`
        .row {
          display: flex;
          flex-wrap: wrap;
          align-items: ${center ? 'center' : 'flex-start'};
          width: 100%;
          margin-right: -12px;
          margin-left: -12px;
        }
      `}</style>
      <style jsx>{`
        .row {
        }
      `}</style>
    </div>
  );
};

const BaseCol = props => {
  const { center, children, m, media, l, sm, theme, ...rest } = props;
  const lastActive = Object.keys(media)
    .filter(key => props[key] && media[key])
    .pop();
  const getWidth = colSize =>
    colSize ? `${(colSize / theme.columns) * 100}%` : '100%';
  return (
    <div className="col" {...rest}>
      {children}
      <style jsx>{`
        .col {
          flex-grow: 0;
          flex-shrink: 0;
          align-self: ${center ? 'center' : 'flex-start'};
          margin-bottom: ${theme.baseSpacingUnit}px;
          padding: 0 ${theme.baseSpacingUnit / 2}px;
        }
      `}</style>
      <style jsx>{`
        .col {
          flex-basis: ${getWidth(props[lastActive])};
          width: ${getWidth(props[lastActive])};
        }
      `}</style>
    </div>
  );
};

BaseCol.propTypes = {
  sm: PropTypes.number,
  m: PropTypes.number,
  l: PropTypes.number,
  xl: PropTypes.number,
};

export const Col = withMedia(withTheme(BaseCol));
