import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import Slice from '../components/Slice';
import Box from '../components/Box';
import PostTeaser from '../components/PostTeaser';

const BlogIndex = ({ data, location }) => {
  const siteTitle = get(data, 'site.siteMetadata.title');
  const siteDescription = get(data, 'site.siteMetadata.description');
  const posts = get(data, 'allMarkdownRemark.edges');

  return (
    <Layout
      location={location}
      title="Blog"
      description="I mainly blog about front-end developement tips, current web industry trends, and front-end technology."
    >
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={siteTitle}
      />
      <Slice bgColor="grey">
        <Box>
          {posts.map(({ node }) => (
            <PostTeaser node={node} hasExcerpt key={node.fields.slug} />
          ))}
        </Box>
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
