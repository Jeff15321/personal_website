import React, { useRef,useEffect, useState } from "react";

export const commands: string[] = ["help", "home", "about-me", "experience", "project", "next", "prev", "github", "linkedin", "resume"];

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
    console.log("wrong1", current_tab_counter, potential)

    resetTabCounter();
  }
  console.log("counter", current_tab_counter)
  if (potential.length > 0) {
    return (
      parts.slice(0, parts.length - 1).join(" ") + 
      (parts.slice(0, parts.length - 1).join(" ").length > 0 ? " " : "") 
      + potential[current_tab_counter]);
  }
  return parts.slice(0, parts.length - 1).join(" ") + " ";
}

export const formatOutput = (output: string, keyword: string, setInput: any) => {
  const keyword_list = keyword.split(" ");

  const regex = new RegExp(keyword_list.join("|"), "g");

  const parts = output.split(regex);
    
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
              {keyword_list[index]}
            </span>
          )}
        </span>
      ))}
    </div>
  );
};

