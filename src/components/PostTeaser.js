import React from 'react';
import { Link } from 'gatsby';
import get from 'lodash/get';

import Typography from './Typography';

import './PostTeaser.css';

const PostTeaser = ({ hasExcerpt, node }) => {
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
        />
      )}
    </div>
  );
};

export default PostTeaser;
