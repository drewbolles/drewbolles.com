import React from "react";
import css from "styled-jsx/css";
import classNames from "classnames";

import { mediaQueries } from "../utils/theme";

const MAX_COLS = 12;

function getWidth(numOfCols) {
  return `${(numOfCols / MAX_COLS) * 100}%`;
}

function getResponsiveStyles(sizes) {
  let cNames = [];
  let styles = [];

  for (let size in sizes) {
    let numOfCols = sizes[size];

    if (numOfCols === 12) continue;

    let currCss = css.resolve`
        @media (min-width: ${mediaQueries[size]}px) {
          .col--${size}-${numOfCols} {
            width: ${getWidth(numOfCols)};
          }
        }
      `;

    cNames.push(currCss.className);
    styles.push(currCss.styles);
  }

  return { cNames, styles };
}

export function Col({ children, sm = 12, m = 12, l = 12, ...rest }) {
  const { cNames, styles } = getResponsiveStyles({ sm, m, l });
  return (
    <>
      <div
        className={classNames("col", cNames, {
          [`col--sm-${sm}`]: sm !== 12,
          [`col--m-${m}`]: m !== 12,
          [`col--l-${l}`]: l !== 12,
        })}
      >
        {children}
      </div>
      <style jsx>{`
        .col {
          width: 100%;
          flex: 0 0 auto;
          padding: 0 12px;
        }
      `}</style>
      {styles.map((style, i) => ({ ...style, key: i }))}
    </>
  );
}

export function Row({ children, ...rest }) {
  return (
    <>
      <div className="row">{children}</div>
      <style jsx>{`
        .row {
          display: flex;
          flex-wrap: wrap;
          margin-right: -12px;
          margin-left: -12px;
        }
      `}</style>
    </>
  );
}
