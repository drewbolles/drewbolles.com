import React from 'react';
import classNames from 'classnames';

export const ListItem = ({ children, divider, icon }) => {
  return (
    <li
      className={classNames('list-item', {
        'list-item--has-icon': icon,
        'list-item--has-divider': divider,
      })}
    >
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

        .list-item--has-divider + .list-item--has-divider {
          border-top: 1px solid #e0e0e0;
        }
      `}</style>
    </li>
  );
};

const List = ({ children, divider, ...rest }) => {
  return (
    <ul className="list" {...rest}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { divider }),
      )}
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
      `}</style>
    </ul>
  );
};

export default List;
