import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import getConfig from "next/config";

function MyApp({ Component, pageProps }: any) {
  const { publicRuntimeConfig } = getConfig();

  return (
    <>
      <Head>
        <title>格上租車</title>
      </Head>
      <Component {...pageProps} />
      <span className="fixed top-0 right-0 px-2 text-sm bg-blue-system text-white z-100">
        {publicRuntimeConfig.APP_VERSION}
      </span>
    </>
  );
}

MyApp.getInitialProps = async () => {
  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
  return { serverRuntimeConfig, publicRuntimeConfig };
};

export default MyApp;
