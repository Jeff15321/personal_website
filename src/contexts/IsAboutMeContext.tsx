import { createContext, useContext, useState } from "react";

interface IsAboutMeContext {
    isAboutMe: boolean | null;
    setIsAboutMe: (isAboutMe: boolean | null) => void;
}

const IsAboutMeContext = createContext<IsAboutMeContext>({
    isAboutMe: false,
    setIsAboutMe: () => {}
})

export const IsAboutMeContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [isAboutMe, setIsAboutMe] = useState<boolean | null>(false);
    return (
        <IsAboutMeContext.Provider value={{isAboutMe, setIsAboutMe}}>
            {children}
        </IsAboutMeContext.Provider>
    )
}

export const useIsAboutMe = () => {
    const context = useContext(IsAboutMeContext);
    if (!context) {
        throw new Error("useIsAboutMe must be used within a IsAboutMeContextProvider");
    }
    return context;
}

