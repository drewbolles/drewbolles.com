import React from 'react';
import { Link } from 'gatsby';

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

const Header = () => {
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

        .site-title {
          font-size: 24px;
          line-height: 56px;
        }

        .site-nav {
          margin-left: auto;
        }

        .site-nav-link {
          display: inline-flex;
          align-items: center;
          height: 56px;
          padding: 0 16px;
        }
      `}</style>
    </header>
  );
};

export default Header;
