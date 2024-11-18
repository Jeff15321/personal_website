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
    Time_Table_Sweetie: {
      name: "Time_Table_Sweetie",
      theme: ["orange-pink", "orange-border", "invert(31%) sepia(94%) saturate(747%) hue-rotate(-10deg) brightness(85%) contrast(100%)"],
      description: `Integrated OpenAI's ChatGPT for voice recognition and interaction, allowing the AI to listen, respond, and guide users in real time with a flirtatious manner (yes... flirtatious). \nThe voice assistant is seamlessly connected to a visually appealing, intuitive calendar interface, where users can easily manage their tasks and events. \nThe AI optimizes these events by analyzing user behavior and preferences from previous conversations and actions, providing tailored recommendations for maximum productivity.`,
      languages: ["react", "javaScript", "node", "python", "express","html","css", "sql", "minio","next","typescript"],
      award: ["logo/thirdplace.png", "Third Place", "award-bronze"],
      links: {
        Github: "https://github.com/enxilium/cyberattacker_tetris",
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
      description: `A web-based Tetris game built entirely in React and Javascript. \nPlayers increment their ability bar by clearing rows and unlocking 6 unique cyber attacks to mess up the opponenet through Web Sockets.\nAbilities include two custome malicious blocks, freezing oponent's screen until they type a sequence of symbols, force opponent to identify malicious links, and a storm that sccrews up oppoent's structure entirely.\nLastly, we've created an informative popup that educates players about the game and real-world cyber attacks as the game progresses.`,
      languages: ["react", "javaScript", "node", "python", "express","html","css", "sql", "minio","next","typescript"],
      award: ["logo/firstplace.png", "First Place", "award-gold"],
      links: {
        Github: "https://github.com/enxilium/cyberattacker_tetris",
      },
      images: {
        thumbnail: ["logo/newhacks.png", 0],
        image1: ["project3/coverpage.png", 0],
        image2: ["project3/maingame.jpg", 0]
      }
    },
    PUT: {
      name: "PUT",
      theme: ["green-grey", "green-border", "invert(28%) sepia(78%) saturate(2476%) hue-rotate(95deg) brightness(92%) contrast(101%)"],
      description: "PUT is an easy to use file storage system attached with an intuitive chrome sidebar that allows users to save, sort, and upload files in under two clicks.\nDeveloped a user-friendly CLI and streamlined file management that further emphasizes the ease of use for different demands.\nEnhanced file upload efficiency using TUS protocol for secure uploads, Cloudflare Workers for AI analysis, minIO for modular data storage, and a React/Next.js dashboard and Chrome extension. ",
      languages: ["react", "javaScript", "node", "python", "express","html","css", "sql", "minio","next","typescript"],
      award: ["logo/thirdplace.png", "Third Place", "award-bronze"],
      links: {
        Github: "https://github.com/jeffrey-z-jiang/portfolio",
        LiveDemo: "https://portfolio.demo"
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
