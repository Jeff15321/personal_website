import React, { createContext, useContext, useState } from "react";

// Define the shape of the context
interface RapidCheckerContextType {
  rapidInputCounter: [number, NodeJS.Timeout | null];
  setRapidInputCounter: (rapidInputCounter: any) => void;
}

// Create the context
const RapidCheckerContext = createContext<RapidCheckerContextType | undefined>(undefined);

// Create a provider component
export const RapidCheckerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [rapidInputCounter, setRapidInputCounter] = useState<[number, NodeJS.Timeout | null]>([0, null]);

  return (
    <RapidCheckerContext.Provider value={{ rapidInputCounter, setRapidInputCounter }}>
      {children}
    </RapidCheckerContext.Provider>
  );
};

// Create a custom hook to use the context
export const useRapidChecker = () => {
    const context = useContext(RapidCheckerContext);
  if (!context) {
    throw new Error("useRapidChecker must be used within a RapidCheckerProvider");
  }
  return context;
}; 