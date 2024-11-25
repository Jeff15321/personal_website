import "../styles/globals.css";
import "../styles/bento.css";
import "../styles/terminal.css";
import "../styles/card.css";
import "../styles/music.css";
import "../styles/bento_animation.css";
import "../styles/song_animation.css";
import "../styles/theme.css";
import "../styles/revert_animation.css";
import "../styles/experience_animation.css";
import "../styles/exit_project_animation.css";
import "../styles/experience.css";
import "../styles/hover_animation.css";

import type { AppProps } from "next/app";
import { TabCounterProvider } from "../contexts/TabCounterContext"; // Adjust the import path if necessary
import { TabInputProvider } from "../contexts/TabInputContext";
import { ProjectsProvider } from "../contexts/Projects";
import { AnimationProvider } from "../contexts/AnimateContext";
import { RapidCheckerProvider } from "../contexts/RapidChecker";
import { ExperienceProvider } from "../contexts/ExperienceContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TabCounterProvider>
      <TabInputProvider>
        <ProjectsProvider>
          <AnimationProvider>
            <RapidCheckerProvider>  
              <ExperienceProvider>
                <Component {...pageProps} /> 
              </ExperienceProvider>
            </RapidCheckerProvider>
          </AnimationProvider>
        </ProjectsProvider>
      </TabInputProvider>
    </TabCounterProvider>
  );
}
