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
• Transforming perception software from Python into C++ and vectorized serialized calculations to minimize computation time
• Writing customer drivers using C++ or Python to integrate new hardware
• Skilled in sensor integration, data analysis, and real-time systems.`
    ],
    [
        "09/2022 - 06/2024",
        "Sonata Music", 
        "Guitar Teacher", 
        `
• Worked 15 hours weekly and taught classical guitar from levels 1 to 8.
• Wrote over 30 easier guitar covers of popular music from student's requests`
    ],
    [   
        "07/2023 - 04/2024",
        "International Public Health Internship", 
        "Workshop Team Lead", 
        `
• Led a group of 5 students and conducted comprehensive research on prevalent health issues in Nigeria
• Implemented 3 workshops related to Marasmus prevention that benefited over 200 locals
• Conducted weekly meetings with local health instructors to organize events and learn about pressing local health concerns`
    ],
    [
        "09/2023 - 06/2024",
        "Agincourt C.I.", 
        "DECA Chapter Founding President", 
        `
• Led 11 executives in planning and executing over 10 school-wide workshops and events with an average of 42 student attendance
• Monitored project planning, tracked expenses, prepared financial reports
• Fundraised over 3000 dollars in club fund and charity donations`
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