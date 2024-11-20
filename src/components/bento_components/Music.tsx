import React from "react";
import { useAnimation } from "../../contexts/AnimateContext";
import { useProjects } from "../../contexts/Projects";

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
      const next_song_button = document.querySelector(".next-music-button");
      next_song_button?.classList.remove("glow-pulse");
      next_song_button?.classList.remove("next-music-button");

      setAnimation(["Next_Song", animation[1] + 1]);
      console.log("music", animation[1])
      return true;
    };
      
    const playMusic = () => {
      alert("Jeff didn't figure out what to do to this yet so consider this a easter egg! 😊");

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
                    <img className="next-music-button glow-pulse" src="/music/forward.png" alt="Music Arrow" onClick={() => nextMusic()} />
                </div>
            </div>
        </div>
    )
}


export default Music;