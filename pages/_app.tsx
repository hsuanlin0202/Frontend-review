import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import getConfig from "next/config";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>React Review</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async () => {
  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
  return { serverRuntimeConfig, publicRuntimeConfig };
};

export default MyApp;
