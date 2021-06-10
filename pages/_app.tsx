import "../styles/globals.css";
import type { AppProps } from "next/app";

import { withTina } from "tinacms";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default withTina(MyApp, {
  enabled: process.env.NODE_ENV !== "production",
  sidebar: true,
});
