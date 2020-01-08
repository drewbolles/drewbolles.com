import React from "react";
import Meta from "../components/Meta";
import { mediaQueries } from "../utils/theme";
import { grey } from "material-ui-colors";
import Logo from "../components/Logo";
import Link from "../components/Link";
import { FaTwitter, FaLinkedin, FaGithub, FaRss } from "react-icons/fa";

const SIDEBAR_WIDTH = 300;
const FOOTER_HEIGHT = 80;

function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="site">
        <aside className="site-branding">
          <Link href="/">
            <a className="site-title">
              <span className="site-title-img">
                <Logo width={28} />
              </span>
              <span className="site-title-content">Drew Bolles</span>
            </a>
          </Link>
          <nav className="site-nav">
            <Link href="/work">
              <a className="site-nav__link">Work</a>
            </Link>
            <Link href="/talks">
              <a className="site-nav__link">Talks</a>
            </Link>
            <Link href="/blog">
              <a className="site-nav__link">Blog</a>
            </Link>
            <Link href="/about">
              <a className="site-nav__link">About</a>
            </Link>
          </nav>
        </aside>
        <main className="site-content">{children}</main>
        <footer className="site-footer">
          <ul className="social-media">
            <li className="social-media-item">
              <a href="https://twitter.com/bollskis" target="_blank">
                <FaTwitter />
              </a>
            </li>
            <li className="social-media-item">
              <a
                href="https://www.linkedin.com/in/drew-bolles/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="social-media-item">
              <a href="https://github.com/drewbolles" target="_blank">
                <FaGithub />
              </a>
            </li>
            <li className="social-media-item">
              <a href="/feed">
                <FaRss />
              </a>
            </li>
          </ul>
          <p>
            &copy; Copyright {new Date().getFullYear()}. All Rights Reserved
          </p>
        </footer>
        <style jsx>{`
          a {
            color: inherit;
            text-decoration: none;
          }
          p {
            margin: 0;
          }
          .site {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          .site-branding {
            display: flex;
            flex-direction: column;
            padding: 24px;
            background-color: #111;
            color: rgba(255, 255, 255, 0.8);
          }
          .site-title {
            display: flex;
            align-items: center;
            margin-bottom: 48px;
          }
          .site-title-img {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 8px;
            width: 50px;
            height: 50px;
            background: currentColor;
            border-radius: 50%;
            margin-right: 10px;
          }
          .site-title:hover {
            color: #fff;
          }
          .site-title-content {
            display: block;
            display: flex;
            flex-direction: column;
            font-size: 30px;
            font-weight: 500;
            letter-spacing: 0.1em;
            line-height: 1.2;
          }
          .small {
            font-size: 18px;
            color: rgba(255, 255, 255, 0.85);
            letter-spacing: 0.08em;
          }
          .site-nav {
            display: flex;
          }
          .site-nav__link {
            padding: 4px 0;
            font-size: 22px;
            color: rgba(255, 255, 255, 0.8);
            transition: 150ms ease-in-out color;
          }
          .site-nav__link:hover {
            color: #fff;
          }
          .site-nav__link:not(:last-child) {
            margin-right: 16px;
          }
          .site-content {
            width: 100%;
            max-width: 1200px;
            margin-right: auto;
            margin-left: auto;
            padding: 24px;
          }
          .site-footer {
            padding: 24px;
            background-color: ${grey[200]};
            font-size: 12px;
            text-align: center;
          }
          .social-media {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 8px;
            padding: 0;
            list-style: none;
          }
          .social-media-item {
            margin: 0 8px;
          }
          @media (min-width: ${mediaQueries.m}px) {
            .site {
              padding-left: ${SIDEBAR_WIDTH}px;
            }
            .site-branding {
              position: fixed;
              display: flex;
              flex-direction: column;
              top: 0;
              left: 0;
              bottom: 0;
              width: ${SIDEBAR_WIDTH}px;
              padding: 24px;
              padding-bottom: ${24 + FOOTER_HEIGHT}px;
              background-color: #111;
              box-shadow: 5px 0 5px 0 rgba(0, 0, 0, 0.15);
            }
            .site-nav {
              margin-left: -12px;
              margin-right: -24px;
              flex-direction: column;
            }
            .site-nav__link {
              padding: 4px 24px 4px 12px;
              background-color: transparent;
              transition-property: color, background-color;
            }
            .site-nav__link:not(:last-child) {
              margin-right: 0;
            }
            .site-nav__link.active {
              background-color: #fff;
              color: rgba(0, 0, 0, 0.87);
              border-radius: 4px 0 0 4px;
            }
            .site-footer {
              position: fixed;
              left: 0;
              bottom: 0;
              width: ${SIDEBAR_WIDTH}px;
              padding: 12px;
              color: rgba(255, 255, 255, 0.75);
              background-color: transparent;
              border-top: 1px solid #333;
            }
          }
        `}</style>
      </div>
    </>
  );
}

export default Layout;