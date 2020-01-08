import React from "react";
import { grey } from "material-ui-colors";

export function List({ children, ...rest }) {
  return (
    <ul className="list" {...rest}>
      {children}
      <style jsx>{`
        .list {
          list-style: none;
          padding: 0;
          background-color: #fff;
          border-radius: 4px;
          overflow: hidden;
        }
      `}</style>
    </ul>
  );
}

export function ListItem({ children, ...rest }) {
  return (
    <li className="list-item" {...rest}>
      {children}
      <style jsx>{`
        .list-item {
          padding: 16px 0;
        }
        .list-item:not(:last-child) {
          border-bottom: 1px solid ${grey[100]};
        }
      `}</style>
    </li>
  );
}
