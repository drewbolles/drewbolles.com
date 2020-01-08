import React from "react";

import PostTeaser from "../../components/PostTeaser";
import Page from "../../components/Page";
import Text from "../../components/Text";

import { frontMatter as posts } from "./*.md";
import Divider from "../../components/Divider";

function Blog() {
  return (
    <Page name="blog" title="Blog">
      <Text as="h1">My Blog</Text>
      <Divider />
      {posts
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map(post => (
          <PostTeaser key={post.title} post={post} />
        ))}
    </Page>
  );
}

export default Blog;
