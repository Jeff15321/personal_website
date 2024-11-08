import React, { useContext } from "react";
import { useProjects } from "../../contexts/Projects";

interface LanguageCardProps {
    height: number;
    width: number;
    language: string[];
}

const LanguageCard: React.FC<LanguageCardProps> = ({height, width, language}) => {
    return (
        <div className={`parent-container background-black hide-scrollbar unscrollable`} style={{height: `${height}%`, width: `${width}%`}}>
            <div className="language-container animate-scroll">
                <div style={{height: "0.5rem"}}></div>
                {language.map((lang, index) => (
                    <img height={10} width={10} className="language-logo" src={`logo/${lang}.png`} />
                ))}
            </div>
        </div>
    )
}

export default LanguageCard;

