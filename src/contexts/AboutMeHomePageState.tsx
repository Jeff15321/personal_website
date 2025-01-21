import { createContext, useContext, useState } from "react";

interface AboutMeHomePageState {
    isHomePage: boolean | null;
    setIsHomePage: (isHomePage: boolean | null) => void;
}

const AboutMeHomePageState = createContext<AboutMeHomePageState>({
    isHomePage: null,
    setIsHomePage: () => {}
})

export const AboutMeHomePageStateProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [isHomePage, setIsHomePage] = useState<boolean | null>(null);
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

