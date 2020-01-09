import React from "react";
import classNames from "classnames";
import css from "styled-jsx/css";
import Link from "next/link";
import { blue } from "material-ui-colors";

const { className: cName, styles } = css.resolve`
  .btn {
    display: inline-flex;
    align-items: center;
    min-height: 36px;
    padding: 0 16px;
    background-color: ${blue[700]};
    border-radius: 4px;
    color: #fff;
    font-weight: 500;
    transition: 150ms ease background-color;
  }

  .btn:hover {
    background-color: ${blue[500]};
  }
`;

function Button({ className, href, ...rest }) {
  const cNames = classNames("btn", cName, className);
  const isInternalLink = href && href.startsWith("/");
  const button = isInternalLink ? (
    <Link href={href}>
      <a className={cNames} {...rest} />
    </Link>
  ) : (
    <button className={cNames} {...rest} />
  );
  return (
    <>
      {button}
      {styles}
    </>
  );
}

export default Button;
