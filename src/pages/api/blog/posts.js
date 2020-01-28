const fs = require("fs");
const path = require("path");
const fm = require("front-matter");

const getBlogPosts = require("scripts/getBlogPosts");

function buildPostsJson() {
  const output = [];
  const hostname = "https://www.drewbolles.com";
  const basePath = path.resolve("src/pages/blog");
  const posts = getBlogPosts(basePath);

  function buildOutput(file) {
    let data = fs.readFileSync(file, "utf8");
    let { attributes, body: text } = fm(data);
    let postData = {
      title: attributes.title,
      href: `${hostname}/blog/${file.replace(".mdx", "")}`,
      createdAt: attributes.date,
      text,
    };
    output.push(postData);
  }

  posts.forEach(post => buildOutput(post));

  // let's sort right away
  output.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return output;
}

export default (req, res) => {
  const postsJson = buildPostsJson();
  res.status(200).json(postsJson);
};
