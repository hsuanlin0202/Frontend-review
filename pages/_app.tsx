import React from "react";
import Head from "next/head";
import "../styles/globals.css";
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

export default MyApp;
