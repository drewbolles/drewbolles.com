const fs = require("fs");
const path = require("path");

function walk(dir, callback, opts = {}) {
  let files = fs.readdirSync(dir);

  if (opts.filter) {
    files = files.filter(opts.filter);
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
