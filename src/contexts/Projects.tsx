//card themes and award theme are in theme.css

import React, { createContext, useContext, useState } from "react";

// Define the shape of the context
interface ProjectsContextType {
  projects: { 
    [key: string]: {
      name: string;
      theme: string[];
      description: string;
      languages: string[];
      award: [string, string, string]; // logo, award name, award type
      links: { [key: string]: string };
      images: { [key: string]: [string, number] };
    };
  };
  setProjects: (projects: { 
    [key: string]: {
      name: string;
      theme: string[];
      description: string;
      languages: string[];
      award: [string, string, string]; // logo, award name, award type
      links: { [key: string]: string };
      images: { [key: string]: [string, number] };
    };
  }) => void;
}

// Create the context
const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

// Create a provider component
export const ProjectsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<{ 
    [key: string]: {
      name: string;
      theme: string[];
      description: string;
      languages: string[];
      award: [string, string, string];
      links: { [key: string]: string };
      images: { [key: string]: [string, number] };
    };
  }>({
    TWIRL: {
      name: "TWIRL",
      theme: ["blue-steel", "navy-border", "invert(45%) sepia(12%) saturate(2458%) hue-rotate(187deg) brightness(94%) contrast(84%)"],
      description: `Developed an AI \\CAD\\ modeling agent that generates and edits 3D print models through natural language or images. \nEnabled real-time model rendering and customization via interactive sliders and text input using \\React\\ and \\Typescript\\.\nBuilt and deployed an AI workflow using \\FastAPI\\, \\LangChain\\, and \\Supabase\\ with processing speed of \\<20 seconds\\.\nOptimized generation accuracy by leveraging an end-to-end pipeline with Bing’s image search API for visual analysis.`,
      languages: ["react", "next", "python", "fastapi", "node", "sql", "langchain"],
      award: ["logo/secondplace.png", "Second Place", "award-silver"],
      links: {
        Github: "https://github.com/enxilium/cyberattacker_tetris",
        devpost: "https://dorahacks.io/buidl/21695"
      },
      images: {
        thumbnail: ["project4/uofthackslogo.png", 0],
        image1: ["project4/train.png", 0],
        image2: ["project4/demo.mp4", -2]
      }
    }, 
    
    Watts_Up: {
      name: "Watts_Up",
      theme: ["lavender-mint", "purple-border", "invert(85%) sepia(18%) saturate(1042%) hue-rotate(202deg) brightness(97%) contrast(96%)"],
      description: `Developed a smart mobile booking assistant using \\React\\ and \\Django\\, enabling users to search, compare, and book charging stations through an intuitive user interface.\nIntegrated voice command functionality, allowing users to navigate the application via natural language interactions.\nDeveloped an AI recommendation system with \\Python\\ and \\LangChain\\, learning user preferences to suggest optimal charging stations with \\95%\\ accuracy.`,      
      languages: ["react", "javascript","python", "django","node", "express","tailwindcss"],
      award: ["logo/environmentalaward.png", "Best Environmental", "award-environment"],
      links: {
        Github: "https://github.com/enxilium/cyberattacker_tetris",
        devpost: "https://devpost.com/software/watts-up"
      },
      images: {
        thumbnail: ["project5/deltahackslogo.jpg", 0],
        image1: ["project5/demo.png", 0],
        image2: ["project5/demo2.png", 0]
      }
    }, 
    Anti_Tetris: {
      name: "Anti_Tetris",
      theme: ["purple-dark", "purple-border","invert(13%) sepia(85%) saturate(7466%) hue-rotate(276deg) brightness(82%) contrast(122%)"],
      description: `Developed a two-player Tetris game using \\React\\ and \\JavaScript\\ utilizing browser-based timers to update game states.\nDesigned unique cyberattack abilities through \\Web-Socket\\ that allowed users to punish their opponents while educating players on cybersecurity knowledge.`,
      languages: ["react", "javascript", "node", "express","html","css"],
      award: ["logo/firstplace.png", "First Place", "award-gold"],
      links: {
        Github: "https://github.com/enxilium/cyberattacker_tetris",
        devpost: "https://devpost.com/software/hack-n-stack"
      },
      images: {
        thumbnail: ["logo/newhacks.png", 0],
        image1: ["project3/coverpage.png", 0],
        image2: ["project3/maingame.jpg", 0]
      }
    },
    Time_Table_Sweetie: {
      name: "Time_Table_Sweetie",
      theme: ["orange-pink", "orange-border", "invert(31%) sepia(94%) saturate(747%) hue-rotate(-10deg) brightness(85%) contrast(100%)"],
      description: `Built an AI schedule planning companion in \\React\\ and \\Flask\\ that creates the user’s schedule through natural language.\nUsed \\LangChain\\ and \\DSPy\\ to parse dialogue history and learn user preferences, creating personalized interactions.`,
      languages: ["react", "python", "django", "node","html","css", "sql"],
      award: ["logo/thirdplace.png", "Third Place", "award-bronze"],
      links: {
        Github: "https://github.com/enxilium/cyberattacker_tetris",
        devpost: "https://devpost.com/software/timetable-sweetie"
      },
      images: {
        thumbnail: ["project1/hackthehill.png", 0],
        image1: ["project1/timetablesweetie_popup.jpg", 20],
        image2: ["project1/timetablesweetie_video.mp4", 25]
      }
    }, 
    PUT: {
      name: "PUT",
      theme: ["charcoal-mint", "emerald-border", "invert(45%) sepia(82%) saturate(853%) hue-rotate(115deg) brightness(88%) contrast(84%)"],
      description: `Enabled users to save files to the cloud through an efficient \\2-click\\ process using a Chrome file management extension.\nOptimized file uploads with \\TUS protocol\\, \\Cloudflare Workers\\ (smart sorting), and \\minIO\\ (modular storage), achieving \\42 MB/s\\ average upload speed (\\20%\\ faster than Google Drive).`,
      languages: ["typescript", "python", "html","css","next"],
      award: ["logo/thirdplace.png", "Third Place", "award-bronze"],
      links: {
        Github: "https://github.com/jeffrey-z-jiang/portfolio",
        devpost: "https://devpost.com/software/put-owb4qj"
      },
      images: {
        thumbnail: ["project2/hackthevalley.jpg", 0],
        image1: ["project2/sidebar.png", 40],
        image2: ["project2/table.jpg", 5]
      }
    }
  });

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

// Create a custom hook to use the context
export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectsProvider");
  }
  return context;
};
