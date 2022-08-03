import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import getConfig from "next/config";
import { ContextTheme } from "hooks/useContext";

function MyApp({ Component, pageProps }: any) {
  return (
    <ContextTheme>
      <Head>
        <title>React Review</title>
      </Head>
      <Component {...pageProps} />
    </ContextTheme>
  );
}

MyApp.getInitialProps = async () => {
  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
  return { serverRuntimeConfig, publicRuntimeConfig };
};

export default MyApp;
