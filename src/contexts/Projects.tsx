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
      description: `Developed an AI \\CAD\\-generating editor that allows users with no technical background to generate, edit, and 3D print models through text prompts or by providing reference images. \nDesigned the editing tools using \\React\\ and \\TypeScript\\, handled API requests through \\FastAPI\\, parsed prompts through \\LangChain\\, and stored data through \\Supabase\\. \nDeveloped an AI agent with a processing speed of under \\20 seconds\\ which is \\15% faster\\ than industry benchmarks, leveraging an end-to-end pipeline with Bing’s image search for visual analysis and enabling precise customization by breaking down models into editable components.`,
      languages: ["react","python", "node", "sql", "langchain", "fastapi"],
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
    Time_Table_Sweetie: {
      name: "Time_Table_Sweetie",
      theme: ["orange-pink", "orange-border", "invert(31%) sepia(94%) saturate(747%) hue-rotate(-10deg) brightness(85%) contrast(100%)"],
      description: `Built an AI schedule planning companion in \\React\\ and \\Flask\\ that creates the user’s schedule through casual dialogue. \nUsed \\LangChain\\ to parse dialogue history to learn user’s preferences and build a companion with memory.`,
      languages: ["react", "python", "node","html","css", "sql"],
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
    Anti_Tetris: {
      name: "Anti_Tetris",
      theme: ["purple-dark", "purple-border","invert(13%) sepia(85%) saturate(7466%) hue-rotate(276deg) brightness(82%) contrast(122%)"],
      description: `Created a two-player Tetris game using \\React\\ and \\JavaScript\\ that allows players to send unique cyberattack abilities through \\Web-Socket\\ to punish their opponents, meanwhile educating players based on cyberattack prevention through unique interactions. \\100%\\ of users passed our AI generated cyberattack awareness quizzes after playtesting`,
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
    
    Watts_Up: {
      name: "Watts_Up",
      theme: ["lavender-mint", "purple-border", "invert(85%) sepia(18%) saturate(1042%) hue-rotate(202deg) brightness(97%) contrast(96%)"],
      description: `Developed a smart mobile booking assistant using \\React\\, \\Express\\, and \\Django\\ that allows users to search, compare, book, and navigate to charging stations via an intuitive UI panel or through voice interaction. \nConstructed an AI preference algorithm using \\Python\\ and \\TensorFlow\\ that learns from user’s previous decisions to display the most ideal options.`,
      languages: ["react", "javascript","python", "node", "express","html","css", "sql"],
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
    PUT: {
      name: "PUT",
      theme: ["charcoal-mint", "emerald-border", "invert(45%) sepia(82%) saturate(853%) hue-rotate(115deg) brightness(88%) contrast(84%)"],
      description: "Allowed users to save files to the cloud in \\2 clicks\\ through a Chrome file management extension with an average upload speed of \\42 MB/s\\, which was \\20% faster\\ than Google Drive’s upload speed from conducting 20+ test runs. \nEnsured file upload efficiency and security using the \\TUS protocol\\, \\Cloudflare Workers\\ for smart sorting, \\minIO\\ for modular data storage, and a dashboard built using \\React\\ and \\TypeScript\\ dashboard.",
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
