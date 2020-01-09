import React from "react";
import { grey } from "material-ui-colors";

function Divider({ spacing = 1, ...rest }) {
  return (
    <>
      <div className="divider" {...rest} />
      <style jsx>{`
        .divider {
          height: 2px;
          margin-bottom: ${24 * spacing}px;
          background-color: ${grey[200]};
        }
      `}</style>
    </>
  );
}

export default Divider;
