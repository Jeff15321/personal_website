import { useEffect } from "react";

export default function HorizontalToVerticleAnimation() {
    return (
        <div id="horizontal-to-verticle-image-track-animation" className="">
            <div id="horizontal-to-verticle-image-wrapper" className="about-me-image-wrapper ">    
                <img id="horizontal-to-verticle-image" className="about-me-image" src="project1/cat1.jpg" draggable="false" style={{userSelect: 'none'}} alt="Image" />
                <div id="horizontal-to-verticle-image-content-wrapper" className="">
                    <h2 className="about-me-title ">TEXT</h2>
                    <p className="about-me-description">
                        Throughout my academic journey, I've participated in numerous programming competitions and hackathons, 
                    </p>
                </div>
            </div>
        </div>
    )
}