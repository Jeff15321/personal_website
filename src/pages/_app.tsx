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
import "../styles/about_me.css";
import "../styles/about-me-animation.css";
import "../styles/about_me_image_track.css";
import "../styles/award.css";


import type { AppProps } from "next/app";
import { TabCounterProvider } from "../contexts/TabCounterContext"; // Adjust the import path if necessary
import { TabInputProvider } from "../contexts/TabInputContext";
import { ProjectsProvider } from "../contexts/contents/Projects";
import { AnimationProvider } from "../contexts/AnimateContext";
import { RapidCheckerProvider } from "../contexts/RapidChecker";
import { ExperienceProvider } from "../contexts/contents/ExperienceContext";
import { AboutMeProvider } from "../contexts/contents/AboutMeContext";
import { AboutMeHomePageStateProvider } from "../contexts/AboutMeHomePageState";
import { IsAboutMeContextProvider } from "../contexts/IsAboutMeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TabCounterProvider>
      <TabInputProvider>
        <ProjectsProvider>
          <AnimationProvider>
            <RapidCheckerProvider>  
              <ExperienceProvider>
                <AboutMeProvider> 
                  <AboutMeHomePageStateProvider>
                    <IsAboutMeContextProvider>
                      <Component {...pageProps} /> 
                    </IsAboutMeContextProvider>
                  </AboutMeHomePageStateProvider>
                </AboutMeProvider>
              </ExperienceProvider>
            </RapidCheckerProvider>
          </AnimationProvider>
        </ProjectsProvider>
      </TabInputProvider>
    </TabCounterProvider>
  );
}
