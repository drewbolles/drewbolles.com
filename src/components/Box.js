import React from 'react';

const Box = ({ children, ...rest }) => {
  return (
    <div className="box" {...rest}>
      {children}
      <style jsx>{`
        .box {
          padding: 8px 0;
          background-color: #fff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
        }
      `}</style>
    </div>
  );
};

export default Box;
