import React, { createContext, useContext, useState } from "react";

// Define the shape of the context
interface TabCounterContextType {
  tabCounter: number;
  incrementTabCounter: () => void;
  resetTabCounter: () => void;
}

// Create the context
const TabCounterContext = createContext<TabCounterContextType | undefined>(undefined);

// Create a provider component
export const TabCounterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tabCounter, setTabCounter] = useState(0);

  const incrementTabCounter = () => {
    setTabCounter((prev) => prev + 1);
  };

  const resetTabCounter = () => {
    setTabCounter(0);
  };

  return (
    <TabCounterContext.Provider value={{ tabCounter, incrementTabCounter, resetTabCounter }}>
      {children}
    </TabCounterContext.Provider>
  );
};

// Create a custom hook to use the context
export const useTabCounter = () => {
  const context = useContext(TabCounterContext);
  if (!context) {
    throw new Error("useTabCounter must be used within a TabCounterProvider");
  }
  return context;
}; 