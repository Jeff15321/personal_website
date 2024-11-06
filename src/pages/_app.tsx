import "../styles/globals.css";
import "../styles/bento.css";
import "../styles/terminal.css";

import type { AppProps } from "next/app";
import { TabCounterProvider } from "../contexts/TabCounterContext"; // Adjust the import path if necessary
import { TabInputProvider } from "../contexts/TabInputContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TabCounterProvider>
      <TabInputProvider>
        <Component {...pageProps} /> 
      </TabInputProvider>
    </TabCounterProvider>
  );
}
