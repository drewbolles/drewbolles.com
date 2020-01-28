import React, { useEffect } from "react";
import { IconContext } from "react-icons/lib";
import { Router, useRouter } from "next/router";

import Layout from "../layouts/Main";
import ModeProvider from "../components/Mode";

import "normalize.css/normalize.css";
import "../prism-theme.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", url => {
      setTimeout(() => {
        window.gtag("config", process.env.GA_TRACKING_ID, {
          page_location: url,
          page_title: document.title,
        });
      }, 0);
    });
  }, []);

  return (
    <ModeProvider>
      <IconContext.Provider value={{ size: 24 }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </IconContext.Provider>
    </ModeProvider>
  );
}

export default MyApp;
