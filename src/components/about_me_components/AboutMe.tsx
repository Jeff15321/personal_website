import React, { useEffect } from "react";

const AboutMe: React.FC = () => {
    useEffect(() => {
        const track = document.getElementById("image-track");

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
                    transform: `translate(calc(${nextPercentage * 0.85}% + 38vw), -50%)`,
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
        };

        const handleMouseUp = () => {
            if (!track) return;
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
                    transform: `translate(calc(${nextPercentage * 0.85}% + 38vw), -50%)`,
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
            const target = e.target as HTMLElement;
            if (target?.classList.contains("about-me-image")) {
                const imageWrapper = target.parentElement;
                if (imageWrapper) {
                    window.removeEventListener("wheel", handleWheel);
                    window.removeEventListener("mousedown", handleMouseDown);
                    window.removeEventListener("mouseup", handleMouseUp);
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("click", handleClick);
                    imageWrapper.classList.add("about-me-image-wrapper-expanded");

                }
                
            }
        };

        window.addEventListener("wheel", handleWheel);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            id="image-track"
            data-mouse-down-at="0"
            data-prev-percentage="0"
        >
            <div id="about-me-image-wrapper-1" className="about-me-image-wrapper">
                <img className="about-me-image" src="project1/cat1.jpg" draggable="false" style={{userSelect: 'none'}} alt="Image 1" />
                <div className="about-me-image-text">Competitions</div>
            </div>
            <div id="about-me-image-wrapper-2" className="about-me-image-wrapper">
                <img className="about-me-image" src="project1/cat1.jpg" draggable="false" style={{userSelect: 'none'}} alt="Image 2" />
                <div className="about-me-image-text">teams</div>
            </div>
            <div id="about-me-image-wrapper-3" className="about-me-image-wrapper">
                <img className="about-me-image" src="project1/cat1.jpg" draggable="false" style={{userSelect: 'none'}} alt="Image 3" />
                <div className="about-me-image-text">sports</div>
            </div>
            <div id="about-me-image-wrapper-4" className="about-me-image-wrapper">
                <img className="about-me-image" src="project1/cat1.jpg" draggable="false" style={{userSelect: 'none'}} alt="Image 4" />
                <div className="about-me-image-text">music</div>
            </div>
            <div id="about-me-image-wrapper-5" className="about-me-image-wrapper">
                <img className="about-me-image" src="project1/cat1.jpg" draggable="false" style={{userSelect: 'none'}} alt="Image 5" />
                <div className="about-me-image-text">my dream</div>
            </div>
            <div id="about-me-image-wrapper-6" className="about-me-image-wrapper">
                <img className="about-me-image" src="project1/cat1.jpg" draggable="false" style={{userSelect: 'none'}} alt="Image 6" />
                <div className="about-me-image-text">favorites</div>
            </div>
        </div>
    );
};

export default AboutMe;
