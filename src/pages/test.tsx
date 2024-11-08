import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, 2000));
    delay(1000).then(() => setIsExpanded(true));
    return () => clearTimeout(0);
  }, []);

  return (
    <div className='bento-container-and-bottom-row'>
        <div className='bento-container remove-gap'>
            <div className={`flex-col col-left hide-card ${isExpanded ? 'expand-left-col' : ''}`}>
                <div className="flex-row">
                    <div className="card-border top-left hide-card">
                        <Music height={100} width={100} image={projects["Time_Table_Sweetie"].images["thumbnail"][0]}/>
                    </div>
                    <div className="card-border flex-col container-of-video-and-award">
                        <div className="card-border medium-long hide-card">
                            <PictureCard height={100} width={100} image={projects["Time_Table_Sweetie"].images["image2"][0]} zoom={projects["Time_Table_Sweetie"].images["image2"][1]}/>
                        </div>
                        <div className="card-border small-long hide-card">
                            <AwardCard height={100} width={100} award={projects["Time_Table_Sweetie"].award}/>
                        </div>
                    </div>
                </div>

                <div className="flex-row hide-card">
                    <div className="card-border small-tall hide-card">
                        <LanguageCard height={100} width={100} language={projects["Time_Table_Sweetie"].languages}/>
                    </div>
                    <div className="card-border next-to-small-tall hide-card">
                        <DescriptionCard height={100} width={100} description={projects["Time_Table_Sweetie"].description} name={projects["Time_Table_Sweetie"].name}/>
                    </div>
                </div>
                </div>
                <div className='flex-col col-right remove-gap'>
                    <div className={`flex-row top-right hide-card ${isExpanded ? 'expand-top-row' : ''}`}>
                    <PictureCard height={0} width={0} image={projects["Time_Table_Sweetie"].images["image1"][0]} zoom={projects["Time_Table_Sweetie"].images["image1"][1]}/> 
                    </div>
                    <div className="flex-row bottom-right">
                    <Terminal height={100} width={100}/>
                    </div>
                </div>
                {/* responsible for centering terminal and shifting to bottom right */}
                <div className={`filler-right-col ${isExpanded ? 'collapse-right-col' : ''}`}></div>
            </div>
            {/* responsible for centering terminal and shifting to bottom right */}
            <div className={`filler-bottom-row ${isExpanded ? 'collapse-bottom-row' : ''}`}>
            </div>
    </div>
  )
}

export default BentoPage;
