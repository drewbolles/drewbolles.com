import React, { useState } from "react";
import { grey, blue } from "material-ui-colors";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaRss,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import classNames from "classnames";
import Switch from "react-switch";

import Meta from "../components/Meta";
import { mediaQueries } from "../utils/theme";
import Logo from "../components/Logo";
import Link from "../components/Link";
import useMode from "../utils/useMode";

const SIDEBAR_WIDTH = 300;
const FOOTER_HEIGHT = 80;

function Layout({ children }) {
  const [hover, setHover] = useState(false);
  const { mode, toggleMode } = useMode();
  return (
    <>
      <Meta />
      <div className={classNames("site", { [`site--${mode}`]: mode })}>
        <aside className="site-branding">
          <Link href="/">
            <a
              className="site-title"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <span className="site-title-img">
                <Logo width={28} hover={hover} />
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
          <label className="mode-toggle">
            <span className="mode-toggle-text">Dark Mode</span>
            <span
              className="mode-toggle-icon mode-toggle-icon--light"
              data-active={mode === "dark"}
            >
              <FaSun />
            </span>

            <Switch
              checked={mode === "dark"}
              onChange={toggleMode}
              checkedIcon={false}
              uncheckedIcon={false}
              onColor={blue[700]}
              className="mode-toggle-switch"
            />
            <span
              className="mode-toggle-icon mode-toggle-icon--dark"
              data-active={mode === "light"}
            >
              <FaMoon />
            </span>
          </label>
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
            background-color: #fff;
            color: rgba(0, 0, 0, 0.87);
            transition: 150ms ease-in-out background-color, color;
          }
          .site--dark {
            background-color: ${grey[900]};
            color: rgba(255, 255, 255, 0.87);
          }

          @media (prefers-color-scheme: dark) {
            .site {
              background-color: ${grey[800]};
              color: rgba(255, 255, 255, 0.95);
            }
            .site .site-content: :global(a) {
              color: ${blue[300]};
            }
          }

          .site--dark .site-content :global(a) {
            color: ${blue[300]};
          }
          .site-branding {
            position: relative;
            display: flex;
            flex-direction: column;
            padding: 24px;
            background-color: ${grey[900]};
            color: rgba(255, 255, 255, 0.8);
            box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.15);
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
          .mode-toggle {
            display: flex;
            align-items: center;
            position: absolute;
            right: 24px;
            bottom: 24px;
            height: 41px;
          }
          .mode-toggle-text {
            display: none;
            margin-right: 16px;
          }
          :global(.mode-toggle-switch) {
            display: none !important;
          }
          .mode-toggle-icon {
            display: none;
          }
          .mode-toggle-icon[data-active="true"] {
            display: flex;
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
              background-color: ${mode === "light" ? "#fff" : grey[500]};
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
            .mode-toggle {
              position: static;
              margin-top: auto;
            }
            .mode-toggle-text {
              display: block;
            }
            .mode-toggle-icon.mode-toggle-icon {
              display: none;
            }
            :global(.mode-toggle-switch) {
              display: inline-block !important;
            }
          }
        `}</style>
      </div>
    </>
  );
}

export default Layout;
