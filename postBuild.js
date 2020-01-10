const fs = require("fs");
const path = require("path");
const walk = require("./utils/walk");

function buildSitemap() {
  const hostname = "https://www.drewbolles.com";
  const pagesDir = "pages";
  let content = "";

  function buildXML(file) {
    const filename = `${hostname}/${file.replace(/\.js|\.mdx/, "")}`;
    const updatedAt = fs
      .statSync(file)
      .mtime.toISOString()
      .substr(0, 10);
    content += `<url>\n<loc>${filename.replace(
      `${pagesDir}/`,
      "",
    )}</loc>\n<lastmod>${updatedAt}</lastmod>\n</url>\n`;
  }

  function writeSitemap() {
    const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${content}</urlset>
`;
    fs.writeFileSync("public/sitemap.xml", sitemapXML);
  }

  walk(pagesDir, buildXML, { filter: file => !file.startsWith("_") });
  writeSitemap();
}

buildSitemap();
