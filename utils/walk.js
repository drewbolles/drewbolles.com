const fs = require("fs");
const path = require("path");

function walk(dir, callback, opts = {}) {
  const files = fs.readdirSync(dir);

  if (opts.filter) {
    files.filter(opts.filter);
  }

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat && stat.isDirectory()) {
      walk(fullPath, callback);
    } else {
      callback(fullPath);
    }
  });
}

module.exports = walk;
