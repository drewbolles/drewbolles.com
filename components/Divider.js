import React from "react";
import { grey } from "material-ui-colors";

function Divider(props) {
  return (
    <>
      <div className="divider" {...props} />
      <style jsx>{`
        .divider {
          height: 2px;
          margin-bottom: 24px;
          background-color: ${grey[200]};
        }
      `}</style>
    </>
  );
}

export default Divider;
