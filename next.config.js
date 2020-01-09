const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
const withOffline = require("next-offline");
const rehypePrism = require("@mapbox/rehype-prism");
const rehypeReact = require("rehype-react");
const withMdxEnhanced = require("next-mdx-enhanced")({
  layoutPath: "layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  remarkPlugins: [],
  rehypePlugins: [rehypePrism, rehypeReact],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: "prebuild|loader|both",
  },
});

module.exports = withPlugins(
  [
    withMdxEnhanced,
    withCSS,
    [withOffline, { workboxOpts: { swDest: "../public/service-worker.js" } }],
  ],
  {
    pageExtensions: ["mdx", "jsx", "js"],
  },
);
