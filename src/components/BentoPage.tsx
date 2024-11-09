import React, { useState } from 'react';
import styled from 'styled-components';
import Terminal from '../components/Terminal';
import DescriptionCard from '../components/bento_components/description_card';
import PictureCard from '../components/bento_components/picture_card';
import { useProjects } from '../contexts/Projects';
import AwardCard from '../components/bento_components/award';
import LanguageCard from '../components/bento_components/language';
import Music from '../components/Music';
    
const BentoPage: React.FC = () => {
  const { projects } = useProjects();
  const [isExpanded, setIsExpanded] = useState(false);

  
    setTimeout(() => {
      setIsExpanded(true);
    }, 3000);
  

  return (
    <div className='bento-container-wrapper'>
        <div className='bento-container'>
            <div className={`card-container flex-col h-column-left-1 ${isExpanded ? 'expand-left-col' : ''}`}>
                <div className={"card-container flex-row h-top-row-2"}>
                    <div className="card-container h-music-column-3">
                    <Music height={100} width={100} image={projects["Time_Table_Sweetie"].images["thumbnail"][0]}/>
                    </div>
                    <div className="card-container flex-col h-container-of-video-and-award-3">
                        <div className="card-container h-video-4">
                        <PictureCard height={100} width={100} image={projects["Time_Table_Sweetie"].images["image2"][0]} zoom={projects["Time_Table_Sweetie"].images["image2"][1]}/>
                        </div>
                        <div className="card-container h-award-4">
                        <AwardCard height={100} width={100} award={projects["Time_Table_Sweetie"].award}/>
                        </div>
                    </div>
                </div>

                <div className="card-container flex-row h-bottom-row-2">
                    <div className="card-container h-language-column-4">
                    <LanguageCard height={100} width={100} language={projects["Time_Table_Sweetie"].languages}/>
                    </div>
                    <div className="card-container h-description-column-4">
                    <DescriptionCard height={100} width={100} description={projects["Time_Table_Sweetie"].description} name={projects["Time_Table_Sweetie"].name}/>
                    </div>
                </div>
            </div>
            <div className='card-container flex-col col-right h-column-right-1'>
                <div className={`card-container flex-row h-picture-row-3 ${isExpanded ? 'expand-top-row' : ''}`}>
                <PictureCard height={100} width={100} image={projects["Time_Table_Sweetie"].images["image1"][0]} zoom={projects["Time_Table_Sweetie"].images["image1"][1]}/> 
                </div>
                <div className="card-container h-terminal-row-3">
                <Terminal height={100} width={100}/>
                </div>
            </div>
            {/* responsible for centering terminal and shifting to bottom right */}
            <div className={`card-container filler-right-col ${isExpanded ? 'collapse-right-col' : ''}`}></div>
        </div>
        {/* responsible for centering terminal and shifting to bottom right */}
        <div className={`card-container filler-bottom-row ${isExpanded ? 'collapse-bottom-row' : ''}`}></div>
    </div>
  )
}

export default BentoPage;
