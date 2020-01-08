const fs = require("fs");
const path = require("path");
const fm = require("front-matter");

function getBlogPosts() {
  const output = [];
  const hostname = "https://www.drewbolles.com";
  const basePath = path.resolve("pages/blog");
  const posts = fs
    .readdirSync(basePath)
    .filter(page => page.indexOf(".md") !== -1);

  posts.forEach(post => {
    let data = fs.readFileSync(`${basePath}/${post}`, "utf8");
    let { attributes, body: text } = fm(data);
    let postData = {
      title: attributes.title,
      href: `${hostname}/blog/${post.replace(".md", "")}`,
      createdAt: attributes.date,
      text,
    };
    output.push(postData);
  });

  // let's sort right away
  output.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return output;
}

export default (req, res) => {
  const posts = getBlogPosts();
  res.status(200).json(posts);
};
