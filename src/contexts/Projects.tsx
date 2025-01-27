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
    Time_Table_Sweetie: {
      name: "Time_Table_Sweetie",
      theme: ["orange-pink", "orange-border", "invert(31%) sepia(94%) saturate(747%) hue-rotate(-10deg) brightness(85%) contrast(100%)"],
      description: `Integrated OpenAI's ChatGPT for voice recognition and interaction, allowing the AI to listen, respond, and guide users in real time with a flirtatious manner (yes... flirtatious). \nThe voice assistant is seamlessly connected to a visually appealing, intuitive calendar interface, where users can easily manage their tasks and events. \nThe AI optimizes these events by analyzing user behavior and preferences from previous conversations and actions, providing tailored recommendations for maximum productivity.`,
      languages: ["react", "python", "node","html","css", "sql"],
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
    TWIRL: {
      name: "TWIRL",
      theme: ["blue-steel", "navy-border", "invert(45%) sepia(12%) saturate(2458%) hue-rotate(187deg) brightness(94%) contrast(84%)"],
      description: `Developed an AI CAD-generating editor that allows users with no technical background to generate, edit, and 3D print models through text prompts or by providing reference images. \nDesigned the editing tools using React and TypeScript, handled API requests through FastAPI, parsed prompts through LangChain, and stored data through Supabase. \nDeveloped an AI agent with a processing speed of under 20 seconds which is 15% faster than industry benchmarks, leveraging an end-to-end pipeline with Bing’s image search for visual analysis and enabling precise customization by breaking down models into editable components.`,
      languages: ["react","python", "node", "sql", "langchain", "fastapi"],
      award: ["logo/secondplace.png", "Second Place", "award-silver"],
      links: {
        Github: "https://github.com/enxilium/cyberattacker_tetris",
      },
      images: {
        thumbnail: ["project4/uofthackslogo.png", 0],
        image1: ["project4/train.png", -10],
        image2: ["project4/demo.mp4", -10]
      }
    }, 
    Anti_Tetris: {
      name: "Anti_Tetris",
      theme: ["purple-dark", "purple-border","invert(13%) sepia(85%) saturate(7466%) hue-rotate(276deg) brightness(82%) contrast(122%)"],
      description: `A web-based Tetris game built entirely in React and Javascript. \nPlayers increment their ability bar by clearing rows and unlocking 6 unique cyber attacks to mess up the opponenet through Web Sockets.\nAbilities include two custome malicious blocks, freezing oponent's screen until they type a sequence of symbols, force opponent to identify malicious links, and a storm that sccrews up oppoent's structure entirely.\nLastly, we've created an informative popup that educates players about the game and real-world cyber attacks as the game progresses.`,
      languages: ["react", "javascript", "node", "express","html","css"],
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
    
    Watts_Up: {
      name: "Watts_Up",
      theme: ["lavender-mint", "purple-border", "invert(85%) sepia(18%) saturate(1042%) hue-rotate(202deg) brightness(97%) contrast(96%)"],
      description: `Integrated OpenAI's ChatGPT for voice recognition and interaction, allowing the AI to listen, respond, and guide users in real time with a flirtatious manner (yes... flirtatious). \nThe voice assistant is seamlessly connected to a visually appealing, intuitive calendar interface, where users can easily manage their tasks and events. \nThe AI optimizes these events by analyzing user behavior and preferences from previous conversations and actions, providing tailored recommendations for maximum productivity.`,
      languages: ["react", "javascript","python", "node", "express","html","css", "sql"],
      award: ["logo/environmentalaward.png", "Best Environmental", "award-environment"],
      links: {
        Github: "https://github.com/enxilium/cyberattacker_tetris",
      },
      images: {
        thumbnail: ["project5/deltahackslogo.jpg", 0],
        image1: ["project5/demo.jpg", 0],
        image2: ["project5/demo2.jpg", 0]
      }
    }, 
    PUT: {
      name: "PUT",
      theme: ["charcoal-mint", "emerald-border", "invert(45%) sepia(82%) saturate(853%) hue-rotate(115deg) brightness(88%) contrast(84%)"],
      description: "PUT is an easy to use file storage system attached with an intuitive chrome sidebar that allows users to save, sort, and upload files in under two clicks.\nDeveloped a user-friendly CLI and streamlined file management that further emphasizes the ease of use for different demands.\nEnhanced file upload efficiency using TUS protocol for secure uploads, Cloudflare Workers for AI analysis, minIO for modular data storage, and a React/Next.js dashboard and Chrome extension. ",
      languages: ["typescript", "python", "html","css","next"],
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
