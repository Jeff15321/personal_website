import React, { useRef,useEffect, useState } from "react";

export const commands: string[] = ["help", "about-me", "experience", "project", "hobby", "hobbb","hobbee"];

export const scrollToBottom = (terminalRef: React.RefObject<HTMLDivElement>): void => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

export const fillInput = (input: string): React.ReactNode => {
  return <span>{input}</span>;
};

export const tab = (input: string, tabCounter: number, incrementTabCounter: () => void, resetTabCounter: () => void): string => {
  const parts = input.split(" ");
  const lastWord = parts[parts.length - 1];
  const potential = commands.filter((element) => element.startsWith(lastWord));
  const current_tab_counter = tabCounter;

  //tab_counter is responsible for cycling through the potential commands
  incrementTabCounter();
  if (current_tab_counter >= potential.length - 1) {
    resetTabCounter();
  }
  if (potential.length > 0) {
    return (
      parts.slice(0, parts.length - 1).join(" ") + 
      (parts.slice(0, parts.length - 1).join(" ").length > 0 ? " " : "") 
      + potential[current_tab_counter]);
  }
  return parts.slice(0, parts.length - 1).join(" ") + " ";
}

export const formatOutput = (output: string, keyword: string, setInput: any) => {
  const parts = output.split(keyword);
  
  return (
    <div>
      {parts.map((part, index) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 && (
            <span
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => setInput(keyword)}
            >
              {keyword}
            </span>
          )}
        </span>
      ))}
    </div>
  );
};


export const previousMusic = () => {
  alert("previous music");
  return true;
};

export const nextMusic = () => {
  alert("next music");
  return true;
};

export const playMusic = () => {
  alert("play music");
  return true;
};
