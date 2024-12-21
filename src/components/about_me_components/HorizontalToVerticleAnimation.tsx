import { useAboutMe } from "@/src/contexts/AboutMeContext";
import { useEffect, useState } from "react";

interface HorizontalToVerticleAnimationProps {
    imageIndex: number;
}

export default function HorizontalToVerticleAnimation({imageIndex}: HorizontalToVerticleAnimationProps) {
    const { aboutMe } = useAboutMe();

    return (
        <div id="horizontal-to-verticle-image-track-animation" className="">
            <div id="horizontal-to-verticle-image-wrapper" className="about-me-image-wrapper ">    
                <img id="horizontal-to-verticle-image" className="zero-opacity about-me-image" src={aboutMe[imageIndex][1].link} draggable="false" style={{userSelect: 'none'}} alt="Image" />
                <div id="horizontal-to-verticle-image-content-wrapper" className="">
                    <h2 className="about-me-title zero-opacity"> {aboutMe[imageIndex][1].title} </h2>
                    <p className="about-me-description zero-opacity">
                        {aboutMe[imageIndex][1].description}
                    </p>
                </div>
            </div>
        </div>
    )
}