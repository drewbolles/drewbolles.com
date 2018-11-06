import React from 'react';
import { Link } from 'gatsby';

import Container from './Container';

import './Header.css';

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
    </header>
  );
};

export default Header;
