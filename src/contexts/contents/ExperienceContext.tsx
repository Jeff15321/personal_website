import React, { createContext, useContext, useState } from "react";

// Define the shape of the context
interface ExperienceContextType {
  //0: count, 1: current time
  experience: [string, string, string, string][];
}

// Create the context
const ExperienceContext = createContext<ExperienceContextType | undefined>(undefined);

// Create a provider component
export const ExperienceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [experience] = useState<[string, string, string, string][]>([
    [ 
        "09/2024 - Present",
        "UofT Formula Racing Team", 
        "Perception Build Team", 
        `
• Refactored \\2,000+\\ lines of \\Python\\ perception code to \\C++\\ and vectorized computations using \\NumPy\\, \\Eigen\\, and \\OpenCV\\, reducing processing time by \\91%\\ and increasing driverless speed by \\7.2 km/h\\.
• Optimized the Hungarian Algorithm’s parameters using LIDAR and camera data from over \\80 ROS bags\\, achieving \\83%\\ accuracy in cone detections—\\23%\\ improvement compared to past test drives.
• Developed custom ROS drivers and rectification functions for fisheye lens integration, achieving \\160-degree FOV\\, which significantly improved obstacle avoidance and vehicle navigation on narrow tracks.`
    ],
    [
        "01/2025 - Present",
        "Lovelytics", 
        "Full stack and LLM Developer", 
        `
• Developed a multi-agent system with \\Python\\, \\Databricks\\, \\LangChain\\, and \\LangGraph\\ to automate the generation of business reports and documentation of \\5,000+\\ words.
• Reduced LLM task completion time from \\50\\ to \\17\\ seconds through parallel subtask execution and model routing.
• Designed a scalable web application using \\FastAPI\\ and \\React\\, implementing RESTful APIs to enable efficient communication between various ML models, databases, and the client interface.
• Built a RAG content generation pipeline with contextual document retrieval, improving output accuracy by \\30%\\.`
    ]
]);

  return (
    <ExperienceContext.Provider value={{ experience }}>
      {children}
    </ExperienceContext.Provider>
  );
};

// Create a custom hook to use the context
export const useExperience = () => {
  const context = useContext(ExperienceContext);
  if (!context) {
    throw new Error("useExperience must be used within a ExperienceProvider");
  }
  return context;
}; 