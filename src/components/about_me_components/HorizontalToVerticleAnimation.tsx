import { useAboutMe } from "@/src/contexts/AboutMeContext";
import { useEffect, useState } from "react";

interface HorizontalToVerticleAnimationProps {
    imageIndex: number;
}

export default function HorizontalToVerticleAnimation({imageIndex}: HorizontalToVerticleAnimationProps) {
    const { aboutMe } = useAboutMe();

    const getLink = (imageIndex: number) => {
        if (aboutMe[imageIndex][1].link.match(/\.(mp4|webm|ogg)$/i)) {
            return "about-me/music/guitar1ss.png"
        }
        return aboutMe[imageIndex][1].link;
    }

    return (
        <div id="horizontal-to-verticle-image-track-animation" className="">
            <div id="horizontal-to-verticle-image-wrapper" className="about-me-image-wrapper ">    
                <img id="horizontal-to-verticle-image" className="zero-opacity about-me-image" src={getLink(imageIndex)} draggable="false" style={{userSelect: 'none'}} alt="Image" />
                <div id="horizontal-to-verticle-image-content-wrapper" className="">
                    <h2 className="about-me-title zero-opacity"> {aboutMe[imageIndex][1].title} </h2>
                    <p className="about-me-description zero-opacity" style={{userSelect: 'none'}}>
                            {aboutMe[imageIndex][1].description.split('\n').map((line, index) => (
                                <span key={index}>
                                    {line}
                                    <br></br>
                                </span>
                            ))}
                        </p>
                </div>
            </div>
        </div>
    )
}