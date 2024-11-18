import React from "react";
import { useAnimation } from "../contexts/AnimateContext";
import { useProjects } from "../contexts/Projects";

interface MusicCardProps {
    height: number;
    width: number;
    project: any;
}

const Music: React.FC<MusicCardProps> = ({height, width, project}) => {
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
        <div className={`parent-container hide-scrollbar ${project.theme[0]}`} 
            style={{height: `${height}%`, width: `${width}%`, overflow: "hidden"}}>
            <div className={`music-container ${project.theme[0]}`}>
                <div className="music-image">
                    <img src={project.images.thumbnail[0]} alt="Music Cover" />
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