import React from "react";
import classNames from "classnames";
import { grey } from "material-ui-colors";

function Box({ children, className, ...rest }) {
  return (
    <>
      <div className={classNames("box", className)} {...rest}>
        {children}
      </div>
      <style jsx>{`
        .box {
          background: ${grey[100]};
          padding: 16px;
          border-radius: 8px;
          box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.15);
        }
        .box:not(:last-child) {
          margin-bottom: 24px;
        }
      `}</style>
    </>
  );
}

export default Box;
