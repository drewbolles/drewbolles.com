import React from "react";
import { CommentEmbed, DiscussionEmbed } from "disqus-react";

import Text from "../components/Text";
import ShareLinks from "../components/ShareLinks";
import Page from "../components/Page";

import "../prism-theme.css";
import { useRouter } from "next/router";

function PostLayout({ title, __resourcePath, description }) {
  const disqusConfig = {
    url: "https://www.drewbolles.com",
    identifier: __resourcePath.replace(".md", ""),
    title: title,
  };
  return ({ children: content }) => {
    return (
      <Page title={title} description={description}>
        <div className="post">
          <Text as="h1">{title}</Text>
          <ShareLinks slug={__resourcePath.replace(".md", "")} title={title} />
          <div className="post-content">{content}</div>
          <DiscussionEmbed shortname="drewbolles" config={disqusConfig} />
          <style jsx>{`
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
