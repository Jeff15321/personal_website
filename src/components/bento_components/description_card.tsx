import React, { useContext } from "react";
import { useProjects } from "../../contexts/Projects";

interface DescriptionCardProps {
    height: number;
    width: number;
    project: any;
}

const DescriptionCard: React.FC<DescriptionCardProps> = ({height, width, project}) => { 
    const formatDescription = (text: string) => {
        const lines = text.split("\n");
        return lines.map((line: string, lineIndex: number) => {
            // Split by \\ markers
            const parts = line.split("\\");
            return (
                <React.Fragment key={lineIndex}>
                    {parts.map((part, index) => (
                        // Every odd-indexed part should be highlighted in red
                        <span key={index} style={{ color: index % 2 === 1 ? 'red' : 'inherit' }}>
                            {part}
                        </span>
                    ))}
                    <br />
                    <div style={{height: "1em"}}></div>
                </React.Fragment>
            );
        });
    };

    return (
        <div className={`parent-container hide-scrollbar ${project.theme[0]}`} style={{height: `${height}%`, width: `${width}%`}}>
            <div className="description-container">
                <div className="description-title">
                    {project.name.split("_").join(" ")}
                </div>
                <div className="description-content">
                    {formatDescription(project.description)}
                </div>
            </div>
        </div>
    )
}

export default DescriptionCard;

