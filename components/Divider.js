import React, { useContext } from "react";
import { grey } from "material-ui-colors";
import classNames from "classnames";
import useMode from "../utils/useMode";

function Divider({ spacing = 1, ...rest }) {
  const { mode } = useMode();
  return (
    <>
      <div
        className={classNames("divider", { [`divider--${mode}`]: mode })}
        {...rest}
      />
      <style jsx>{`
        .divider {
          height: 2px;
          margin-bottom: ${24 * spacing}px;
          background-color: ${grey[200]};
        }
        .divider--dark {
          background-color: ${grey[500]};
        }
      `}</style>
    </>
  );
}

export default Divider;
