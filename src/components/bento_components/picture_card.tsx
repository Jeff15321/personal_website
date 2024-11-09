import React, { useContext } from "react";
import { useProjects } from "../../contexts/Projects";

interface PictureCardProps {
    height: number;
    width: number;
    image: string;
    zoom: number;
}

const PictureCard: React.FC<PictureCardProps> = ({height, width, image, zoom}) => {
    return (
        <div className="parent-container hide-scrollbar" style={{height: `${height}%`, width: `${width}%`}}>
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

