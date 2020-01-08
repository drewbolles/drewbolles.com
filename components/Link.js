import React, { Children } from "react";
import NextLink from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";

function Link({ activeClassName = "active", children, ...rest }) {
  const { pathname } = useRouter();
  const child = Children.only(children);
  return (
    <NextLink {...rest}>
      {React.cloneElement(child, {
        className: classNames(child.props.className, {
          [activeClassName]: pathname.indexOf(rest.href) !== -1,
        }),
      })}
    </NextLink>
  );
}

export default Link;
