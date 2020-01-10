const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
const withOffline = require("next-offline");
const withManifest = require("next-manifest");
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
    [
      withManifest,
      {
        manifest: {
          output: "./public",
          name: "Drew Bolles",
          short_name: "Drew Bolles",
          icons: [
            {
              src: "/android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/android-chrome-256x256.png",
              sizes: "256x256",
              type: "image/png",
            },
          ],
        },
      },
    ],
  ],
  {
    pageExtensions: ["mdx", "jsx", "js"],
  },
);
