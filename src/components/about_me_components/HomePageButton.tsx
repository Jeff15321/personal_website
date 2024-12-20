import { useAboutMeHomePageState } from "../../contexts/AboutMeHomePageState";
import { useEffect } from "react";
const HomePageButton = () => {
    const { isHomePage, setIsHomePage} = useAboutMeHomePageState();

    const activateHomePage = () => {
        setIsHomePage(true);
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
