import React, { useContext } from "react";
import { useProjects } from "../../contexts/Projects";

interface PictureCardProps {
    height: number;
    width: number;
    image: string;
    zoom: number;
}
//projects["project1"].images["image1"]
//projects["Anti_Tetris"].images["image1"]
const PictureCard: React.FC<PictureCardProps> = ({height, width, image, zoom}) => {
    return (
        <div className="parent-container background-black hide-scrollbar" style={{height: `${height}%`, width: `${width}%`}}>
            <div className="picture-card">
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

