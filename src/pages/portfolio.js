import React from 'react';

import Layout from '../components/layout';
import Typography from '../components/Typography';
import Slice from '../components/Slice';
import Button from '../components/Button';
import { Row, Col } from '../components/Grid';

import data from '../data/portfolio';

const Portflio = ({ location }) => {
  const featured = data.find(datum => datum.featured);
  const others = data.filter(datum => !datum.featured);
  return (
    <Layout
      location={location}
      title="Portfolio"
      description="Below, you can find information on my recent projects. Full case studies and more in-depth write ups coming soon."
    >
      <Slice bgColor="grey">
        <Row center>
          <Col m={6} center>
            <Typography is="h2">{featured.name}</Typography>
            <Typography
              dangerouslySetInnerHTML={{ __html: featured.description }}
            />
            <Typography>
              <strong>Tech Used:</strong>
              <br />
              {featured.technologies}
            </Typography>
            <Button href={featured.url}>View Website</Button>
          </Col>
          <Col m={5} style={{ marginLeft: 'auto' }}>
            <img
              className="featured-portfolio-image"
              src={featured.image_url}
              alt={featured.name}
            />
          </Col>
        </Row>
      </Slice>
      <Slice>
        <Row>
          {others.map(datum => (
            <Col sm={6} m={4} key={datum.name}>
              <div className="portfolio-item">
                <div className="portfolio-item-media">
                  <img
                    className="portfolio-item-img"
                    src={datum.image_url}
                    alt={datum.name}
                  />
                </div>
                <div className="portfolio-item-content">
                  <Typography
                    is="h3"
                    className="portfolio-item-title"
                    style={{ lineHeight: 1, marginBottom: 12 }}
                  >
                    {datum.name}
                  </Typography>
                  <Typography
                    className="portfolio-item-role"
                    dangerouslySetInnerHTML={{ __html: datum.role }}
                    style={{ margin: 0 }}
                  />
                </div>
                <div
                  className="portfolio-item-footer"
                  style={{ borderTop: '1px solid #eee', padding: 8 }}
                >
                  <Button variant="plain" href={datum.url}>
                    View Website
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Slice>
      <style jsx>{`
        .portfolio-item {
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
        }

        .portfolio-item-media {
          height: 0;
          padding-bottom: 56.25%;
          overflow: hidden;
        }

        .portfolio-item-content {
          padding: 24px 16px 16px;
        }

        .featured-portfolio-image {
          width: 100%;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
        }
      `}</style>
    </Layout>
  );
};

export default Portflio;
