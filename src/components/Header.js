import React from 'react';
import { Link } from 'gatsby';
import { withMedia } from 'react-media-query-hoc';

import Container from './Container';

const links = [
  {
    href: '/about',
    title: 'About',
  },
  {
    href: '/portfolio',
    title: 'Portfolio',
  },
  {
    href: '/blog',
    title: 'Blog',
  },
];

const Header = ({ media }) => {
  return (
    <header className="site-header">
      <Container>
        <div className="site-header-inner">
          <Link className="site-title" to="/">
            Drew Bolles
          </Link>

          <nav className="site-nav">
            {links.map(link => (
              <Link className="site-nav-link" to={link.href} key={link.href}>
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
      <style jsx>{`
        .site-header {
          padding: 4px 0;
          background-color: #222;
          color: #fff;
        }

        .site-header-inner {
          display: flex;
          align-items: center;
        }

        .site-header :global(a) {
          color: inherit;
        }

        :global(.site-title) {
          font-size: 24px;
          line-height: 56px;
        }

        .site-nav {
          margin-left: auto;
        }

        :global(.site-nav-link) {
          display: inline-flex;
          align-items: center;
          height: 56px;
        }
      `}</style>
      <style jsx>{`
        :global(.site-nav-link) {
          padding: ${media.m ? '0 16px' : '0 8px'};
        }
      `}</style>
    </header>
  );
};

export default withMedia(Header);
