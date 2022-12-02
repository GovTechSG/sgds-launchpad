import type { AppProps } from "next/app";
import "@govtechsg/sgds/css/sgds.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../public/App.css";
import "@govtechsg/sgds-masthead/dist/sgds-masthead/sgds-masthead.css";
import { SgdsMasthead } from "@govtechsg/sgds-masthead-react";

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <>
      <SgdsMasthead fluid />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
