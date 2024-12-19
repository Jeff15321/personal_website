import React, { createContext, useContext, useState } from "react";

// Define the shape of the context
interface AboutMeContextType {
  aboutMe: Record<number, Record<number, Record<string, string>>>;
}

// Create the context
const AboutMeContext = createContext<AboutMeContextType | undefined>(undefined);

// Create a provider component
export const AboutMeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [aboutMe] = useState<Record<number, Record<number, Record<string, string>>>>({
        1: {
            1: {
                title: "TEXT",
                description: "Throughout my academic journey, I've participated in numerous programming competitions and hackathons",
                link: "project1/cat1.jpg"  
            },
            2: {
                title: "TEXT", 
                description: "Throughout my academic journey, I've participated in numerous programming competitions and hackathons",
                link: "project1/cat1.jpg"
            },
            3: {
                title: "TEXT",
                description: "Throughout my academic journey, I've participated in numerous programming competitions and hackathons", 
                link: "project1/cat1.jpg"
            },
            4: {
                title: "TEXT",
                description: "Throughout my academic journey, I've participated in numerous programming competitions and hackathons",
                link: "project1/cat1.jpg"
            },
            5: {
                title: "TEXT",
                description: "Throughout my academic journey, I've participated in numerous programming competitions and hackathons",
                link: "project1/cat1.jpg"
            },
    
        },
        2: {
            1: {
                title: "TEXT",
                description: "Throughout my academic journey, I've participated in numerous programming competitions and hackathons",
                link: "project1/cat1.jpg"  
            },
            2: {
                title: "TEXT",
                description: "Throughout my academic journey, I've participated in numerous programming competitions and hackathons",
                link: "project1/cat1.jpg"  
            },
        },
        3: {
            1: {
                title: "TEXT",
                description: "Throughout my academic journey, I've participated in numerous programming competitions and hackathons",
                link: "project1/cat1.jpg"  
            },
        },
        4: {
            1: {
                title: "TEXT",
                description: "Throughout my academic journey, I've participated in numerous programming competitions and hackathons",
                link: "project1/cat1.jpg"  
            },
        },
        5: {
            1: {
                title: "TEXT",
                description: "Throughout my academic journey, I've participated in numerous programming competitions and hackathons",
                link: "project1/cat1.jpg"  
            },
        },
        6: {
            1: {
                title: "TEXT",
                description: "Throughout my academic journey, I've participated in numerous programming competitions and hackathons",
                link: "project1/cat1.jpg"  
            },
        }
    });

  return (
    <AboutMeContext.Provider value={{ aboutMe }}>
      {children}
    </AboutMeContext.Provider>
  );
};

// Create a custom hook to use the context
export const useAboutMe = () => {
  const context = useContext(AboutMeContext);
  if (!context) {
    throw new Error("useAboutMe must be used within a AboutMeProvider");
  }
  return context;
}; 