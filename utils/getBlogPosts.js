const fs = require("fs");
const path = require("path");

function getBlogPosts(blogDir) {
  const output = [];

  function walk(dir) {
    const posts = fs.readdirSync(dir).filter(post => post !== "index.js");
    posts.forEach(file => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat && stat.isDirectory()) {
        walk(fullPath);
      } else {
        output.push(fullPath);
      }
    });
  }

  walk(blogDir);

  return output;
}

module.exports = getBlogPosts;
