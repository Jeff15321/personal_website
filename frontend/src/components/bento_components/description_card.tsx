import React, { useContext } from "react";
import { useProjects } from "../../contexts/Projects";

interface DescriptionCardProps {
    height: number;
    width: number;
    project: any;
}

const DescriptionCard: React.FC<DescriptionCardProps> = ({height, width, project}) => { 
    const formattedDescription = project.description.split("\n").map((line: string, index: number) => (
        <React.Fragment key={index}>
          {line}<br></br>
          <div style={{height: "1em"}}></div>
        </React.Fragment>
      ));

    return (
        <div className={`parent-container hide-scrollbar ${project.theme[0]}`} style={{height: `${height}%`, width: `${width}%`}}>
            <div className="description-container">
                <div className="description-title">
                    {project.name.split("_").join(" ")}
                </div>
                <div className="description-content">
                    {formattedDescription}
                </div>
            </div>
        </div>
    )
}

export default DescriptionCard;

