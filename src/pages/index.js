import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { FaAngleRight } from 'react-icons/fa';

import Layout from '../components/layout';
import Slice from '../components/Slice';
import Box from '../components/Box';
import Typography from '../components/Typography';
import PostTeaser from '../components/PostTeaser';
import List, { ListItem } from '../components/List';

const BlogIndex = ({ data, location }) => {
  const siteTitle = get(data, 'site.siteMetadata.title');
  const siteDescription = get(data, 'site.siteMetadata.description');
  const posts = get(data, 'allMarkdownRemark.edges');

  return (
    <Layout location={location}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={siteTitle}
      />
      <Slice>
        <Typography size="large">
          Hello! I'm a <strong>UI Engineer</strong> specializing in{' '}
          <strong>responsive web development</strong>, and{' '}
          <strong>JavaScript application development</strong>. If you would like
          to contact me, please shoot me an email at{' '}
          <a href="mailto:drewbolles@gmail.com">drewbolles@gmail.com</a>.
        </Typography>

        <Typography size="large" style={{ margin: 0 }}>
          I also really like Batman.
        </Typography>
      </Slice>
      <Slice center bgColor="green" variant="callout">
        <Typography
          is="h2"
          size="large"
          style={{
            margin: 0,
          }}
        >
          <span>Intrigued?</span>{' '}
          <Link
            to="/portfolio"
            style={{
              color: '#fff',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            Check out my projects <FaAngleRight />
          </Link>
        </Typography>
      </Slice>
      <Slice bgColor="grey">
        <Typography is="h2">Recent Posts</Typography>
        <List divider>
          {posts.map(({ node }) => (
            <ListItem key={node.fields.slug}>
              <PostTeaser node={node} />
            </ListItem>
          ))}
        </List>
      </Slice>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
