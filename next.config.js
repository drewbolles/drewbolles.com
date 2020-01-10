const withCSS = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");
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

const config = {
  pageExtensions: ["js", "mdx"],
  exportTrailingSlash: true,
  experimental: {
    async rewrites() {
      return [
        {
          source: "/service-worker.js",
          destination: "/_next/static/service-worker.js",
        },
      ];
    },
  },
};

const manifest = {
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
};

module.exports = withPlugins(
  [
    [withCSS],
    [withMdxEnhanced],
    [withManifest, { manifest }],
    [
      withOffline,
      {
        workboxOpts: {
          swDest: "static/service-worker.js",
          runtimeCaching: [
            {
              urlPattern: /^https?.*/,
              handler: "NetworkFirst",
              options: {
                cacheName: "offlineCache",
                expiration: {
                  maxEntries: 200,
                },
              },
            },
          ],
        },
      },
    ],
  ],
  config,
);
