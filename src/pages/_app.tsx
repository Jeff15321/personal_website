import "../styles/globals.css";
import "../styles/bento.css";
import "../styles/terminal.css";
import "../styles/card.css";
import "../styles/music.css";
import "../styles/bento_animation.css";
import "../styles/song_animation.css";
import "../styles/theme.css";

import type { AppProps } from "next/app";
import { TabCounterProvider } from "../contexts/TabCounterContext"; // Adjust the import path if necessary
import { TabInputProvider } from "../contexts/TabInputContext";
import { ProjectsProvider } from "../contexts/Projects";
import { AnimationProvider } from "../contexts/AnimateContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TabCounterProvider>
      <TabInputProvider>
        <ProjectsProvider>
          <AnimationProvider>
            <Component {...pageProps} /> 
          </AnimationProvider>
        </ProjectsProvider>
      </TabInputProvider>
    </TabCounterProvider>
  );
}
