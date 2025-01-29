import React from "react";
import { useProjects } from "../../contexts/Projects";

interface InfoCardProps {
    height: number;
    width: number;
    award: [string, string, string];
}

const InfoCard: React.FC<InfoCardProps> = ({height, width, award}) => {
    const { projects } = useProjects();
    const currentProject = Object.values(projects).find(project => project.award[2] === award[2]);
    const themeFilter = currentProject?.theme[2] || 'invert(100%)';
    const themeBackground = currentProject?.theme[0] || '';
    const devpostLink = currentProject?.links.devpost || '#';

    const handleClick = () => {
        window.open(devpostLink, '_blank');
    };

    return (
        <div className={`parent-container hide-scrollbar ${themeBackground}`} 
            style={{
                height: `${height}%`, 
                width: `${width}%`, 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center"
            }}>
            <div className="info-icon-container" onClick={handleClick}>
                <div className="info-icon-large">
                    <img src="/logo/info.svg" alt="info" style={{filter: themeFilter}} />
                </div>
            </div>
        </div>
    )
}

export default InfoCard;

