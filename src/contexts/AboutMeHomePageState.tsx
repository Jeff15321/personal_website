import { createContext, useContext, useState } from "react";

interface AboutMeHomePageState {
    isHomePage: boolean;
    setIsHomePage: (isHomePage: boolean) => void;
}

const AboutMeHomePageState = createContext<AboutMeHomePageState>({
    isHomePage: false,
    setIsHomePage: () => {}
})

export const AboutMeHomePageStateProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [isHomePage, setIsHomePage] = useState(false);
    return (
        <AboutMeHomePageState.Provider value={{isHomePage, setIsHomePage}}>
            {children}
        </AboutMeHomePageState.Provider>
    )
}

export const useAboutMeHomePageState = () => {
    const context = useContext(AboutMeHomePageState);
    if (!context) {
        throw new Error("useAboutMeHomePageState must be used within a AboutMeHomePageStateProvider");
    }
    return context;
}

