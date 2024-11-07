import React, { useRef,useEffect, useState } from "react";
import { validateInput, scrollToBottom, formatOutput, tab } from "../utils/terminal_utils";
import { useTabCounter } from "../contexts/TabCounterContext";
import { useTabInput } from "../contexts/TabInputContext";

interface TerminalProps {
  height: number;
  width: number;
}

const Terminal: React.FC<TerminalProps> = ({ height, width }) => {
  const inputRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  
  const { tabCounter, incrementTabCounter, resetTabCounter } = useTabCounter();
  const { tabInput, setTabInput } = useTabInput();

  const [input, setInput] = useState("");
  const [history, setHistory] = useState<[React.ReactNode, boolean][]>([]);
  const [historyInput, setHistoryInput] = useState<string[]>([]);
  const [historyInputCounter, setHistoryInputCounter] = useState(0);
  const [first_tab_checker, setFirstTabChecker] = useState(true);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    //update input value
    setInput(e.target.innerText);
    console.log(e.target.innerText);
  }



  const handleSubmit = () => {

    const inputElement = document.getElementById("terminal-input");
    if (inputElement) {
      inputElement.innerText = "";
    }
    console.log(inputElement?.innerText);

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

  useEffect(() => {
    //always focus on terminal input
    inputRef.current?.focus();
    const interval = setInterval(() => {
        inputRef.current?.focus();
    },100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const inputElement = document.getElementById("terminal-input");
    if (inputElement) {
      inputElement.innerText = input;
    }
  }, [input]);

  //listen for when key is pressed
  useEffect(() => {
    //make sure input isn't in the next line
    const inputElement = document.getElementById("terminal-input");
    if (inputElement?.innerText.trim() === "") {
      inputElement.innerText = "";
    }

    //updates listener and recalls handleKeyDown whenever input changes
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [historyInputCounter, input]);

  useEffect(() => {
    scrollToBottom(terminalRef);
  }, [history]); 


  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key !== "Tab") {
      setFirstTabChecker(true);
    }

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
      if (first_tab_checker) {
        setTabInput(input);
        //pass input because tabInput is not updated yet
        setInput(tab(input, tabCounter, incrementTabCounter, resetTabCounter));
        setFirstTabChecker(false);
      } else {
        setInput(tab(tabInput, tabCounter, incrementTabCounter, resetTabCounter));
      }
    } else if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div ref={terminalRef} className="parent-container" style={{height: `${height}%`, width: `${width}%`}}>
      <div className="text-wrap terminal">
        <div className="">
          <div> {formatOutput("Heyyyy, go ahead and type help in the terminal to see what you can do!", "help", setInput)}</div>
          {history.map((cmd, index) => (
            <div key={index} className="py-1">
              {cmd[1] ? null : <span className="text-green-400">JeffLu@portfolio: </span>}
              {cmd[0]}
            </div>
          ))}
          <div className="py-1">
            <span 
              className="text-green-400"
            >
                JeffLu@portfolio:&nbsp;
            </span>
            <span
              id="terminal-input"
              ref={inputRef}
              className="styled-textarea"
              contentEditable
              onInput={handleInputChange}
              suppressContentEditableWarning={true}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;