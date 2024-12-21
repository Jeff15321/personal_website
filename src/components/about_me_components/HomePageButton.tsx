import { useAboutMeHomePageState } from "../../contexts/AboutMeHomePageState";
import { useEffect } from "react";
const HomePageButton = () => {
    const { isHomePage, setIsHomePage} = useAboutMeHomePageState();

    const activateHomePage = () => {
        setIsHomePage(true);

        const verticleTrack = document.getElementById("verticle-track");
        if (verticleTrack) {
        }
        
        const _track = document.getElementById("horizontal-to-verticle-image-track-animation");
        const _track_content_wrapper = document.getElementById("horizontal-to-verticle-image-content-wrapper");
        const _track_image_wrapper = document.getElementById("horizontal-to-verticle-image-wrapper");
        const _track_image = document.getElementById("horizontal-to-verticle-image");
        if (_track && _track_content_wrapper && _track_image_wrapper && _track_image) {
            _track.classList.remove("horizontal-to-verticle-image-track-animation");
            _track_content_wrapper.classList.remove("horizontal-to-verticle-image-content-wrapper");
            _track_image_wrapper.classList.remove("horizontal-to-verticle-image-wrapper");
            _track_image.classList.remove("horizontal-to-verticle-image");
        }
    }

    useEffect(() => {
        const button = document.querySelector(".home-page-button");

        if (isHomePage) {
            if (button?.classList.contains("home-page-buttom-appear-animation")) {
                button?.classList.remove("home-page-buttom-appear-animation");
                button?.classList.add("home-page-buttom-disappear-animation");
            }
        } else if (isHomePage === false) {
            button?.classList.remove("home-page-buttom-disappear-animation");
            button?.classList.add("home-page-buttom-appear-animation");
        }
    }, [isHomePage]);

    return (
        <div>
            <button className="home-page-button" onClick={() => activateHomePage()} style={{ userSelect: 'none' }}>Back</button>
        </div>
    )
}

export default HomePageButton;
