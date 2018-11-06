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

const List = ({ children, ...rest }) => {
  return (
    <ul className="list" {...rest}>
      {children}
    </ul>
  );
};

export default List;
