import React, { useEffect, useState } from 'react';
import Terminal from '../components/Terminal';
import DescriptionCard from '../components/bento_components/description_card';
import PictureCard from '../components/bento_components/picture_card';
import { useProjects } from '../contexts/Projects';
import AwardCard from '../components/bento_components/award';
import LanguageCard from '../components/bento_components/language';
import Music from './bento_components/Music';
import { useAnimation } from '../contexts/AnimateContext';
import InfoCard from './bento_components/Info';


// Type definition
type AnimationState = {
    "bento-container" : string,
    "h-column-left-1": string,
    "h-column-right-1": string,
    "h-top-row-2": string,
    "h-bottom-row-2": string,
    "h-music-column-3": string,
    "h-container-of-video-and-award-3": string,
    "h-award-4": string,
    "h-video-4": string,
    "h-language-column-3": string,
    "h-description-column-3": string,
    "h-picture-row-2": string,
    "h-terminal-row-2": string,
    "h-filler-right-col": string,
    "h-filler-bottom-row": string,
    "h-award-5": string,
    "h-info-5": string
};

type AnimationStates = {
  [key: string]: AnimationState;
  default: AnimationState;
};

// Animation configurations for different states
const ANIMATION_STATES: AnimationStates = {
  'Starting_Animation': {
    "bento-container": "change-max-height",
    //left column
    "h-column-left-1": "expand-left-col",
        //top row on left column
        "h-top-row-2": "overflow-visible",
            "h-music-column-3": "animation show-card-fourth-right",
            "h-container-of-video-and-award-3": "overflow-visible",
                "h-award-4": "overflow-visible",
                "h-award-5": "show-card-first",
                "h-info-5": "show-card-last",
                "h-video-4": "animation show-card-third-bottom",
    //bottom row on left column
        "h-bottom-row-2": "overflow-visible",
            "h-language-column-3": "animation show-card-second-right",
            "h-description-column-3": "animation show-card-third-top",
    //right column
    "h-column-right-1": "default",
        "h-picture-row-2": "animation show-card-second-left-and-expand-height",
        "h-terminal-row-2": "default",
    //filler
    "h-filler-right-col": "collapse-right-col",
    "h-filler-bottom-row": "collapse-bottom-row"
  },
  'project-layout': {
    "bento-container": "change-max-height",
    //left column
    "h-column-left-1": "expand-left-col",
        //top row on left column
        "h-top-row-2": "overflow-visible",
            "h-music-column-3": "animation card-visible",
            "h-container-of-video-and-award-3": "overflow-visible",
                "h-award-4": "show-card-first card-visible",
                "h-video-4": "animation card-visible",
                "h-award-5": "default",
                "h-info-5": "default",
    //bottom row on left column
        "h-bottom-row-2": "overflow-visible",
            "h-language-column-3": "animation card-visible",
            "h-description-column-3": "animation card-visible",
    //right column
    "h-column-right-1": "default",
        "h-picture-row-2": "animation show-card-second-left-and-expand-height card-visible",
        "h-terminal-row-2": "default",
    //filler
    "h-filler-right-col": "collapse-right-col",
    "h-filler-bottom-row": "collapse-bottom-row"
  },
  'Previous_Song': {
    "bento-container": "change-max-height",
    //left column
    "h-column-left-1": "expand-left-col",
        //top row on left column
        "h-top-row-2": "overflow-visible",
            "h-music-column-3": "animation show-card-fourth-right song-shift-right",
            "h-container-of-video-and-award-3": "overflow-visible",
                "h-award-4": "animation show-card-first song-shift-right",
                "h-award-5": "show-card-first",
                "h-info-5": "show-card-last",
                "h-video-4": "animation show-card-third-bottom song-shift-right",
    //bottom row on left column
        "h-bottom-row-2": "overflow-visible",
            "h-language-column-3": "animation show-card-second-right song-shift-right",
            "h-description-column-3": "animation show-card-third-top song-shift-right",
    //right column
    "h-column-right-1": "default",
        "h-picture-row-2": "expand-top-row animation show-card-second-left-and-expand-height song-shift-right",
        "h-terminal-row-2": "default",
    //filler
    "h-filler-right-col": "collapse-right-col",
    "h-filler-bottom-row": "collapse-bottom-row"
  },
  'Next_Song': {
    "bento-container": "change-max-height",
    //left column
    "h-column-left-1": "expand-left-col",
        //top row on left column
        "h-top-row-2": "overflow-visible",
            "h-music-column-3": "animation show-card-fourth-right song-shift-left",
            "h-container-of-video-and-award-3": "overflow-visible",
                "h-award-4": "animation song-shift-left",
                "h-award-5": "show-card-first",
                "h-info-5": "show-card-last",
                "h-video-4": "animation show-card-third-bottom song-shift-left",
    //bottom row on left column
        "h-bottom-row-2": "overflow-visible",
            "h-language-column-3": "animation show-card-second-right song-shift-left",
            "h-description-column-3": "animation show-card-third-top song-shift-left",
    //right column
    "h-column-right-1": "default",
        "h-picture-row-2": "expand-top-row animation show-card-second-left-and-expand-height song-shift-left",
        "h-terminal-row-2": "default",
    //filler
    "h-filler-right-col": "collapse-right-col",
    "h-filler-bottom-row": "collapse-bottom-row"
  },
  'experience': {
    "bento-container": "change-max-height-home-to-experience",
    "h-column-left-1": "shrink-left-col-experience",
    "h-column-right-1": 'default',
    "h-top-row-2": 'overflow-visible',
    "h-bottom-row-2": 'overflow-visible',
    "h-music-column-3": 'exit-project-animation-fade-shift-left',
    "h-container-of-video-and-award-3": 'overflow-visible',
    "h-award-4": 'exit-project-animation-fade-shift-top',
    "h-award-5": "default",
    "h-info-5": "default",
    "h-video-4": 'exit-project-animation-fade-shift-top',
    "h-language-column-3": 'exit-project-animation-fade-shift-left',
    "h-description-column-3": 'vexit-project-animation-fade-shift-bottom',
    "h-picture-row-2": "shrink-top-row-experience",
    "h-terminal-row-2": 'default',
    "h-filler-right-col": "shrink-right-col-experience",
    "h-filler-bottom-row": "default"
  },
  'project-to-experience': {
    "bento-container": "change-max-height-project-to-experience",
    "h-column-left-1": "shrink-left-col-experience",
    "h-column-right-1": 'default',
    "h-top-row-2": 'overflow-visible',
    "h-bottom-row-2": 'overflow-visible',
    "h-music-column-3": 'visible exit-project-animation-fade-shift-left',
    "h-container-of-video-and-award-3": 'overflow-visible',
    "h-award-4": 'visible exit-project-animation-fade-shift-top',
    "h-award-5": "default",
    "h-info-5": "default",
    "h-video-4": 'visible exit-project-animation-fade-shift-top',
    "h-language-column-3": 'visible exit-project-animation-fade-shift-left',
    "h-description-column-3": 'visible exit-project-animation-fade-shift-bottom',
    "h-picture-row-2": "shrink-top-row-experience",
    "h-terminal-row-2": 'default',
    "h-filler-right-col": "shrink-right-col-experience",
    "h-filler-bottom-row": "default"
  },
  'project-to-home': {
    "bento-container": "change-max-height-home",
    "h-column-left-1": "revert-left-col",
    "h-column-right-1": 'default',
    "h-top-row-2": 'default',
    "h-bottom-row-2": 'overflow-visible',
    "h-music-column-3": 'visible exit-project-animation-fade-shift-left',
    "h-container-of-video-and-award-3": 'overflow-visible',
    "h-award-4": 'visible exit-project-animation-fade-shift-top',
    "h-award-5": "default",
    "h-info-5": "default",
    "h-video-4": 'visible exit-project-animation-fade-shift-top',
    "h-language-column-3": 'visible exit-project-animation-fade-shift-left',
    "h-description-column-3": 'visible exit-project-animation-fade-shift-bottom',
    "h-picture-row-2": "revert-top-row",
    "h-terminal-row-2": 'default',
    "h-filler-right-col": "revert-right-col",
    "h-filler-bottom-row": "revert-bottom-row"
  },
  'revert': {
    "bento-container": "revert-max-height",
    "h-column-left-1": 'revert-left-col',
    "h-column-right-1": 'default',
    "h-top-row-2": 'default',
    "h-bottom-row-2": 'default',
    "h-music-column-3": 'default',
    "h-container-of-video-and-award-3": 'default',
    "h-award-4": 'default',
    "h-award-5": "default",
    "h-info-5": "default",
    "h-video-4": 'default',
    "h-language-column-3": 'default',
    "h-description-column-3": 'default',
    "h-picture-row-2": 'revert-top-row',
    "h-terminal-row-2": 'default',
    "h-filler-right-col": 'revert-right-col',
    "h-filler-bottom-row": 'revert-bottom-row'
  },
  default: {
    "bento-container": "default",
    "h-column-left-1": 'default',
    "h-column-right-1": 'default',
    "h-top-row-2": 'default',
    "h-bottom-row-2": 'default',
    "h-music-column-3": 'default',
    "h-container-of-video-and-award-3": 'default',
    "h-award-4": 'default',
    "h-award-5": "default",
    "h-info-5": "default",
    "h-video-4": 'default',
    "h-language-column-3": 'default',
    "h-description-column-3": 'default',
    "h-picture-row-2": 'default',
    "h-terminal-row-2": 'default',
    "h-filler-right-col": 'default',
    "h-filler-bottom-row": 'default'
  }
};

export const animation_time = {
  'Starting_Animation': 3750,
  'Previous_Song': 1000,
  'Next_Song': 1000,
  'experience': 1000,
  'revert': 1000,
  default: 1000
}

interface BentoPageProps {
  projectName: string;
}

//check if user opened project page
export const Is_in_project = () => {
  
  const top_row_spacer = document.getElementById('h-picture-row-2');
    if (top_row_spacer) {
      return top_row_spacer.style.flex === '2 1 0%';
  }
  return false;
}

const BentoPage: React.FC<BentoPageProps> = ({ projectName }) => {
  const { projects } = useProjects();
  const { animation, setAnimation } = useAnimation();
  const [animationCounter, setAnimationCounter] = useState<number>(0);
  const [currentProjectName, setCurrentProjectName] = useState<string>(projectName); 
  const [currentState, setCurrentState] = useState<AnimationState>(ANIMATION_STATES.default);
  const border_styles = Object.values(projects).map(project => project.theme[1]);

  // Get className based on element and current animation state
  const getClassName = (baseClass: string, element: keyof AnimationState): string => {
    const state = currentState[element];
    return `${baseClass} ${state !== 'default' ? `${state}` : ''}`.trim();
  };

  const captureAndApplyFinalState = () => {
    const keys = Object.keys(currentState);

    keys.forEach(key => {
      const element = document.getElementById(key);
      if (element) {
        const computedStyle = window.getComputedStyle(element);
        element.style.flex = computedStyle.flex;
      }
    })    
  };

  const Previous_Song_Animation = () => {
    setAnimationCounter(prev => prev - 1);

    const cardContainers = document.querySelectorAll('.animation');

    cardContainers.forEach((element) => {
      // Remove the class to reset the animation if needed
      element.classList.remove('song-shift-right');
      // Trigger reflow to reset the animation
      void (element as HTMLElement).offsetWidth; // Cast to HTMLElement
      // Re-add the class to restart the animation
      element.classList.add('song-shift-right');
    });

        
    setTimeout(() => {
      if (animationCounter <= 0) {
        setAnimationCounter(Object.keys(projects).length - 1);
      } 

      if (animationCounter <= 0) {
        setCurrentProjectName(Object.keys(projects)[Object.keys(projects).length - 1]);
      } else {
        setCurrentProjectName(Object.keys(projects)[animationCounter - 1]);
      }
    }, 500);
  };
  // Next Song Animation
  const Next_Song_Animation = () => {
    setAnimationCounter(prev => prev + 1);

    const cardContainers = document.querySelectorAll('.animation');

    cardContainers.forEach((element) => {
      // Remove the class to reset the animation if needed
      element.classList.remove('song-shift-left');
      // Trigger reflow to reset the animation
      void (element as HTMLElement).offsetWidth; // Cast to HTMLElement
      // Re-add the class to restart the animation
      element.classList.add('song-shift-left');
    });
    
    setTimeout(() => {
      if (animationCounter < 0) {
        setAnimationCounter(Object.keys(projects).length - 1);
      } else if (animationCounter >= Object.keys(projects).length - 1) {
        setAnimationCounter(0);
      }

      if (animationCounter >= Object.keys(projects).length - 1) {
        setCurrentProjectName(Object.keys(projects)[0]);
      } else {
        setCurrentProjectName(Object.keys(projects)[animationCounter + 1]);
      }
    }, 500);
  };

  useEffect(() => {
    const border_elements = document.querySelectorAll('.card-container');
    if (border_elements) {
    border_elements.forEach((element) => {
      for (let i = 0; i < border_styles.length; i++) {
          element.classList.remove(border_styles[i]);
        }
        element.classList.add(projects[currentProjectName].theme[1]);
      });
    }
    const music_buttons = document.querySelectorAll('.music-button-container img');
    const filterMap = projects[currentProjectName].theme[2];

    music_buttons.forEach(button => {
        (button as HTMLImageElement).style.filter = filterMap;
    });
  }, [currentProjectName]);



  // useEffect(() => {
  //   setTimeout(() => {
  //     const descriptionBox = document.querySelectorAll('.h-description-column-3, .h-video-4, .h-award-4, .h-language-column-3, .h-picture-row-2');
  //     descriptionBox.forEach((box) => {
  //       box.addEventListener('mouseover', () => {
  //         box.classList.add('card-visible');
  //         box.classList.add('hover-card');
  //       });
  //       box.addEventListener('mouseout', () => {
  //         box.classList.add('return-from-hover-description');
  //       });
  //     });
  //   }, 4000);
  // }, []);


  useEffect(() => {
    //check if animation is going from project to experience
    if (animation[0] === 'experience') {
      if (Is_in_project()) {
        setAnimation(['project-to-experience', 0]);
      }
    } else if (animation[0] === 'revert') {
      if (Is_in_project()) {
        setAnimation(['project-to-home', 0]);
      }
    }
    // Update current state based on animation
    setCurrentState(ANIMATION_STATES[animation[0]] || ANIMATION_STATES.default);
    //make sure scroll bar is hidden
    document.body.classList.add('no-scroll');
    
    if (animation[0] === "Next_Song") {
      Next_Song_Animation();
    } else if (animation[0] === "Previous_Song") {
      Previous_Song_Animation();
    }
        
    if (animation[0] === 'Starting_Animation') {
      setAnimationCounter(0);
      setCurrentProjectName(Object.keys(projects)[0]);
      setTimeout(() => {
        const cardContainer = document.querySelector('.card-container');
        if (cardContainer) {
            cardContainer.classList.add('overflow-visible');
        }
      }, 1000);
      setTimeout(() => {
        const cardContainers = document.querySelectorAll('.animation');
        if (cardContainers) {
            cardContainers.forEach((element) => {
                element.classList.add('visible');
            });
        }
      }, 2000);
    } 
    
    //fix flex properties for next animations to build off of
    setTimeout(captureAndApplyFinalState, animation_time[animation[0] as keyof typeof animation_time]);
  }, [animation]);

  return (
    <div id="bento-container-wrapper" className='bento-container-wrapper'>
      <div id="bento-container" className={ getClassName('bento-container', 'bento-container')}>
        <div id="h-column-left-1" className={getClassName('card-container flex-col h-column-left-1', 'h-column-left-1')}>
          <div id="h-top-row-2" className={getClassName('card-container flex-row h-top-row-2', 'h-top-row-2')}>
            <div id="h-music-column-3" className={getClassName('card-container h-music-column-3', 'h-music-column-3')}>
              <Music 
                height={100} 
                width={100} 
                project={projects[currentProjectName]}
              />
            </div>
            <div id="h-container-of-video-and-award-3" className={getClassName('card-container flex-col h-container-of-video-and-award-3', 'h-container-of-video-and-award-3')}>
              <div id="h-video-4" className={getClassName('card-container h-video-4', 'h-video-4')}>
                <PictureCard 
                  height={100} 
                  width={100} 
                  project={projects[currentProjectName]}
                  image={projects[currentProjectName].images["image2"][0]} 
                  zoom={projects[currentProjectName].images["image2"][1]}
                />
              </div>
              <div id="h-award-4" className={getClassName('flex-row h-award-4', 'h-award-4')}>
                <div id="h-award-5" className={getClassName('card-container h-award-5', 'h-award-5')}>
                  <AwardCard 
                    height={100} 
                    width={100} 
                      award={[projects[currentProjectName].award[0], projects[currentProjectName].award[1], projects[currentProjectName].award[2]]}
                    />
                </div>
                <div id="h-info-5" className={getClassName('card-container h-info-5', 'h-info-5')}>
                  <InfoCard 
                    height={100} 
                    width={100} 
                    award={[projects[currentProjectName].award[0], projects[currentProjectName].award[1], projects[currentProjectName].award[2]]}
                  />
                </div>
              </div>
            </div>
          </div>

          <div id="h-bottom-row-2" className={getClassName('card-container flex-row h-bottom-row-2', 'h-bottom-row-2')}>
            <div id="h-language-column-3" className={getClassName('card-container h-language-column-3', 'h-language-column-3')}>
              <LanguageCard 
                height={100} 
                width={100} 
                project={projects[currentProjectName]}
              />
            </div>
            <div id="h-description-column-3" className={getClassName('card-container h-description-column-3', 'h-description-column-3')}>
              <DescriptionCard 
                height={100} 
                width={100} 
                project={projects[currentProjectName]}
              />
            </div>
          </div>
        </div>

        <div id="h-column-right-1" className={getClassName('card-container-no-change-during-animation visible-overflow flex-col h-column-right-1', 'h-column-right-1')}>
          <div id="h-picture-row-2" className={getClassName('card-container flex-row h-picture-row-2', 'h-picture-row-2')}>
            <PictureCard 
              height={100} 
              width={100} 
              project={projects[currentProjectName]}
              image={projects[currentProjectName].images["image1"][0]} 
              zoom={projects[currentProjectName].images["image1"][1]}
            />
          </div>
          <div id="h-terminal-row-2" className={getClassName('card-container h-terminal-row-2', 'h-terminal-row-2')}>
            <Terminal height={100} width={100} />
          </div>
        </div>

        <div id="h-filler-right-col" className={getClassName('card-container filler-right-col', 'h-filler-right-col')} />
      </div>
      <div id="h-filler-bottom-row" className={getClassName('card-container filler-bottom-row', 'h-filler-bottom-row')} />
    </div>
  );
};

export default BentoPage;