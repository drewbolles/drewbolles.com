import React from 'react';
import { Link } from 'gatsby';
import get from 'lodash/get';

import Typography from './Typography';

import useTheme from '../utils/useTheme';

const PostTeaser = ({ hasExcerpt, node }) => {
  const theme = useTheme();
  const title = get(node, 'frontmatter.title') || node.fields.slug;
  return (
    <div className="post-teaser" key={node.fields.slug}>
      <Typography is="h3" className="post-teaser-title">
        <Link to={node.fields.slug}>{title}</Link>
      </Typography>
      <small className="post-teaser-date">{node.frontmatter.date}</small>
      {hasExcerpt && (
        <Typography
          className="post-teaser-excerpt"
          dangerouslySetInnerHTML={{ __html: node.excerpt }}
          style={{ margin: 0 }}
        />
      )}
      <style jsx>{`
        :global(.post-teaser-title) {
          margin-bottom: 4px;
          color: ${theme.colors.primary};
        }

        .post-teaser-date {
          color: #757575;
        }
      `}</style>
    </div>
  );
};

export default PostTeaser;
