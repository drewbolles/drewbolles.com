import React from "react";
import fetch from "isomorphic-unfetch";

function getPostsXml(blogPosts) {
  let latestPostDate;
  const postsXml = blogPosts
    .map((post, idx) => {
      // i'm sorting the posts before they get to this point, so we can
      // safely assign the first index to the latest
      if (idx === 0) latestPostDate = post.createdAt;
      return `
      <item>
        <title>${post.title}</title>
        <link>
          ${post.href}
        </link>
        
        <pubDate>${post.createdAt}</pubDate>
        <description>
        <![CDATA[${post.text}]]>
        </description>
    </item>`;
    })
    .join("\n");
  return { postsXml, latestPostDate };
}

function getRssXml(blogPosts) {
  const { postsXml, latestPostDate } = getPostsXml(blogPosts);
  return `<?xml version="1.0" ?>
  <rss version="2.0">
    <channel>
        <title>Blog by Drew Bolles</title>
        <link>https://www.drewbolles.com</link>
        <description>Hi! I'm Drew Bolles and I'm a Senion UI Developer. I mainly blog about code and tech, but occasionally about my other interests such as health, anime, sports, and family.</description>
        <language>en</language>
        <lastBuildDate>${latestPostDate}</lastBuildDate>
        ${postsXml}
    </channel>
  </rss>`;
}

function Feed() {
  return null;
}

Feed.getInitialProps = async function({ req, res }) {
  const port = req.socket.address().port || 3000;
  const response = await fetch(`http://localhost:${port}/api/getBlogPosts`);
  const blogPosts = await response.json();
  res.setHeader("Content-Type", "text/xml");
  res.write(getRssXml(blogPosts));
  res.end();
  return {};
};

export default Feed;
