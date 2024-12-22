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
                title: "University of Toronto",
                description: "Computer Science\nCurrent CGPA: 4.0\nLast Updated: 2024/12/21",
                link: "about-me/jeff/uoft.jpg",
            },
            2: {
                title: "Full Stack Developer",
                description: "Most comfortable using MERN stack (MongoDB, Express, React, Node.js\\Next.js)",
                link: "about-me/rocky/rocky1.JPG",
            },
        },
        2: {
            1: {
                title: "2024-09",
                description: "3rd Place General Award at Hack the Hill II",
                link: "about-me/competitions/hth.JPG"  
            },
            2: {
                title: "2024-09", 
                description: "3rd Place General Award at Hack the Valley 9",
                link: "about-me/competitions/htv.PNG"
            },
            3: {
                title: "2024-10",
                description: "1st Place General Award at New Hacks", 
                link: "about-me/competitions/newhacks.jpg"
            },
            4: {
                title: "2024-04",
                description: "Led our DECA chapter to its first competition as the founding president",
                link: "about-me/competitions/deca.JPG"
            },
            5: {
                title: "2023-06",
                description: "2nd Place Nationally in HOSA and competed internationally in Texas HOSA finals",
                link: "about-me/competitions/hosa.JPG"
            },
            6: {
                title: "2023-02",
                description: "Represented empathy(murdered) and apathy(reincarnated as) in the UTMUN Inside Out Conference",
                link: "about-me/competitions/utmun.JPG"
            },
    
        },
        3: {
            1: {
                title: "2024-10",
                description: "TUBA(University of Toronto Open Ultimate Frisbee) at 2024 CUUC Nationals",
                link: "about-me/sports/tuba3.JPG"  
            },
            2: {
                title: "2024-09",
                description: "University of Toronto Formula Racing Team - Driverless Perception Team Member",
                link: "about-me/sports/utfr.jpg"  
            },
            3: {
                title: "2023-10",
                description: "Board 3 on ACI chess team",
                link: "about-me/sports/chess1.jpeg"  
            },
            4: {
                title: "2024-10",
                description: "TUBA when jersies finally arrived",
                link: "about-me/sports/tuba2.png"  
            },
            5: {
                title: "2023-09",
                description: "2nd Place at 2023 Birchmount Chess Tournament",
                link: "about-me/sports/chess2.jpeg"  
            },
            6: {
                title: "2024-02",
                description: "3rd Place at 2024 Birchmount Chess Tournament",
                link: "about-me/sports/chess3.jpeg"
            },
        },
        4: {
            1: {
                title: "2022-12",
                description: "Asturias by Issac Albeniz",
                link: "about-me/music/guitar1.mp4"  
            },
            3: {
                title: "2023-12",
                description: "From the Start By Laufey",
                link: "about-me/music/guitar2.mp4"  
            },
            2: {
                title: "2024-05",
                description: "Old with You by Grentperez",
                link: "about-me/music/guitar3.mp4"  
            },
        },
        5: {
            1: {
                title: "ROCKY",
                description: "I love Rocky",
                link: "about-me/rocky/rocky5.JPG"  
            },
            2: {
                title: "ROCKY",
                description: "Coding with Rocky",
                link: "about-me/rocky/rocky1.JPG"   
            },
            3: {
                title: "ROCKY",
                description: "Napping with Rocky",
                link: "about-me/rocky/rocky4.JPG"  
            },
            4: {
                title: "ROCKY",
                description: "Touching grass with Rocky",
                link: "about-me/rocky/rocky3.JPG"  
            },

        },
        6: {
            1: {
                title: "CODY",
                description: "I love Cody (occasionally)",
                link: "about-me/rocky/cody1.JPG"  
            },
            2: {
                title: "CODY",
                description: "Cody outdoors",
                link: "about-me/rocky/cody2.JPG"  
            },
            3: {
                title: "CODY",
                description: "Cody's last smile before the vet",
                link: "about-me/rocky/cody3.JPG"  
            }
        },
        
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