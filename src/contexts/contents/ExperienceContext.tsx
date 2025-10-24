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
      "05/2025 – Present",
      "Swave Studios (Fiscally)",
      "Full Stack Developer Intern",
      `
• Led the development of a mobile app handling \\1M+\\ monthly requests from \\5k+\\ users with median latency under \\200 ms\\.
• Developed \\10+ TypeScript\\ serverless workflows for transaction logging, token authentication, and automated data synchronization.
• Engineered a performance-optimized \\Flutter\\ component library, improving widget tree efficiency and caching to cut render times by \\35%\\ and reduce crash rates on legacy Android devices by \\98%\\.
• Integrated local storage and background synchronization using \\Hive\\ to enable full offline access across all app modules.
• Automated CI/CD pipelines to \\App Store\\ and \\Play Store\\ using \\Codemagic\\, reducing deployment time by \\95%\\.
      `
    ],
    [
      "05/2024 – 08/2024",
      "Canaray Dental Imaging",
      "Software Engineering Intern",
      `
• Implemented a \\GraphQL\\ gateway with RBAC, audit trails, and \\Redis\\ caching, processing \\80K+\\ monthly requests and reducing redundant data transfer by \\40%\\ through optimized query aggregation.
• Built refresh token rotation using \\AWS Lambda\\ and \\JWT\\, extending average session lifetime by \\400%\\.
• Engineered a \\JavaScript\\ pipeline to sync taxonomy data from a cloud database, restructuring into modular YAML files and auto-seeding \\AWS RDS\\ with complete accuracy across \\10k+\\ translations.      `
    ],
    [
      "12/2024 – 04/2025",
      "UTMIST – Lovelytics",
      "Full Stack Intern",
      `
• Developed a multi-agent system with \\Python\\, \\Databricks\\, \\LangChain\\, and \\LangGraph\\ to automate the generation of business reports and documentation used by \\1,500+\\ clients
• Reduced LLM task completion time from \\50\\ to \\17\\ seconds through parallel subtask execution and model routing
• Designed a scalable web application using \\FastAPI\\, \\React\\, and \\Next.js\\, implementing REST APIs to enable communication between various ML models, databases, and the client interface
      `
    ],
    [
      "09/2024 – 08/2025",
      "University of Toronto Formula Racing Team",
      "Perception Software Developer",
      `
• Optimized 13 \\Python\\ perception nodes to \\C++\\ and vectorized computations using \\NumPy\\, \\Eigen\\, and \\OpenCV\\, reducing processing time by \\51%\\ and increasing driverless speed by \\7.2 km/h\\.
• Refined cone detection algorithms using camera data from \\80+ ROS bags\\, achieving a \\23%\\ improvement in detection accuracy.
• Developed custom \\ROS\\ drivers and rectification functions for fisheye lens integration, enabling a \\160° field of view\\.    `
    ],

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