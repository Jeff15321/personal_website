import React, { useRef,useEffect, useState } from "react";
import { validateInput, scrollToBottom, formatOutput, tab } from "../utils/terminal_utils";
import { tab_counter } from "../utils/terminal_utils";

const Terminal: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<[React.ReactNode, boolean][]>([]);
  const [historyInput, setHistoryInput] = useState<string[]>([]);

  const [historyInputCounter, setHistoryInputCounter] = useState(0);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    const output = validateInput(trimmedInput, setInput);

    //updated history
    setHistory((prev) => [...prev, [<span>{trimmedInput}</span>, false]]);
    setHistory((prev) => [...prev, [output, true]]);
    setHistoryInput((prev) => [...prev, trimmedInput]);

    //set history input counter to the last index of history input
    //plus one because set variable is async so historyInput.length is not updated yet
    setHistoryInputCounter(historyInput.length + 1);

    //focus on input again and scroll to bottom
    inputRef.current?.focus();
    scrollToBottom(terminalRef);

    setInput(""); // Clear input after submission
  };

  //always focus on terminal input
  useEffect(() => {
    inputRef.current?.focus();
    const interval = setInterval(() => {
        inputRef.current?.focus();
    },100);

    return () => clearInterval(interval);
  }, []);

  //listen for when key is pressed
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [historyInputCounter]);

  useEffect(() => {
    scrollToBottom(terminalRef);
  }, [history]); 


  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setHistoryInputCounter(prev => {
        //check if historyInputCounter is out of bounds
        let newPrev = prev;
        if (historyInputCounter > 0) {
          newPrev = prev - 1;
        } else {
          newPrev = prev;
        }        
        const nextCommand = historyInput[newPrev];
        setInput(nextCommand || "");
        return newPrev;
      });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setHistoryInputCounter(prev => {
        let newPrev = prev;        
        if (historyInputCounter < historyInput.length) {
          newPrev = prev + 1;
        } else {
          newPrev = prev;
        } 
        const nextCommand = historyInput[newPrev];
        setInput(nextCommand || "");
        return newPrev;
      });
    } else if (e.key === "Tab") {
      e.preventDefault();
      setInput(tab(input, tab_counter));
    }
  };

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg w-full max-w-3xl text-wrap">
      <div ref={terminalRef} className="h-64 overflow-y-auto mb-4">
        <div> {formatOutput("Heyyyy, go ahead and type help in the terminal to see what you can do!", "help", setInput)}</div>
        {history.map((cmd, index) => (
          <div key={index} className="py-1">
            {cmd[1] ? null : <span className="text-green-400">JeffLu@portfolio: </span>}
            {cmd[0]}
          </div>
        ))}
        <div className="py-1">
            <form onSubmit={handleSubmit} className="flex">
                <span className="text-green-400">JeffLu@portfolio: </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  className="flex-1 bg-gray-900 text-white border-none outline-none ml-2"
                  />
                <span className="cursor"></span>
            </form>
        </div>
      </div> 
    </div>
  );
};

export default Terminal;