import React from "react";

interface PhotoPopUpProps {
    height: number;
    width: number;
    photo_path: string;
}

const PhotoPopUp: React.FC<PhotoPopUpProps> = ({ height, width, photo_path }) => {
    return (
        <div>
            <img src="/images/profile.jpg" alt="Profile" />
        </div>
    );
}

export default PhotoPopUp;