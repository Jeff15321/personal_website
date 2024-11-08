import React, { createContext, useContext, useState } from "react";

// Define the shape of the context
interface ProjectsContextType {
  projects: { 
    [key: string]: {
      name: string;
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
      description: string;
      languages: string[];
      award: [string, string, string];
      links: { [key: string]: string };
      images: { [key: string]: [string, number] };
    };
  }>({
    Anti_Tetris: {
      name: "Anti_Tetris",
      description: `Integrated OpenAI's ChatGPT for voice recognition and interaction, allowing the AI to listen, respond, and guide users in real time with a flirtatious manner (yes... flirtatious). \nThe voice assistant is seamlessly connected to a visually appealing, intuitive calendar interface, where users can easily manage their tasks and events. \nThe AI optimizes these events by analyzing user behavior and preferences from previous conversations and actions, providing tailored recommendations for maximum productivity.`,
      languages: ["react", "javaScript", "node", "python", "express","html","css", "sql", "minio","next","typescript"],
      award: ["logo/firstplace.png", "First Place", "award-gold"],
      links: {
        Github: "https://github.com/enxilium/cyberattacker_tetris",
      },
      images: {
        image1: ["project1/timetablesweetie_popup.jpg", 20],
        image2: ["project1/timetablesweetie_video.mp4", 25]
      }
    },
    project2: {
      name: "Portfolio Website",
      description: "A personal portfolio showcasing my projects and skills.",
      languages: ["React", "TypeScript", "CSS"],
      award: ["portfolioLogo.png", "Best UI Design 2024", "award-gold"],
      links: {
        Github: "https://github.com/jeffrey-z-jiang/portfolio",
        LiveDemo: "https://portfolio.demo"
      },
      images: {
        thumbnail: ["thumbnail.png", 0],
        image1: ["project1-image.png", 2]
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
