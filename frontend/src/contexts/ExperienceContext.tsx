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
• Using \\Open-CV\\ and \\ROS2\\ for real-time autonomous vehicle software
• Transferred perception software from \\Python\\ into \\C++\\ and vectorized serialized calculations to minimize computation time
• Skilled in sensor integration, data analysis, and real-time systems.`
    ],
    [
        "09/2022 - 06/2024",
        "Sonata Music", 
        "Guitar Teacher", 
        `
• Worked \\20 hours\\ weekly and taught classical guitar from \\levels 1 to 10\\.
• Wrote over \\30\\ guitar covers and tutorialsof popular music from student's requests`
    ],
    [   
        "07/2023 - 04/2024",
        "International Public Health Internship", 
        "Workshop Team Lead", 
        `
• Led a group of \\5 student researchers\\ and conducted comprehensive research on prevalent health issues in Nigeria relating to Marasmus
• Implemented \\3 workshops\\ in Nigeriaabout Marasmus health education that benefited over \\140 locals\\
• Conducted weekly meetings with local health instructors to organize events and learn about pressing local health concerns`
    ],
    [
        "09/2023 - 06/2024",
        "Agincourt C.I.", 
        "DECA Chapter Founding President", 
        `
• Led \\11\\ executives in planning and executing \\10\\ school-wide workshops and events with an average of \\42\\ student attendance
• Fundraised over \\$3000\\ in club fund and charity donations`
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