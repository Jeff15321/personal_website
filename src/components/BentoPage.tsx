import React, { useEffect, useState } from 'react';
import Terminal from '../components/Terminal';
import DescriptionCard from '../components/bento_components/description_card';
import PictureCard from '../components/bento_components/picture_card';
import { useProjects } from '../contexts/Projects';
import AwardCard from '../components/bento_components/award';
import LanguageCard from '../components/bento_components/language';
import Music from '../components/Music';
import { useAnimation } from '../contexts/AnimateContext';


// Type definitions
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
    "h-filler-bottom-row": string
};

type AnimationStates = {
  [key: string]: AnimationState;
  default: AnimationState;
};

// Animation configurations for different states
const ANIMATION_STATES: AnimationStates = {
  'TimeTable Sweetie': {
    "bento-container": "change-max-height",
    //left column
    "h-column-left-1": "expand-left-col",
        //top row on left column
        "h-top-row-2": "overflow-visible",
            "h-music-column-3": "animation show-card-fourth-right",
            "h-container-of-video-and-award-3": "overflow-visible",
                "h-award-4": "animation show-card-first",
                "h-video-4": "animation show-card-third-bottom",
    //bottom row on left column
        "h-bottom-row-2": "overflow-visible",
            "h-language-column-3": "animation show-card-second-right",
            "h-description-column-3": "animation show-card-third-top",
    //right column
    "h-column-right-1": "default",
        "h-picture-row-2": "expand-top-row animation show-card-second-left fix-right-picture-card-flex-2",
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
                "h-award-4": "animation show-card-first",
                "h-video-4": "animation show-card-third-bottom",
    //bottom row on left column
        "h-bottom-row-2": "overflow-visible",
            "h-language-column-3": "animation show-card-second-right",
            "h-description-column-3": "animation show-card-third-top",
    //right column
    "h-column-right-1": "default",
        "h-picture-row-2": "expand-top-row animation show-card-second-left fix-right-picture-card-flex-2",
        "h-terminal-row-2": "default",
    //filler
    "h-filler-right-col": "collapse-right-col",
    "h-filler-bottom-row": "collapse-bottom-row"
  },
  'PUT': {
    "bento-container": "change-max-height",
    //left column
    "h-column-left-1": "expand-left-col",
        //top row on left column
        "h-top-row-2": "overflow-visible",
            "h-music-column-3": "show-card-fourth",
            "h-container-of-video-and-award-3": "overflow-visible",
                "h-award-4": "show-card-first",
                "h-video-4": "show-card-third",
    //bottom row on left column
        "h-bottom-row-2": "overflow-visible",
            "h-language-column-3": "show-card-second",
            "h-description-column-3": "show-card-third",
    //right column
    "h-column-right-1": "default",
        "h-picture-row-2": "expand-top-row show-card-second-fix-flex",
        "h-terminal-row-2": "default",
    //filler
    "h-filler-right-col": "collapse-right-col",
    "h-filler-bottom-row": "collapse-bottom-row"
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
    "h-video-4": 'default',
    "h-language-column-3": 'default',
    "h-description-column-3": 'default',
    "h-picture-row-2": 'default',
    "h-terminal-row-2": 'default',
    "h-filler-right-col": 'default',
    "h-filler-bottom-row": 'default'
  }
};

interface BentoPageProps {
  projectName: string;
}

const BentoPage: React.FC<BentoPageProps> = ({ projectName }) => {
  const { projects } = useProjects();
  const { animation } = useAnimation();
  const [currentState, setCurrentState] = useState<AnimationState>(ANIMATION_STATES.default);

  // Get className based on element and current animation state
  const getClassName = (baseClass: string, element: keyof AnimationState): string => {
    const state = currentState[element];
    return `${baseClass} ${state !== 'default' ? `${state}` : ''}`.trim();
  };

  const appendAnimationValue = (animation: string) => {
    const animationState = ANIMATION_STATES[animation];
    console.log(animationState)
    // if (animationState) {
    //   Object.keys(animationState).forEach(key => {
    //     if (animationState[key] !== 'default') {
    //       animationState[key] = `${animationState[key]} ${animation}`;
    //     }
    //   });
    // }
  };

  useEffect(() => {
    // Update current state based on animation
    setCurrentState(ANIMATION_STATES[animation] || ANIMATION_STATES.default);

    //make sure scroll bar is hidden
    document.body.classList.add('no-scroll');
        const timeoutId = setTimeout(() => {
            document.body.classList.remove('no-scroll');
        }, 5000);
    
    if (animation === "Next_Song") {
      appendAnimationValue("Next_Song");
    }
        
    if (animation === 'TimeTable Sweetie') {   
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
      return () => clearTimeout(timeoutId);
    }
  }, [animation]);

  return (
    <div className='bento-container-wrapper'>
      <div className={ getClassName('bento-container', 'bento-container')}>
        <div className={getClassName('card-container flex-col h-column-left-1', 'h-column-left-1')}>
          <div className={getClassName('card-container flex-row h-top-row-2', 'h-top-row-2')}>
            <div className={getClassName('card-container h-music-column-3', 'h-music-column-3')}>
              <Music 
                height={100} 
                width={100} 
                image={projects[projectName].images["thumbnail"][0]}
              />
            </div>
            <div className={getClassName('card-container flex-col h-container-of-video-and-award-3', 'h-container-of-video-and-award-3')}>
              <div className={getClassName('card-container h-video-4', 'h-video-4')}>
                <PictureCard 
                  height={100} 
                  width={100} 
                  image={projects[projectName].images["image2"][0]} 
                  zoom={projects[projectName].images["image2"][1]}
                />
              </div>
              <div className={getClassName('card-container h-award-4', 'h-award-4')}>
                <AwardCard 
                  height={100} 
                  width={100} 
                  award={[projects[projectName].award[0], projects[projectName].award[1], projects[projectName].award[2]]}
                />
              </div>
            </div>
          </div>

          <div className={getClassName('card-container flex-row h-bottom-row-2', 'h-bottom-row-2')}>
            <div className={getClassName('card-container h-language-column-3', 'h-language-column-3')}>
              <LanguageCard 
                height={100} 
                width={100} 
                language={projects[projectName].languages}
              />
            </div>
            <div className={getClassName('card-container h-description-column-3', 'h-description-column-3')}>
              <DescriptionCard 
                height={100} 
                width={100} 
                description={projects[projectName].description} 
                name={projects[projectName].name}
              />
            </div>
          </div>
        </div>

        <div className={getClassName('card-container-n flex-col h-column-right-1', 'h-column-right-1')}>
          <div className={getClassName('card-container flex-row h-picture-row-2', 'h-picture-row-2')}>
            <PictureCard 
              height={100} 
              width={100} 
              image={projects[projectName].images["image1"][0]} 
              zoom={projects[projectName].images["image1"][1]}
            />
          </div>
          <div className={getClassName('card-container h-terminal-row-2', 'h-terminal-row-2')}>
            <Terminal height={100} width={100} />
          </div>
        </div>

        <div className={getClassName('card-container filler-right-col', 'h-filler-right-col')} />
      </div>
      <div className={getClassName('card-container filler-bottom-row', 'h-filler-bottom-row')} />
    </div>
  );
};

export default BentoPage;