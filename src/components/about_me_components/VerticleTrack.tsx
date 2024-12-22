import React, { useEffect, useState } from "react";
import { useAboutMe } from "../../contexts/AboutMeContext";
import { useAboutMeHomePageState } from "../../contexts/AboutMeHomePageState";

interface VerticleTrackProps {
    imageIndex: number;
}

const VerticleTrack: React.FC<VerticleTrackProps> = ({ imageIndex }) => {
    const { aboutMe } = useAboutMe();
    const { isHomePage } = useAboutMeHomePageState();
    let numberOfImages = aboutMe[imageIndex] ? Object.keys(aboutMe[imageIndex]).length : 0;
    
    const [currentPercentage, setCurrentPercentage] = useState("0");

    useEffect(() => {
        const track = document.getElementById("verticle-image-track");
        if (track) {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === "attributes" && mutation.attributeName === "data-percentage") {
                        setCurrentPercentage(track.dataset.percentage || "0");
                    }
                });
            });

            observer.observe(track, {
                attributes: true,
                attributeFilter: ["data-percentage"]
            });

            return () => observer.disconnect();
        }
    }, []);

    useEffect(() => {
        const track = document.getElementById("verticle-image-track");
        let isWheelAnimating = false;

        const handleWheel = (e: WheelEvent) => {
            if (!track || isWheelAnimating) return;
            if (parseFloat(window.getComputedStyle(track).opacity) !== 1) return;

            isWheelAnimating = true;
            
            const delta = e.deltaY;
            
            let nextPercentage = parseFloat(track.dataset.percentage || "0");

            if (delta > 0) {
                nextPercentage += 1
            } else if (delta < 0) {
                nextPercentage -= 1
            }

            nextPercentage = Math.max(Math.min(nextPercentage, numberOfImages - 1), 0);

            track.dataset.percentage = nextPercentage.toString();
            track.dataset.prevPercentage = nextPercentage.toString();

            track.animate(
                {
                    transform: `translate(0%, calc(${nextPercentage} * -84vh)`,
                },
                { 
                    duration: 800, 
                    fill: "forwards",
                    easing: "cubic-bezier(0.4, 0.0, 0.2, 1)" 
                }
            );

            setTimeout(() => {
                isWheelAnimating = false;
            }, 500);
        };

        const handleMouseDown = (e: MouseEvent) => {
            if (!track) return;
            if (parseFloat(window.getComputedStyle(track).opacity) !== 1) return;

            track.dataset.mouseDownAt = e.clientY.toString();
        };

        const handleMouseUp = () => {
            if (!track) return;
            if (parseFloat(window.getComputedStyle(track).opacity) !== 1) return;

            track.dataset.mouseDownAt = "0";
            track.dataset.prevPercentage = track.dataset.percentage;
        };
        let isMouseMoving = false;
        const handleMouseMove = (e: MouseEvent) => {
            if (!track) return;
            if (parseFloat(window.getComputedStyle(track).opacity) !== 1) return;
            if (track.dataset.mouseDownAt === "0") return;
            if (isMouseMoving) return;
            isMouseMoving = true;
            const mouseDelta = parseFloat(track.dataset.mouseDownAt || "0") - e.clientY;
            let nextPercentage = parseFloat(track.dataset.prevPercentage || "0");

            if (mouseDelta > 0) {
                nextPercentage += 1
            } else if (mouseDelta < 0) {
                nextPercentage -= 1
            }

            nextPercentage = Math.max(Math.min(nextPercentage, numberOfImages - 1), 0);

            track.dataset.percentage = nextPercentage.toString();

            track.animate(
                {
                    transform: `translate(0%, calc(${nextPercentage} * -84vh)`,
                },
                { 
                    duration: 500,
                    fill: "forwards",
                    easing: "cubic-bezier(0.4, 0.0, 0.2, 1)"
                }
            );
            setTimeout(() => {
                isMouseMoving = false;
            }, 500);
        };        

        window.addEventListener("wheel", handleWheel);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [imageIndex]);

    useEffect(() => {
        const track = document.getElementById("verticle-image-track");
        const video = document.querySelector(`#about-me-verticle-video-${parseInt(currentPercentage) + 1}`);
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            if (video.id !== `about-me-verticle-video-${parseInt(currentPercentage) + 1}`) {
                (video as HTMLVideoElement).pause();
            }
        });

        if (video) {
            if (isHomePage == true) {
                (video as HTMLVideoElement).pause();
            } else if (isHomePage == false) {
                (video as HTMLVideoElement).currentTime = 0;
                setTimeout(() => {
                    videos.forEach(video => {
                        if (video.id !== `about-me-verticle-video-${parseInt(currentPercentage) + 1}`) {
                            (video as HTMLVideoElement).pause();
                        }
                    });
                    
                    (video as HTMLVideoElement).play();
                }, 1000);
            }
        }
    }, [isHomePage, currentPercentage]);

    return (
        <div
            id="verticle-image-track"
            data-mouse-down-at="0"
            data-prev-percentage="0"
            data-percentage="0"
            style={{visibility: 'hidden'}}
        >
            {[...Array(numberOfImages)].map((_, i) => (
                <div id={`about-me-verticle-image-wrapper-${i + 1}`} key={i} className="about-me-verticle-image-wrapper">
                    {aboutMe[imageIndex][i + 1].link.match(/\.(mp4|webm|ogg)$/i) ? (
                        <video id={`about-me-verticle-video-${i + 1}`}
                            className="about-me-verticle-image"
                            src={aboutMe[imageIndex][i + 1].link}
                            draggable="false"
                            style={{userSelect: 'none'}}
                            controls
                            autoPlay={false}
                            loop
                        />
                    ) : (
                        <img 
                            className="about-me-verticle-image" 
                            src={aboutMe[imageIndex][i + 1].link} 
                            draggable="false" 
                            style={{userSelect: 'none'}} 
                            alt={`Image ${i + 1}`} 
                        />
                    )}
                    <div className="about-me-content-wrapper">
                        <h2 className="about-me-title" style={{userSelect: 'none'}}>{aboutMe[imageIndex][i + 1].title}</h2>
                        <p className="about-me-description" style={{userSelect: 'none'}}>
                            {aboutMe[imageIndex][i + 1].description.split('\n').map((line, index) => (
                                <span key={index}>
                                    {line}
                                    <br></br>
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VerticleTrack;