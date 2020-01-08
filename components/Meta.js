import React from "react";
import Head from "next/head";
import { blue, grey } from "material-ui-colors";

function Meta() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>{`
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
        html {
          font-size: 100%;
          box-sizing: border-box;
          text-rendering: optimizelegibility;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
            Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          color: rgba(0, 0, 0, 0.87);
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        ol,
        ul,
        blockquote {
          margin-top: 0;
          margin-bottom: 24px;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          line-height: 1.2;
          font-weight: 500;
        }
        h1 {
          font-size: 2.25rem;
        }
        h2 {
          font-size: 1.75rem;
        }
        h3 {
          font-size: 1.5rem;
        }
        h4 {
          font-size: 1.25rem;
        }
        h5 {
          font-size: 1.15rem;
        }
        h6 {
          font-size: 1rem;
        }
        a {
          color: ${blue[700]};
          text-decoration: none;
          transition-duration: 150ms;
          transition-timing-function: ease-in-out;
          transition-property: color;
        }
        a:hover {
          color: ${blue[800]};
        }
        code:not([class*="language"]) {
          padding: 4px;
          background: ${grey[200]};
        }
        img {
          max-width: 100%;
          height: auto;
          vertical-align: middle;
        }
        #__next {
          min-height: 100vh;
        }
      `}</style>
    </>
  );
}

export default Meta;
