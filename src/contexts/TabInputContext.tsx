import React, { createContext, useContext, useState } from "react";

// Define the shape of the context
interface TabInputContextType {
  tabInput: string;
  setTabInput: (input: string) => void;
}

// Create the context
const TabInputContext = createContext<TabInputContextType | undefined>(undefined);

// Create a provider component
export const TabInputProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tabInput, setTabInput] = useState("");

  return (
    <TabInputContext.Provider value={{ tabInput, setTabInput }}>
      {children}
    </TabInputContext.Provider>
  );
};

// Create a custom hook to use the context
export const useTabInput = () => {
  const context = useContext(TabInputContext);
  if (!context) {
    throw new Error("useTabInput must be used within a TabInputProvider");
  }
  return context;
}; 