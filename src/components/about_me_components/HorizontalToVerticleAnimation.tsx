import { useEffect } from "react";

export default function HorizontalToVerticleAnimation() {
    return (
        <div id="horizontal-to-verticle-image-track-animation" style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <div className="about-me-image-wrapper horizontal-to-verticle-image-wrapper">    
                <img className="about-me-image horizontal-to-verticle-image" src="project1/cat1.jpg" draggable="false" style={{userSelect: 'none'}} alt="Image" />
            </div>
        </div>
    )
}