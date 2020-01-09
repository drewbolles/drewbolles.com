import React from "react";

import Text from "../components/Text";
import ShareLinks from "../components/ShareLinks";
import Page from "../components/Page";

import "../prism-theme.css";

function PostLayout({ title, __resourcePath, description }) {
  return ({ children: content }) => {
    return (
      <Page title={title} description={description}>
        <div class="post">
          <Text as="h1">{title}</Text>
          <ShareLinks slug={__resourcePath.replace(".md", "")} title={title} />
          <div className="post-content">{content}</div>
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
