import React, { useRef,useEffect, useState } from "react";
import { scrollToBottom, formatOutput, tab } from "../utils/terminal_utils";
import { useTabCounter } from "../contexts/TabCounterContext";
import { useTabInput } from "../contexts/TabInputContext";
import { commands } from "../utils/terminal_utils";
import { useAnimation } from "../contexts/AnimateContext";

interface TerminalProps {
  height: number;
  width: number;
}

const Terminal: React.FC<TerminalProps> = ({ height, width }) => {
  const inputRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  
  const { tabCounter, incrementTabCounter, resetTabCounter } = useTabCounter();
  const { tabInput, setTabInput } = useTabInput();
  const { animation, setAnimation } = useAnimation();

  const [input, setInput] = useState("");
  const [history, setHistory] = useState<[React.ReactNode, boolean][]>([]);
  const [historyInput, setHistoryInput] = useState<string[]>([]);
  const [historyInputCounter, setHistoryInputCounter] = useState(0);
  const [first_tab_checker, setFirstTabChecker] = useState(true);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    //update input value
    setInput(e.target.innerText);
  }

  const handleSubmit = () => {
    const inputElement = document.getElementById("terminal-input");
    if (inputElement) {
      inputElement.innerText = "";
    }

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

  const validateInput = (input: string, setInput: any): React.ReactNode => {
    input = input.trim();
    if (input === "") {
        return <span></span>;
    }
    if (input === "help") {
      const output: [string, string][] = [
        ["Type the red type in the terminal or mannually click it to launch the commands!", "red"], 
        ["\u00A0\u00A0\u00A0\u00A0about-me: learn about me!", "about-me"],
        ["\u00A0\u00A0\u00A0\u00A0experience: my software and leadership roles!", "experience"],
        ["\u00A0\u00A0\u00A0\u00A0project: mostly hackathon winners!", "project"],
        ["\u00A0\u00A0\u00A0\u00A0hobby: I have some sick hobbies!", "hobby"]
      ];
      return (
        <div>
          {output.map((line, index) => (
            <div key={index}>
              {formatOutput(line[0], line[1], setInput)}
            </div>
          ))}
        </div>
      );
    }
    if (input === "s") {
      const output: [string, string][] = [
        ["For sure! Here's TimeTable Sweetie~", "TimeTable Sweetie"]
      ];
      setAnimation(["TimeTable Sweetie", 0]);
      return (
        <div>
          {output.map((line, index) => (
            <div key={index}>
              {formatOutput(line[0], line[1], setInput)}
            </div>
          ))}
        </div>
      );
    }

    return <span>{input + ": command not found"}</span>;
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
      // Save current cursor position
      const selection = window.getSelection();
      const range = selection?.getRangeAt(0);
      let cursorPosition = 0;

      if (range && inputElement) {
        cursorPosition = range.startOffset;
      }

      // Update the input text
      inputElement.innerText = input;

      // Restore cursor position after text update
      setTimeout(() => {
        if (inputElement && inputElement.firstChild) {
          const textNode = inputElement.firstChild;
          const range = document.createRange();
          range.setStart(textNode, cursorPosition);
          range.setEnd(textNode, cursorPosition);

          const selection = window.getSelection();
          selection?.removeAllRanges();
          selection?.addRange(range);
        }
      }, 0);
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

    scrollToBottom(terminalRef);
    return () => window.removeEventListener("keydown", handleKeyDown);
    
  }, [history, input]);

  //TODO: move cursor doesn't work, also, if user presses tab then presses right arrow key, undefine is returned, fix it
  const moveCursorToEnd = () => {
    const inputElement = document.getElementById("terminal-input");
    if (inputElement) {
      // Set the content only if it hasn't been updated already
      inputElement.innerText = input;
  
      // Use setTimeout to give the browser a moment to update the content
      setTimeout(() => {
        const selection = window.getSelection();
        const range = document.createRange();
  
        // Select the entire content of the input element
        range.selectNodeContents(inputElement);
        range.collapse(false);  // Collapse the range to the end (i.e., cursor at the end)
  
        // Remove any previous selection and add the new range
        selection?.removeAllRanges();
        selection?.addRange(range);
      }, 0);
    }
  };

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
      moveCursorToEnd();
    }
  };

  return (
    <div ref={terminalRef} className="parent-container" style={{height: `${height}%`, width: `${width}%`}}>
      <div className="text-wrap terminal">
        <div className="hide-scrollbar">
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