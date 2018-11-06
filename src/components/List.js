import React from 'react';
import classNames from 'classnames';

import './List.css';

export const ListItem = ({ children, icon }) => {
  return (
    <li className={classNames('list-item', { 'list-item--has-icon': icon })}>
      {icon && <span className="list-item-icon">{icon}</span>}
      {children}
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
    </ul>
  );
};

export default List;
