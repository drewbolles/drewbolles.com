import React from "react";
import { CommentEmbed, DiscussionEmbed } from "disqus-react";

import Text from "../components/Text";
import ShareLinks from "../components/ShareLinks";
import Page from "../components/Page";

function PostLayout({ title, __resourcePath, description }) {
  const slug = __resourcePath.replace(".mdx", "");
  const disqusConfig = {
    url: `https://www.drewbolles.com/${slug}`,
    identifier: slug,
    title: title,
  };
  return ({ children: content }) => {
    return (
      <Page title={title} description={description}>
        <div className="post">
          <Text as="h1">{title}</Text>
          <ShareLinks slug={slug} title={title} />
          <div className="post-content">{content}</div>
          <DiscussionEmbed shortname="drewbolles" config={disqusConfig} />
          <style jsx>{`
            .post {
              max-width: 50em;
              margin: 0 auto;
            }
            .post-content {
              font-size: 18px;
              line-height: 1.66;
            }
          `}</style>
        </div>
      </Page>
    );
  };
}

export default PostLayout;
