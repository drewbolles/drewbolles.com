import React from "react";
import { grey } from "material-ui-colors";
import useMode from "../utils/useMode";

export function List({ children, ...rest }) {
  const { mode } = useMode();
  return (
    <ul className="list" {...rest}>
      {children}
      <style jsx>{`
        .list {
          list-style: none;
          padding: 0;
          border-radius: 4px;
          overflow: hidden;
        }
      `}</style>
    </ul>
  );
}

export function ListItem({ children, ...rest }) {
  const { mode } = useMode();
  return (
    <li className="list-item" {...rest}>
      {children}
      <style jsx>{`
        .list-item {
          padding: 16px 0;
        }
        .list-item:not(:last-child) {
          border-bottom: 1px solid ${mode === "light" ? grey[100] : grey[500]};
        }
      `}</style>
    </li>
  );
}
