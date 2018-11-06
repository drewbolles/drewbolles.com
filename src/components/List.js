import React from 'react';
import classNames from 'classnames';

import './List.css';

export const ListItem = ({ children, icon }) => {
  return (
    <li className={classNames('list-item', { 'list-item--has-icon': icon })}>
      {icon && <span className="list-item-icon">{icon}</span>}
      {children}
      <style jsx>{`
        .list-item {
          padding: 20px 16px;
          vertical-align: top;
        }

        .list-item-icon {
          position: absolute;
          top: 20px;
          left: 16px;
        }

        .list-item--has-icon {
          position: relative;
          padding-left: 72px;
        }
      `}</style>
    </li>
  );
};

const List = ({ children, divider, ...rest }) => {
  return (
    <ul
      className={classNames('list', { 'list--has-divider': divider })}
      {...rest}
    >
      {children}
      <style jsx>{`
        .list {
          margin: 0;
          margin-bottom: 12px;
          padding: 8px 0;
          background: #fff;
          border-radius: 2px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
          list-style: none;
        }

        .list--has-divider :global(.list-item + .list-item) {
          border-top: 1px solid #e0e0e0;
        }
      `}</style>
    </ul>
  );
};

export default List;
