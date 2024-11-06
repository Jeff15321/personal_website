import React from "react";

interface PhotoPopUpProps {
    height: number;
    width: number;
    photo_path: string;
    bottom_align: number;
    left_align: number;
}

const PhotoPopUp: React.FC<PhotoPopUpProps> = ({ height, width, photo_path, bottom_align, left_align }) => {
    return (
        <div className="absolute" style={{bottom: `${bottom_align}%`, left: `${left_align}%`}}>
            <img src={photo_path} alt="Project" height={height} width={width} />
        </div>
    );
}

export default PhotoPopUp;