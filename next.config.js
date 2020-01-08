const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
const rehypePrism = require("@mapbox/rehype-prism");
const withMdxEnhanced = require("next-mdx-enhanced")({
  layoutPath: "layouts",
  defaultLayout: true,
  fileExtensions: ["mdx", "md"],
  remarkPlugins: [],
  rehypePlugins: [rehypePrism],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: "prebuild|loader|both",
  },
});

module.exports = withPlugins([withMdxEnhanced, withCSS], {
  pageExtensions: ["mdx", "md", "jsx", "js"],
});
