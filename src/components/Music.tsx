import React from "react";
import { useAnimation } from "../contexts/AnimateContext";

interface MusicCardProps {
    height: number;
    width: number;
    image: string;
}

const Music: React.FC<MusicCardProps> = ({height, width, image}) => {
    const { animation, setAnimation } = useAnimation();

    const previousMusic = () => {
      setAnimation(["Previous_Song", animation[1] - 1]);
      return true;
    };
      
    const nextMusic = () => {
      setAnimation(["Next_Song", animation[1] + 1]);
      console.log("music", animation[1])
      return true;
    };
      
    const playMusic = () => {
      alert("play music");

      return true;
    };


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