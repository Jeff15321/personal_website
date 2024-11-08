import React from "react";
import { nextMusic, playMusic, previousMusic } from "../utils/terminal_utils";

interface MusicCardProps {
    height: number;
    width: number;
    image: string;
}

const Music: React.FC<MusicCardProps> = ({height, width, image}) => {
    return (    
        <div className={`parent-container background-black hide-scrollbar`} 
            style={{height: `${height}%`, width: `${width}%`, overflow: "hidden"}}>
            <div className="music-container">
                <div className="music-image">
                    <img src={image} alt="Music Cover" />
                </div>
                <div className="music-button-container button-orange">
                    <img src="/music/backward.png" alt="Music Arrow" onClick={() => previousMusic()} />
                    <img src="/music/play.png" alt="Music Play" onClick={() => playMusic()} />
                    <img src="/music/forward.png" alt="Music Arrow" onClick={() => nextMusic()} />
                </div>
            </div>
        </div>
    )
}


export default Music;