import React from 'react';
import classNames from 'classnames';

import './Grid.css';

export const Row = ({ children }) => {
  return <div className="row">{children}</div>;
};

export const Col = ({ children, sm, m, l }) => {
  return (
    <div
      className={classNames('col', {
        [`col--sm-${sm}`]: sm,
        [`col--m-${m}`]: m,
        [`col--m-${l}`]: l,
      })}
    >
      {children}
    </div>
  );
};
