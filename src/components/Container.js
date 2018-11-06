import React from 'react';

const Container = ({ children, gutter }) => {
  return (
    <div className="container">
      {children}
      <style jsx>{`
        .container {
          max-width: 1008px;
          margin-right: auto;
          margin-left: auto;
          padding-right: 16px;
          padding-left: 16px;
        }

        @media (min-width: 768px) {
          .container {
            padding-right: 24px;
            padding-left: 24px;
          }
        }
      `}</style>
    </div>
  );
};

Container.defaultProps = {
  gutter: 16,
};

export default Container;
