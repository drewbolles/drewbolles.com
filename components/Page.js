import React from "react";
import classNames from "classnames";
import Head from "next/head";

function Page({
  children,
  name,
  title = "Drew Bolles | Senior UI Developer",
  ...rest
}) {
  return (
    <>
      <Head>
        <title key="title">{title}</title>
      </Head>
      <div
        className={classNames("page", { [`page--${name}`]: name })}
        {...rest}
      >
        {children}
      </div>
    </>
  );
}

export default Page;
