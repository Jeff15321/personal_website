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
• Improved perception processing time by \\91%\\ by refracting \\2000+\\ lines of \\Python\\ code into \\C++\\ and vectorized serialized calculations using \\Numpy\\, \\Eigen\\, and \\OpenCV\\. Translated to a \\4.6 km/h\\ increase during the test run.
• Improved cone detection accuracy by \\23%\\ by tuning the \\Ultralytics' YOLOv8\\ and the Hungarian Algorithm's cost functions based on camera and LIDAR detections.
• Implemented custom drivers, rectifying functions, and corrected camera publisher nodes in \\ROS\\ to implement fish eye lens integration that allowed 180-degree FOV coverage.`
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
• Led a group of \\11 executives\\ in planning \\10+\\ DECA competition workshops and business strategy lectures. Each event had an average turnout of \\42 people\\ with \\$100+\\ in sales from food and merchandise sold at the events.
• Gained over \\80+ active members\\ and collected \\$3000+\\ in club funds within the first 2 months through social media promotion, hosting popular events, and fostering meaningful connections with members.`
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