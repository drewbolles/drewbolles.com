import React from "react";
import Text from "../components/Text";

import "../prism-theme.css";
import ShareLinks from "../components/ShareLinks";

function PostLayout({ title, __resourcePath }) {
  return ({ children: content }) => {
    return (
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
    );
  };
}

export default PostLayout;
