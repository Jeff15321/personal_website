import React, { useEffect } from "react";

interface HorizontalTrackProps {
    setImageIndex: (index: number) => void;
}

const HorizontalTrack: React.FC<HorizontalTrackProps> = ({ setImageIndex }) => {
    useEffect(() => {
        const track = document.getElementById("horizontal-image-track");
        let isDragging = false; // Track whether a drag occurred
        const dragThreshold = 5; // Minimum movement in pixels to consider a drag

        const handleWheel = (e: WheelEvent) => {
            if (!track) return;

            const delta = e.deltaY;
            const maxDelta = window.innerWidth / 2;
            const percentage = (delta / maxDelta) * -30;
            const nextPercentage = Math.max(Math.min(parseFloat(track.dataset.percentage || "0") + percentage, 0), -100);

            track.dataset.percentage = nextPercentage.toString();
            track.dataset.prevPercentage = nextPercentage.toString();

            track.animate(
                {
                    transform: `translate(calc(${nextPercentage * 5/6}% + 50vw - 20vmin), -50%)`,
                },
                { duration: 1200, fill: "forwards" }
            );

            for (const image of Array.from(track.getElementsByClassName("about-me-image"))) {
                (image as HTMLElement).animate(
                    {
                        objectPosition: `${nextPercentage + 100}% center`,
                    },
                    { duration: 1200, fill: "forwards" }
                );
            }
        };

        const handleMouseDown = (e: MouseEvent) => {
            if (!track) return;
            track.dataset.mouseDownAt = e.clientX.toString();
            isDragging = false; // Reset dragging state
        };

        const handleMouseUp = (e: MouseEvent) => {
            if (!track) return;

            // Calculate the total movement during the drag
            const startMouseX = parseFloat(track.dataset.mouseDownAt || "0");
            const distanceDragged = Math.abs(startMouseX - e.clientX);

            // If movement exceeds the drag threshold, consider it a drag
            if (distanceDragged > dragThreshold) {
                isDragging = true;
            }

            track.dataset.mouseDownAt = "0";
            track.dataset.prevPercentage = track.dataset.percentage;
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!track) return;
            if (track.dataset.mouseDownAt === "0") return;

            const mouseDelta = parseFloat(track.dataset.mouseDownAt || "0") - e.clientX;
            const maxDelta = window.innerWidth / 2;
            const percentage = (mouseDelta / maxDelta) * -100;
            const nextPercentage = Math.max(
                Math.min(parseFloat(track.dataset.prevPercentage || "0") + percentage, 0),
                -100
            );

            track.dataset.percentage = nextPercentage.toString();

            track.animate(
                {
                    transform: `translate(calc(${nextPercentage * 5/6}% + 50vw - 20vmin), -50%)`,
                },
                { duration: 1200, fill: "forwards" }
            );

            for (const image of Array.from(track.getElementsByClassName("about-me-image"))) {
                (image as HTMLElement).animate(
                    {
                        objectPosition: `${nextPercentage + 100}% center`,
                    },
                    { duration: 1200, fill: "forwards" }
                );
            }
        };

        const handleClick = (e: MouseEvent) => {
            if (isDragging) {
                return;
            }

            const target = e.target as HTMLElement;

            if (!track) return;
            if (!target?.classList.contains("about-me-image")) return;

            const imageId = parseInt(target.id.split("-")[3]);
            const imageWrapper = target.parentElement;

            if (imageWrapper) {
                const percentage = (imageId - 1) * (-44 / 260) * 100 * 6/5;

                track.animate(
                    {
                        transform: `translate(calc(${percentage * 5/6}% + 50vw - 20vmin), -50%)`,
                    },
                    { 
                        duration: 800,
                        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
                        fill: "forwards" 
                    }
                );

                for (const image of Array.from(track.getElementsByClassName("about-me-image"))) {
                    (image as HTMLElement).animate(
                        {
                            objectPosition: `${percentage + 100}% center`,
                        },
                        { 
                            duration: 800,
                            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
                            fill: "forwards" 
                        }
                    );
                }

                track.dataset.percentage = percentage.toString();
                track.dataset.prevPercentage = percentage.toString();
                
                const verticleTrack = document.getElementById("verticle-image-track");
                const horizontalTrack = document.getElementById("horizontal-image-track");
                const horizontalToVerticleAnimation = document.getElementById("horizontal-to-verticle-image-track-animation");
                
                if (!verticleTrack || !horizontalTrack || !horizontalToVerticleAnimation) {
                    return;
                }

                setTimeout(() => {
                    //animation between horizontal and verticle track
                    horizontalToVerticleAnimation.style.opacity = "1";
                    horizontalTrack.animate({
                        opacity: "0",
                    }, 
                    {
                        duration: 1000,
                        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
                        fill: "forwards"
                    })
                    
                    let _track = document.getElementById("horizontal-to-verticle-image-track-animation");
                    let _track_content_wrapper = document.getElementById("horizontal-to-verticle-image-content-wrapper");
                    let _track_image_wrapper = document.getElementById("horizontal-to-verticle-image-wrapper");
                    let _track_image = document.getElementById("horizontal-to-verticle-image");
                    if (_track && _track_content_wrapper && _track_image_wrapper && _track_image) {
                        _track.classList.add("horizontal-to-verticle-image-track-animation");
                        _track_content_wrapper.classList.add("horizontal-to-verticle-image-content-wrapper");
                        _track_image_wrapper.classList.add("horizontal-to-verticle-image-wrapper");
                        _track_image.classList.add("horizontal-to-verticle-image");
                        _track_image.style.objectPosition = `${percentage + 100}% center`;
                    }
                }, 600)

                setTimeout(() => {
                    setImageIndex(imageId);
                    //verticle track fade in
                    verticleTrack.animate(
                        {
                            opacity: "1",
                        },
                        {
                            duration: 1000,
                            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
                            fill: "forwards"
                        }
                    )  
                    
                }, 1750)                
            }
        };

        

        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("click", handleClick);
        window.addEventListener("wheel", handleWheel);

        return () => {
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("click", handleClick);
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return (        
        <div
            id="horizontal-image-track"
            data-mouse-down-at="0"
            data-prev-percentage="0"
        >
            <div id="about-me-image-wrapper-1" className="about-me-image-wrapper">
                <img id="about-me-image-1" className="about-me-image" src="project1/cat1.jpg" draggable="false" style={{userSelect: 'none'}} alt="Image 1" />
                <div className="about-me-image-text" style={{userSelect: 'none'}}>Competitions</div>
            </div>
            <div id="about-me-image-wrapper-2" className="about-me-image-wrapper">
                <img id="about-me-image-2" className="about-me-image" src="project1/cat1.jpg" draggable="false" style={{userSelect: 'none'}} alt="Image 2" />
                <div className="about-me-image-text" style={{userSelect: 'none'}}>teams</div>
            </div>
            <div id="about-me-image-wrapper-3" className="about-me-image-wrapper">
                <img id="about-me-image-3" className="about-me-image" src="project1/cat1.jpg" draggable="false" style={{userSelect: 'none'}} alt="Image 3" />
                <div className="about-me-image-text" style={{userSelect: 'none'}}>sports</div>
            </div>
            <div id="about-me-image-wrapper-4" className="about-me-image-wrapper">
                <img id="about-me-image-4" className="about-me-image" src="project1/cat1.jpg" draggable="false" style={{userSelect: 'none'}} alt="Image 4" />
                <div className="about-me-image-text" style={{userSelect: 'none'}}>music</div>
            </div>
            <div id="about-me-image-wrapper-5" className="about-me-image-wrapper">
                <img id="about-me-image-5" className="about-me-image" src="project1/cat1.jpg" draggable="false" style={{userSelect: 'none'}} alt="Image 5" />
                <div className="about-me-image-text" style={{userSelect: 'none'}}>my dream</div>
            </div>
            <div id="about-me-image-wrapper-6" className="about-me-image-wrapper">
                <img id="about-me-image-6" className="about-me-image" src="project1/cat1.jpg" draggable="false" style={{userSelect: 'none'}} alt="Image 6" />
                <div className="about-me-image-text" style={{userSelect: 'none'}}>favorites</div>
            </div>
        </div>
    );
};

export default HorizontalTrack;
