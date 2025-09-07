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
      "05/2024 – 08/2024",
      "Canaray Dental Imaging",
      "Software Engineering Intern",
      `
• Built and maintained desktop and mobile dentistry apps using \\Swift\\, used by \\600+\\ dentists across Canada
• Deployed a HIPAA-compliant backend on \\AWS\\ (\\S3\\, \\RDS\\, \\EC2\\, \\CloudFront\\), introducing CDN caching for imaging data and reducing clinic data transfer costs by \\27%\\
• Implemented 3D rendering of \\CBCT tooth scans\\ using \\Three.js\\ and \\WebGL\\
• Developed secure, low-latency API endpoints using \\Django\\ and \\PostgreSQL\\, supporting uploads and retrievals of imaging data up to \\500MB\\
      `
    ],
    [
      "05/2025 – Present",
      "Swave Studios (Fiscally)",
      "Full Stack Developer Intern",
      `
• Led the development of a cross-platform financial literacy app for kids using \\Flutter\\ and \\Firebase\\
• Migrated monolithic backend to serverless Cloud Functions with event-driven workflows, load-tested to \\1M+\\ daily requests and \\5k+\\ users with \\<200 ms\\ median latency
• Implemented backend workflows including transaction logging, token authentication, and automated data sync using \\Firebase Cloud Functions\\, enabling real-time updates and secure user actions across devices
• Set up custom CI/CD pipelines to \\App Store\\, \\Play Store\\, and \\Firebase App Distribution\\ using \\Codemagic\\
      `
    ],
    [
      "09/2024 – 08/2025",
      "University of Toronto Formula Racing Team",
      "Perception Software Developer",
      `
• Optimized \\13\\ \\Python\\ perception nodes to \\C++\\ and vectorized computations using \\NumPy\\, \\Eigen\\, and \\OpenCV\\, reducing processing time by \\91%\\ and increasing driverless speed by \\7.2 km/h\\
• Optimized the Hungarian Algorithm cost function using \\LIDAR\\ and camera data from over \\80 ROS bags\\, achieving \\83%\\ accuracy in cone detections—\\23%\\ improvement compared to past test drives
• Developed custom \\ROS\\ drivers and rectification functions for fisheye lens integration, achieving \\160-degree FOV\\, which significantly improved obstacle avoidance and vehicle navigation on narrow tracks
      `
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