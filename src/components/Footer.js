import React from 'react';
import { FaCodepen, FaGithub, FaTwitter } from 'react-icons/fa';

import Container from './Container';
import Slice from './Slice';
import Typography from './Typography';
import Visibility from './Visibility';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      <Slice className="site-social-media" bgColor="green">
        <ul className="social-media-list">
          <li className="social-media-list__item">
            <a href="http://github.com/drewbolles" title="My GitHub">
              <Visibility>
                <strong>My Github</strong>
              </Visibility>
              <FaGithub />
            </a>
          </li>
          <li className="social-media-list__item">
            <a href="http://codepen.io/bollskis" title="My Codepen">
              <Visibility>
                <strong>My Codepen</strong>
              </Visibility>
              <FaCodepen />
            </a>
          </li>
          <li className="social-media-list__item">
            <a href="http://twitter.com/bollskis" title="My Twitter">
              <Visibility>
                <strong>My Twitter</strong>
              </Visibility>
              <FaTwitter />
            </a>
          </li>
        </ul>
      </Slice>

      <div
        className="footer-info"
        style={{ padding: '24px 0', fontSize: 12, backgroundColor: '#f5f5f5' }}
      >
        <Container>
          <div className="footer-col-wrapper">
            <div className="footer-col footer-col-1">
              <ul
                className="contact-list"
                style={{ margin: 0, padding: 0, listStyle: 'none' }}
              >
                <li>
                  <a href="mailto:drewbolles@gmail.com">drewbolles@gmail.com</a>
                </li>
                <li>
                  I am a passionate UI Engineer currently living in Delray
                  Beach, FL.
                </li>
              </ul>
            </div>

            <div
              className="footer-col footer-col-2"
              style={{ textAlign: 'right' }}
            >
              <Typography className="copyright" style={{ margin: 0 }}>
                Built with <a href="https://www.gatsbyjs.org">Gatsby</a>. Hosted
                on{' '}
                <a href="http://github.com/drewbolles/drewbolles.com">
                  GitHub Pages
                </a>
                .<br />
                All Rights Reserved
              </Typography>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
