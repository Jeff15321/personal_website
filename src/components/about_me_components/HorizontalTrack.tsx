import { useAboutMeHomePageState } from "@/src/contexts/AboutMeHomePageState";
import React, { useEffect } from "react";
import { useIsAboutMe } from "@/src/contexts/IsAboutMeContext";

interface HorizontalTrackProps {
    setImageIndex: (index: number) => void;
}

const HorizontalTrack: React.FC<HorizontalTrackProps> = ({ setImageIndex }) => {
    const { isHomePage, setIsHomePage } = useAboutMeHomePageState();
    const { isAboutMe, setIsAboutMe } = useIsAboutMe();

    useEffect(() => {
        const track = document.getElementById("horizontal-image-track");
        let isDragging = false; // Track whether a drag occurred
        const dragThreshold = 5; // Minimum movement in pixels to consider a drag

        const handleWheel = (e: WheelEvent) => {
            if (!track || !isHomePage) return;


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
            if (!track || isHomePage == false) return;
            // if (parseInt(window.getComputedStyle(track).opacity) <= 0.5) return;

            track.dataset.mouseDownAt = e.clientX.toString();
            isDragging = false; // Reset dragging state
        };

        const handleMouseUp = (e: MouseEvent) => {
            if (!track || isHomePage == false) return;

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
            if (!track || isHomePage == false) return;
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

            if (!track || !isHomePage) return;
            if (!target?.classList.contains("about-me-image")) return;

            const imageId = parseInt(target.id.split("-")[3]);
            const imageWrapper = target.parentElement;

            setImageIndex(imageId);

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
                        _track.classList.remove("horizontal-to-verticle-image-track-animation");
                        _track_content_wrapper.classList.remove("horizontal-to-verticle-image-content-wrapper");
                        _track_image_wrapper.classList.remove("horizontal-to-verticle-image-wrapper");
                        _track_image.classList.remove("horizontal-to-verticle-image");
                        
                        void _track.offsetHeight;
                        
                        _track.classList.add("horizontal-to-verticle-image-track-animation");
                        _track_content_wrapper.classList.add("horizontal-to-verticle-image-content-wrapper");
                        _track_image_wrapper.classList.add("horizontal-to-verticle-image-wrapper");
                        _track_image.classList.add("horizontal-to-verticle-image");
                        _track_image.style.objectPosition = `${percentage + 100}% center`;
                        
                    }
                }, 600)

                setTimeout(() => {
                    setIsHomePage(false);
                    //verticle track fade in
                    verticleTrack.animate(
                        {
                            opacity: "1",
                            visibility: "visible"
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
    }, [isHomePage]);

    useEffect(() => {
        if (isHomePage) {
            const horizontalTrack = document.getElementById("horizontal-image-track");
            if (horizontalTrack) {
                // Get the current percentage from the dataset
                const currentPercentage = parseFloat(horizontalTrack.dataset.percentage || "0");
                
                // Immediately set the initial position before the fade-in animation
                horizontalTrack.style.transform = `translate(calc(${currentPercentage * 5/6}% + 50vw - 20vmin), -50%)`;
                
                // Update all images' positions
                for (const image of Array.from(horizontalTrack.getElementsByClassName("about-me-image"))) {
                    (image as HTMLElement).style.objectPosition = `${currentPercentage + 100}% center`;
                }

                // Now animate the opacity
                horizontalTrack.animate(
                    [{
                        opacity: "0"
                    },
                    {
                        opacity: "1"
                    }],
                    {
                        duration: 1000,
                        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
                        fill: "forwards",
                        delay: 400
                    }
                );
            }
            //make verticle track disappear
            const verticleTrack = document.getElementById("verticle-image-track");
            const verticleContentWrapper = document.getElementsByClassName("about-me-content-wrapper");
            if (verticleTrack) {
                //reset verticle track data
                verticleTrack.dataset.percentage = "0";
                verticleTrack.dataset.prevPercentage = "0";
                verticleTrack.dataset.mouseDownAt = "0";

                verticleTrack.animate(
                    {
                        opacity: "0",
                        transform: `${getComputedStyle(verticleTrack).transform} translateX(-100vw)`
                    },
                    {
                        duration: 1000,
                        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
                        fill: "forwards"
                    }
                );
                setTimeout(() => {
                    verticleTrack.animate(
                        {
                            transform: "translateX(0)"
                        },
                        {
                            duration: 0,
                            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
                            fill: "forwards"
                        }
                    );
                }, 1000)

                // Animate all verticle images
                Array.from(verticleContentWrapper).forEach(image => {
                    (image as HTMLElement).animate(
                        {
                        },
                        {
                            duration: 2000,
                            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
                            fill: "forwards"
                        }
                    );
           
                });
            }
        }
    }, [isHomePage]);

    const horizontalTrackBack = () => {
        setIsHomePage(null);
        setIsAboutMe(false);

        //reset image shift
        const track = document.getElementById("horizontal-image-track");
        if (track) {
            for (const image of Array.from(track.getElementsByClassName("about-me-image"))) {
                (image as HTMLElement).animate(
                    {
                        objectPosition: `${100}% 50%`,
                    },
                    { duration: 1000, fill: "forwards" }
                );
            }
            setTimeout(() => {
                for (const image of Array.from(track.getElementsByClassName("about-me-image"))) {
                    (image as HTMLElement).animate(
                        {
                            objectPosition: `${100}% 50%`,
                        },
                        { duration: 1000, fill: "forwards" }
                    );
                }
            }, 1000);
        }
        
        const horizontalTrack = document.querySelector('#horizontal-image-track') as HTMLElement;
        if (horizontalTrack) {
            horizontalTrack.animate(
                [
                    { opacity: 1 },
                    { opacity: 0, transform: 'translate(-100%, -50%)', pointerEvents: 'none', userSelect: 'none' }
                ],
                {
                    duration: 1000,
                    fill: 'forwards',
                    easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
                }
            );
        }
        const horizontalTrackImages = document.querySelectorAll('.about-me-image-wrapper') as NodeListOf<Element>;
        if (horizontalTrackImages) {
            Array.from(horizontalTrackImages).forEach((imageWrapper, index) => {
                (imageWrapper as HTMLElement).animate(
                    [
                        {
                            opacity: 1,
                            filter: 'blur(5px)'
                        },
                        {
                            opacity: 0,
                            filter: 'blur(0px)'
                        }
                    ],
                    {
                        duration: 1000,
                        fill: 'forwards',
                        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    }
                );
            });
        }
        const bentoContainerWrapper = document.getElementById("bento-container-wrapper");
        if (bentoContainerWrapper) {
            bentoContainerWrapper.animate([{
                opacity: 0.5,
                transform: "translate(100%, -50%)"
            }, {
                opacity: 1,
                transform: "translate(-50%, -50%)"
            }], {
                duration: 1000, 
                fill: "forwards",
                easing: "cubic-bezier(0.4, 0, 0.2, 1)"
            });
        }
    }

    return (        
        <div
            id="horizontal-image-track"
            data-mouse-down-at="0"
            data-prev-percentage="0"
        >
            <div id="about-me-image-wrapper-1" className="about-me-image-wrapper">
                <img id="about-me-image-1" className="about-me-image" src="about-me/competitions/hth.JPG" draggable="false" style={{userSelect: 'none'}} alt="Image 1" />
                <div className="about-me-image-text" style={{userSelect: 'none'}}>Competitions</div>
            </div>
            <div id="about-me-image-wrapper-2" className="about-me-image-wrapper">
                <img id="about-me-image-2" className="about-me-image" src="about-me/sports/tuba3.JPG" draggable="false" style={{userSelect: 'none'}} alt="Image 2" />
                <div className="about-me-image-text" style={{userSelect: 'none'}}>sports</div>
            </div>
            <div id="about-me-image-wrapper-3" className="about-me-image-wrapper">
                <img id="about-me-image-3" className="about-me-image" src="about-me/sports/tuba1.JPG" draggable="false" style={{userSelect: 'none'}} alt="Image 3" />
                <div className="about-me-image-text" style={{userSelect: 'none'}}>music</div>
            </div>
            <div id="about-me-image-wrapper-4" className="about-me-image-wrapper">
                <img id="about-me-image-4" className="about-me-image" src="about-me/rocky/rocky5.JPG" draggable="false" style={{userSelect: 'none'}} alt="Image 4" />
                <div className="about-me-image-text" style={{userSelect: 'none'}}>rocky</div>
            </div>
            <div id="about-me-image-wrapper-5" className="about-me-image-wrapper">
                <img id="about-me-image-5" className="about-me-image" src="project1/cat1.jpg" draggable="false" style={{userSelect: 'none'}} alt="Image 5" />
                <div className="about-me-image-text" style={{userSelect: 'none'}}>my dream</div>
            </div>
            <div id="about-me-image-wrapper-6" className="about-me-image-wrapper">
                <img id="about-me-image-6" className="about-me-image" src="project1/cat1.jpg" draggable="false" style={{userSelect: 'none'}} alt="Image 6" />
                <div className="about-me-image-text" style={{userSelect: 'none'}}>favorites</div>
            </div>
            <button 
                className="horizontal-track-back-button" 
                onClick={() => horizontalTrackBack()}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
                    e.currentTarget.style.transform = 'scale(1.03) translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
                    e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 1)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.9)';
                }}
            >
                <span style={{fontSize: '1.4em', marginBottom: '2px', userSelect: 'none'}} draggable="false">←</span>
                <span style={{userSelect: 'none'}} draggable="false">Back</span>
            </button>
        </div>
    );
};

export default HorizontalTrack;
