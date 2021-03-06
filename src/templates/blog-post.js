import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import { FaTwitter, FaFacebook } from 'react-icons/fa';

import Layout from '../components/layout';
import Container from '../components/Container';
import Box from '../components/Box';
import ShareList from '../components/ShareList';

const BlogPostTemplate = ({ data, location, pageContext }) => {
  const post = data.markdownRemark;
  const siteTitle = get(data, 'site.siteMetadata.title');
  const slug = get(post, 'fields.slug');
  const siteDescription = post.excerpt;
  const { previous, next } = pageContext;

  return (
    <Layout
      location={location}
      title={post.frontmatter.title}
      description={post.frontmatter.date}
      type="blog"
    >
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={`${post.frontmatter.title} | ${siteTitle}`}
      />
      <Container>
        <ShareList title={post.frontmatter.title} slug={slug} />
        <Box style={{ marginBottom: 24 }}>
          <div
            style={{ padding: 16, fontSize: 18 }}
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Box>

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            marginBottom: 24,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Container>
      <style jsx>{`
        .post-content :global(h3) {
          margin: 24px 0;
        }
      `}</style>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
