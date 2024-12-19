import { useEffect } from "react";

export default function HorizontalToVerticleAnimation() {
    return (
        <div id="horizontal-to-verticle-image-track-animation">
            <div className="about-me-image-wrapper horizontal-to-verticle-image-wrapper">    
                <img className="about-me-image horizontal-to-verticle-image" src="project1/cat1.jpg" draggable="false" style={{userSelect: 'none'}} alt="Image" />
                <div className="horizontal-to-verticle-image-content-wrapper">
                    <h2 className="about-me-title ">TEXT</h2>
                    <p className="about-me-description">
                        Throughout my academic journey, I've participated in numerous programming competitions and hackathons, 
                    </p>
                </div>
            </div>
        </div>
    )
}