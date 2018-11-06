import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import classNames from 'classnames';

import Header from './Header';
import Container from './Container';
import Typography from './Typography';
import Footer from './Footer';

import withTheme from '../utils/withTheme';

import 'normalize.css/normalize.css';

const Template = ({ children, location, title, theme, description, type }) => {
  const descStyles = {
    margin: type === 'blog' ? '12px 0 0' : '12px 0 24px',
    ...(type === 'blog' && { color: '#757575' }),
  };
  return (
    <div className={classNames('site', { [`site--type-${type}`]: type })}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title={title}
        meta={[{ name: 'description', content: description }]}
      />
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
      <style jsx global>{`
        *,
        ::before,
        ::after {
          box-sizing: inherit;
        }

        html {
          font-size: 100%;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.6;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        ol,
        ul,
        blockquote {
          margin-top: 0;
          margin-bottom: ${theme.baseSpacingUnit / 2}px;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: 'Roboto Slab', Georgia, serif;
          line-height: 1.2;
        }

        a {
          color: ${theme.colors.primary};
          text-decoration: none;
        }

        strong {
          font-weight: 700;
        }

        img {
          max-width: 100%;
          vertical-align: middle;
        }

        .image-source {
          font-size: 12px;
          color: #9e9e9e;
        }
      `}</style>
    </div>
  );
};

export default withTheme(Template);
