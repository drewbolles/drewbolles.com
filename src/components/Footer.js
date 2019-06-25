import React from 'react';
import { FaCodepen, FaGithub, FaTwitter } from 'react-icons/fa';

import Container from './Container';
import Slice from './Slice';
import Typography from './Typography';
import Visibility from './Visibility';

import useTheme from '../utils/useTheme';
import useMedia from '../utils/useMedia';
import { queries } from '../utils/theme';

const Footer = () => {
  const theme = useTheme();
  const isMedium = useMedia(queries.m);
  return (
    <footer className="site-footer" role="contentinfo">
      <Slice bgColor="green">
        <ul className="social-media-list">
          <li className="social-media-list__item">
            <a href="http://github.com/drewbolles" title="My GitHub">
              <Visibility>
                <strong>My Github</strong>
              </Visibility>
              <FaGithub size={isMedium ? 100 : 50} />
            </a>
          </li>
          <li className="social-media-list__item">
            <a href="http://codepen.io/bollskis" title="My Codepen">
              <Visibility>
                <strong>My Codepen</strong>
              </Visibility>
              <FaCodepen size={isMedium ? 100 : 50} />
            </a>
          </li>
          <li className="social-media-list__item">
            <a href="http://twitter.com/bollskis" title="My Twitter">
              <Visibility>
                <strong>My Twitter</strong>
              </Visibility>
              <FaTwitter size={isMedium ? 100 : 50} />
            </a>
          </li>
        </ul>
      </Slice>

      <div
        className="footer-info"
        style={{
          padding: `${theme.baseSpacingUnit}px 0`,
          fontSize: 12,
          backgroundColor: '#f5f5f5',
        }}
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

            <div className="footer-col footer-col-2">
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
      <style jsx>{`
        .social-media-list {
          display: flex;
        }
        .social-media-list {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .social-media-list__item {
          flex: 1 0 0;
          color: #fff;
          text-align: center;
        }

        .footer-col {
          flex: 1 0 0;
        }

        .footer-col-1 {
          margin-bottom: ${theme.baseSpacingUnit / 2}px;
        }

        .footer-info a {
          color: ${theme.colors.primary};
        }

        @media (min-width: ${theme.breakpoints.m}px) {
          .footer-col-wrapper {
            display: flex;
          }

          .footer-col-1 {
            margin-bottom: 0;
          }

          .footer-col-2 {
            text-align: right;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
