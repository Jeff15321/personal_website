import React, { createContext, useContext, useState } from "react";

// Define the shape of the context
interface AnimationContextType {
  animation: [string, number];
  setAnimation: (animation: [string, number]) => void;
}

// Create the context
const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

// Create a provider component
export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [animation, setAnimation] = useState<[string, number]>(["", 0]);

  return (
    <AnimationContext.Provider value={{ animation, setAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
};

// Create a custom hook to use the context
export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error("useAnimation must be used within a AnimationProvider");
  }
  return context;
}; 