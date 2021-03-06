import React from 'react';

const Visibility = ({ children }) => {
  return (
    <span className="visually-hidden">
      {children}
      <style jsx>{`
        .visually-hidden {
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          position: absolute !important;
          overflow: hidden !important;
          border: 0 !important;
          clip: rect(0 0 0 0) !important;
        }
      `}</style>
    </span>
  );
};

export default Visibility;
