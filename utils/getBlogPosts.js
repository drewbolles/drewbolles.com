const fs = require("fs");
const path = require("path");
const walk = require("./walk");

function getBlogPosts(blogDir) {
  const output = [];

  walk(blogDir, file => output.push(file), {
    filter: post => post !== "index.js",
  });

  return output;
}

module.exports = getBlogPosts;
