import React from "react";
import classNames from "classnames";
import { blue } from "material-ui-colors";

function Text({
  as: Element = "p",
  className,
  size,
  spacing = 1,
  variant,
  ...rest
}) {
  return (
    <>
      <Element
        className={classNames("text", className, {
          [`text--${variant}`]: variant,
          [`text--size-${size}`]: size,
        })}
        {...rest}
      />
      <style jsx>{`
        .text {
          margin-bottom: ${24 * spacing}px;
        }
        .text--size-small {
          font-size: 14px;
        }
        .text--size-large {
          font-size: 18px;
        }
        .text--size-xlarge {
          font-size: 22px;
        }
        .text--size-super {
          font-size: 26px;
        }
        .text--underlined {
          padding-bottom: 3px;
          border-bottom: 3px solid ${blue[500]};
        }
      `}</style>
    </>
  );
}

export default Text;
