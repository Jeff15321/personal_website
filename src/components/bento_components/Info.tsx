import React, { useContext } from "react";
import { useProjects } from "../../contexts/Projects";

interface InfoCardProps {
    height: number;
    width: number;
    award: [string, string, string];
}

const InfoCard: React.FC<InfoCardProps> = ({height, width, award}) => {
    return (
        <div className={`parent-container hide-scrollbar ${award[2]}`} style={{height: `${height}%`, width: `${width}%`, justifyContent: "left"}}>
            <div className="award-container">
                <img height={10} width={10} className="award-logo" src={award[0]} />
            </div>
        </div>
    )
}

export default InfoCard;

