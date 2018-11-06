import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';

import Header from './Header';
import Container from './Container';
import Typography from './Typography';
import Footer from './Footer';

import 'normalize.css/normalize.css';
import './layout.css';

const Template = ({ children, location, title, description, type }) => {
  const descStyles = {
    margin: type === 'blog' ? '12px 0 0' : '12px 0 24px',
    ...(type === 'blog' && { color: '#9e9e9e' }),
  };
  return (
    <div className={classNames('site', { [`site--type-${type}`]: type })}>
      <Header />
      <main className="site-main">
        {title && (
          <header className="page-header" style={{ padding: '48px 0 24px' }}>
            <Container>
              <h1 className="page-title" style={{ margin: 0 }}>
                {title}
              </h1>
              {description && (
                <Typography size="large" style={descStyles}>
                  {description}
                </Typography>
              )}
            </Container>
          </header>
        )}
        <div className="page">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Template;
