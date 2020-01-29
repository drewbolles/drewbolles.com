require("dotenv").config({ silent: process.env.NODE_ENV === "production" });
const path = require("path");
const withPlugins = require("next-compose-plugins");
const withOffline = require("next-offline");
const withManifest = require("next-manifest");
const optimizedImages = require("next-optimized-images");
const rehypePrism = require("@mapbox/rehype-prism");
const rehypeReact = require("rehype-react");
const withMdxEnhanced = require("next-mdx-enhanced")({
  layoutPath: "src/layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  remarkPlugins: [],
  rehypePlugins: [rehypePrism, rehypeReact],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: "prebuild|loader|both",
  },
});
const getBlogPosts = require("./scripts/getBlogPosts");

const blogPosts = getBlogPosts("src/pages/blog");
const cleanPostURL = post => post.replace("src/pages", "").replace(".mdx", "");
const postRedirects = blogPosts.map(post => ({
  source: `${cleanPostURL(post)}/`,
  destination: cleanPostURL(post),
  statusCode: 301,
}));

const config = {
  pageExtensions: ["js", "mdx"],
  experimental: {
    async redirects() {
      return postRedirects;
    },
    async rewrites() {
      return [
        {
          source: "/service-worker.js",
          destination: "/_next/static/service-worker.js",
        },
      ];
    },
  },
  env: {
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
  },
  webpack: config => {
    config.resolve.alias["components"] = path.resolve(
      __dirname,
      "src",
      "components",
    );
    config.resolve.alias["utils"] = path.resolve(__dirname, "src", "utils");
    config.resolve.alias["scripts"] = path.resolve(__dirname, "scripts");
    config.resolve.alias["images"] = path.resolve(
      __dirname,
      "public",
      "images",
    );

    return config;
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
                networkTimeoutSeconds: 10,
                expiration: {
                  maxEntries: 200,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
        },
      },
    ],
    [optimizedImages, {}],
  ],
  config,
);
