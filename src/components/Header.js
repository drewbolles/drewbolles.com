import React from 'react';
import { Link } from 'gatsby';

import Container from './Container';
import useTheme from '../utils/useTheme';

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
  const theme = useTheme();
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
          padding: 0 8px;
          border-radius: 2px;
          transition: 250ms ease-out background-color;
        }

        :global(.site-nav-link:hover) {
          background-color: rgba(66, 66, 66, 0.8);
        }

        @media (min-width: ${theme.breakpoints.m}px) {
          :global(.site-nav-link) {
            padding: 0 16px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
