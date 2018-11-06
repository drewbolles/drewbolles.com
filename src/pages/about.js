import React from 'react';
import dayjs from 'dayjs';
import { graphql } from 'gatsby';
import { FaRegCalendarAlt, FaAngleRight } from 'react-icons/fa';
import get from 'lodash/get';

import Layout from '../components/layout';
import Slice from '../components/Slice';
import Typography from '../components/Typography';
import { Row, Col } from '../components/Grid';
import List, { ListItem } from '../components/List';

import drewToon from '../assets/images/drew-toon.svg';

const About = ({ data, location }) => {
  const nodes = get(data, 'allEventsJson.edges');
  const pastEvents = nodes.filter(event => dayjs(event.node.date).isBefore());
  const upcomingEvents = nodes.filter(event =>
    dayjs(event.node.date).isAfter(),
  );
  return (
    <Layout location={location} title="About">
      <Slice style={{ paddingTop: 0 }}>
        <Row>
          <Col m={8}>
            <Typography size="large">
              I began my voyage into web development when I was about 10,
              building sites with GeoCities before moving into coding layouts in
              tables. Fast forward a few years, and I'm still plodding about in
              HTML &amp; CSS, reading{' '}
              <a href="http://alistapart.com">A List Part</a>, and developing
              fan sites for my favorite shows. I pride myself on being a{' '}
              <strong>responsible web developer</strong>, and striving to solve
              problems by putting people first.
            </Typography>

            <Typography size="large">
              My primary areas of interest lie in{' '}
              <strong>front-end development</strong>,{' '}
              <strong>performance</strong>, and{' '}
              <strong>JavaScript applications</strong>. All sites and
              applications should be fast, beautiful, and accessible, and I
              truly believe in providing all of my users the best experience
              possible.
            </Typography>
          </Col>
          <Col m={4}>
            <div className="drew-toon-wrap">
              <div className="drew-toon-ratio">
                <img src={drewToon} />
              </div>
              <Typography className="attribution">
                Yup, that's me. Illustration by Taylor Bolles.
              </Typography>
            </div>
          </Col>
        </Row>
      </Slice>
      <Slice bgColor="grey">
        <Typography is="h2">Events</Typography>
        <Typography size="large">
          I attend and speak at events around the US. If you're at the same
          conference, say hey!
        </Typography>
        <div className="events">
          <Typography is="h3">Upcoming Events</Typography>
          <List style={{ marginBottom: 24 }}>
            {upcomingEvents.length > 1 ? (
              ''
            ) : (
              <ListItem>
                <Typography style={{ margin: 0 }}>
                  There are no upcoming events
                </Typography>
              </ListItem>
            )}
          </List>
          <Typography is="h3">Past Events</Typography>
          <List style={{ pading: '20px 16px' }}>
            {pastEvents.map(event => {
              const name = event.node.url ? (
                <a href={event.node.url}>{event.node.name}</a>
              ) : (
                <span>{event.node.name}</span>
              );
              return (
                <ListItem
                  style={{ padding: '0 16px' }}
                  icon={<FaRegCalendarAlt size={24} />}
                  key={event.node.name}
                >
                  <div className="event">
                    <Typography
                      is="h4"
                      className="event-title"
                      style={{ marginBottom: 0, fontWeight: 400 }}
                    >
                      {name}
                      <span>
                        {' '}
                        - {dayjs(event.node.date).format('MM/DD/YY')}
                      </span>
                    </Typography>
                    {event.node.talk && (
                      <Typography
                        is="h5"
                        style={{ margin: '4px 0 0', fontSize: 14 }}
                      >
                        {event.node.talk}
                      </Typography>
                    )}
                    {event.node.slides && (
                      <Typography style={{ fontSize: 14, margin: 0 }}>
                        <a
                          href={event.node.slides}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                          }}
                        >
                          view slides <FaAngleRight />
                        </a>
                      </Typography>
                    )}
                  </div>
                </ListItem>
              );
            })}
          </List>
        </div>
      </Slice>
      <Slice>
        <Typography size="large" style={{ margin: 0 }}>
          I am current <strong>not for hire</strong> for new projects. Feel free
          to get in touch with me with any questions or requests for
          consultation. Send me an email to{' '}
          <a href="mailto:drewbolles@gmail.com">drewbolles@gmail.com</a>.
        </Typography>
      </Slice>
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    allEventsJson {
      edges {
        node {
          name
          date
          talk
          url
          slides
        }
      }
    }
  }
`;

export default About;
