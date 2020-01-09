import React from "react";
import { IconContext } from "react-icons/lib";
import withGA from "next-ga";
import { Router } from "next/router";

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

export default withGA("UA-36427500-1", Router)(MyApp);
