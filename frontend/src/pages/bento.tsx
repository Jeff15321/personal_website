import React from 'react';
import styled from 'styled-components';
import Terminal from '../components/Terminal';
import DescriptionCard from '../components/bento_components/description_card';
import PictureCard from '../components/bento_components/picture_card';
import { useProjects } from '../contexts/Projects';
import AwardCard from '../components/bento_components/award';
import LanguageCard from '../components/bento_components/language';
import Music from '../components/bento_components/Music';

const BentoPag: React.FC = () => {
  const { projects } = useProjects();

  return (
    <div className='bento-container'>
        <div className='flex-col col-left'>
            <div className="flex-row row1">
                <div className="row-col left">
                  <Music height={100} width={100} project={projects["Time_Table_Sweetie"]}/>
                </div>
                <div className="row-col flex-col right">
                    <div className="row-col medium-long">
                      <PictureCard height={100} width={100} image={projects["Time_Table_Sweetie"].images["image2"][0]} zoom={projects["Time_Table_Sweetie"].images["image2"][1]}/>
                    </div>
                    <div className="row-col small-long">
                      <AwardCard height={100} width={100} award={projects["Time_Table_Sweetie"].award}/>
                    </div>
                </div>
            </div>

            <div className="flex-row row2">
                <div className="row-col small-tall">
                  <LanguageCard height={100} width={100} project={projects["Time_Table_Sweetie"]}/>
                </div>
                <div className="row-col next-to-small-tall">
                  <DescriptionCard height={100} width={100} project={projects["Time_Table_Sweetie"]}/>
                </div>
            </div>
        </div>
        <div className='flex-col col-right'>
            <div className="flex-row top">
              <PictureCard height={100} width={100} image={projects["Time_Table_Sweetie"].images["image1"][0]} zoom={projects["Time_Table_Sweetie"].images["image1"][1]}/> 
            </div>
            <div className="flex-row bottom">
              <Terminal height={100} width={100}/>
            </div>
        </div>
      
    </div>
  )
}

export default BentoPag;
