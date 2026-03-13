import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Legacy date-based blog URLs from old site
      {
        source: "/blog/2015/04/23/inline-critical-css-using-jekyll-and-gulp",
        destination: "/blog/inline-critical-css-using-jekyll-and-gulp",
        permanent: true,
      },
      {
        source:
          "/blog/2016/11/14/webpack-code-splitting-with-create-react-app-react-router",
        destination:
          "/blog/webpack-code-splitting-with-create-react-app-react-router",
        permanent: true,
      },
      {
        source: "/blog/2013/12/22/how-to-structure-your-next-sass-project",
        destination: "/blog/how-to-structure-your-next-sass-project",
        permanent: true,
      },
      {
        source: "/blog/2016/01/14/introducing-gotham-drupal-8-starter-theme",
        destination: "/blog/introducing-gotham-drupal-8-starter-theme",
        permanent: true,
      },
      {
        source: "/blog/2014/09/01/joining-chapter-three",
        destination: "/blog/joining-chapter-three",
        permanent: true,
      },
      {
        source: "/blog/2013/12/28/no-javascript-toggle-content-feature",
        destination: "/blog/no-javascript-toggle-content-feature",
        permanent: true,
      },
      {
        source: "/blog/2013/12/27/defining-your-content-views",
        destination: "/blog/defining-your-content-views",
        permanent: true,
      },
      {
        source:
          "/blog/2016/01/14/printing-entity-reference-field-programmatically-drupal-8",
        destination:
          "/blog/printing-entity-reference-field-programmatically-drupal-8",
        permanent: true,
      },
      {
        source:
          "/blog/2016/01/14/i-was-featured-in-lullabots-drupal-8-podcast",
        destination: "/blog/i-was-featured-in-lullabots-drupal-8-podcast",
        permanent: true,
      },
      // Removed sections redirect to homepage
      {
        source: "/talks",
        destination: "/",
        permanent: true,
      },
      {
        source: "/work",
        destination: "/",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/",
        permanent: true,
      },
      // Old resume page
      {
        source: "/resume",
        destination: "/",
        permanent: true,
      },
      {
        source: "/command-center",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
