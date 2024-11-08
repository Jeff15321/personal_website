import React, { useContext } from "react";
import { useProjects } from "../../contexts/Projects";

interface DescriptionCardProps {
    height: number;
    width: number;
    description: string;
}

const DescriptionCard: React.FC<DescriptionCardProps> = ({height, width, description}) => { 
    const formattedDescription = description.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}<br></br>
          <div style={{height: "1em"}}></div>
        </React.Fragment>
      ));

    return (
        <div className="parent-container background-black hide-scrollbar" style={{height: `${height}%`, width: `${width}%`}}>
            <div className="description-container">
                <div className="description-title">
                    This is a title
                </div>
                <div className="description-content">
                    {formattedDescription}
                </div>
            </div>
        </div>
    )
}

export default DescriptionCard;

