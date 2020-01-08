import React from "react";
import { IconContext } from "react-icons/lib";
import Layout from "../layouts/Main";

import "normalize.css/normalize.css";

function MyApp({ Component, pageProps }) {
  return (
    <IconContext.Provider value={{ size: 24 }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IconContext.Provider>
  );
}

export default MyApp;
