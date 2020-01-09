import React from "react";
import { IconContext } from "react-icons/lib";

import Layout from "../layouts/Main";
import ModeProvider from "../components/Mode";

import "normalize.css/normalize.css";

function MyApp({ Component, pageProps }) {
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
