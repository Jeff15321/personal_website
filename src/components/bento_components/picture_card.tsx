import React, { useContext } from "react";
import { useProjects } from "../../contexts/contents/Projects";

interface PictureCardProps {
    height: number;
    width: number;
    image: string;
    zoom: number;
    project: any;
}

const PictureCard: React.FC<PictureCardProps> = ({height, width, image, zoom, project}) => {
    return (
        <div className={`parent-container hide-scrollbar ${project.theme[0]}`} style={{height: `${height}%`, width: `${width}%`}}>
            <div className="picture-card hide">
                {image.includes(".mp4") ? 
                <video 
                  style={{height: `${100 + zoom}%`}} 
                  className="card-image" 
                  src={image} 
                  autoPlay
                  loop
                  muted
                /> : 
                <img style={{height: `${100 + zoom}%`}} className="card-image" src={image} />}
            </div>
        </div>
    )
}

export default PictureCard;

