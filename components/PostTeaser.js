import React from "react";
import Link from "next/link";

import Text from "./Text";
import { grey } from "material-ui-colors";
import { FaChevronRight } from "react-icons/fa";

function PostTeaser({ post }) {
  const href = post.__resourcePath.replace(".md", "");
  return (
    <div className="post-teaser">
      <Text as="h2" spacing={0.5}>
        <Link href={href} key={post.__resourcePath}>
          <a style={{ color: "rgba(0, 0, 0, .87)" }}>{post.title}</a>
        </Link>
      </Text>
      <Text spacing={0.5}>{post.description}</Text>
      <Link href={href}>
        <a className="link">
          <span>Read</span>
          <FaChevronRight size={12} />
        </a>
      </Link>
      <style jsx>{`
        .post-teaser {
          padding-bottom: 24px;
          margin-bottom: 24px;
          border-bottom: 2px solid ${grey[200]};
        }
        .link {
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

export default PostTeaser;
