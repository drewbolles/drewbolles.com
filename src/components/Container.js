import React from 'react';
import { withMedia } from 'react-media-query-hoc';

const Container = ({ children, gutter, media }) => {
  return (
    <div className="container">
      {children}
      <style jsx>{`
        .container {
          max-width: 1008px;
          margin-right: auto;
          margin-left: auto;
        }
      `}</style>
      <style jsx>{`
        .container {
          padding-right: ${media.m ? '24px' : '16px'};
          padding-left: ${media.m ? '24px' : '16px'};
        }
      `}</style>
    </div>
  );
};

Container.defaultProps = {
  gutter: 16,
};

export default withMedia(Container);
