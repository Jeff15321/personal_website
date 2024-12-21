import React, { useRef,useEffect, useState } from "react";
import { formatOutput, tab } from "../utils/terminal_utils";
import { useTabCounter } from "../contexts/TabCounterContext";
import { useTabInput } from "../contexts/TabInputContext";
import { commands } from "../utils/terminal_utils";
import { useAnimation } from "../contexts/AnimateContext";
import { useRapidChecker } from "../contexts/RapidChecker";
import { animation_time, Is_in_project } from "./BentoPage";
import Experience from "./Experience";
import { useIsAboutMe } from "../contexts/IsAboutMeContext";

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
  const { rapidInputCounter, setRapidInputCounter } = useRapidChecker();

  const { isAboutMe, setIsAboutMe } = useIsAboutMe();

  const handleInputChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    //update input value
    setInput(e.target.innerText);
  }


  // const checkRapidInput = () => {
  //   setRapidInputCounter((prev: [number, number]) => [prev[0] + 1, performance.now()]); 

  //   if (rapidInputCounter[0] >= 1) {
  //     return true;
  //   }

  //   if (rapidInputCounter[1]) {
  //     clearTimeout(rapidInputCounter[1]);
  //   }
  //   setTimeout(() => {
  //     setRapidInputCounter([0, 0]);
  //   }, animation_time[animation[0] as keyof typeof animation_time]);
  //   return false;
  // }
  
  // const HandleRapidTimerFinish = (timer_time: number) => {
  //   const currentTime = performance.now();
  //   setTimeout(() => {
  //     const output = <span>Thanks for the wait! Go ahead and type in the terminal!</span>;

  //     setRapidInputCounter([0, 0]);

  //     setHistory((prev) => [...prev, [output, true]]);
  //     inputRef.current?.focus();
  //     scrollToBottom(terminalRef);
  //   }, timer_time - (currentTime - rapidInputCounter[1]));
  // }

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
    scrollToBottom(terminalRef, 0);

    setInput(""); // Clear input after submission
  };

  const scrollToBottom = (terminalRef: React.RefObject<HTMLDivElement>, timeout: number): void => {
    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }, timeout);
  };
  const validateInput = (input: string, setInput: any): React.ReactNode => {
    input = input.trim();
    if (input === "") {
        return <span></span>;
    }

    // if (checkRapidInput()) {
    //   HandleRapidTimerFinish(animation_time[animation[0] as keyof typeof animation_time]);
    //   return <span>Woah! I understand the excitement but the page isn't loaded yet!!</span>;
    // }
    let output: [string, string][] = [["", ""]];

    if (input === "help") {
      output = [
      ["Type the red text in the terminal or mannually click on the text to launch the commands!\n(You can press Tab to autocomplete and Up Arrow to see previous commands👍)", "red"], 
        ["\u00A0\u00A0\u00A0\u00A0about-me: learn about me!", "about-me"],
        ["\u00A0\u00A0\u00A0\u00A0experience: my software and leadership roles!", "experience"],
        ["\u00A0\u00A0\u00A0\u00A0project: mostly hackathon winners!", "project"],
        ["\u00A0\u00A0\u00A0\u00A0home: go back to terminal page!!", "home"],
        ["\u00A0\u00A0\u00A0\u00A0devpost: look at my hackathon winners!", "devpost"],
        ["\u00A0\u00A0\u00A0\u00A0github: look at my projects in detail!", "github"],
        ["\u00A0\u00A0\u00A0\u00A0linkedin: look at my experiences in detail!", "linkedin"],
        ["\u00A0\u00A0\u00A0\u00A0resume: more about me!", "resume"]
      ];

    } else if (input === "ls") {
      output = [
      ["about-me\u00A0\u00A0\u00A0\u00A0\u00A0experience\u00A0\u00A0\u00A0\u00A0\u00A0project\u00A0\u00A0\u00A0\u00A0\u00A0home\u00A0\u00A0\u00A0\u00A0\u00A0devpost\u00A0\u00A0\u00A0\u00A0\u00A0github\u00A0\u00A0\u00A0\u00A0\u00A0linkedin\u00A0\u00A0\u00A0\u00A0\u00A0resume", "red"],
      ];

    } else if (input === "project") {
      output = [
        ["Type next or prev to see the other projects!", "next prev"]
      ];
      setAnimation(["TimeTable Sweetie", 0]);
      scrollToBottom(terminalRef, 750);
      
    } else if (input === "about-me") {
      scrollToBottom(terminalRef, 750);
      output = [
        ["Redirectly to About Me Page...", ""]
      ];

      const bentoContainerWrapper = document.getElementById("bento-container-wrapper");
      if (bentoContainerWrapper) {
        bentoContainerWrapper.animate([
          {opacity: 1},
          {opacity: 0.5, transform: "translate(-180%, -120%)"}
        ], {duration: 1000, fill: "forwards", easing: "cubic-bezier(0.4, 0, 0.2, 1)"});
      }
      setIsAboutMe(true);

    } else if (input === "experience") {     
      setAnimation(["experience", 0]);
      
      return <Experience />
    
    } else if (input === "home") {
      scrollToBottom(terminalRef, 750);
      output = [
        ["Welcome back~", ""]
      ];
      setAnimation(["revert", 0]);
     
    } else if (input === "next") {
      if (Is_in_project()) {
        setAnimation(["Next_Song", 0]);
        output = [
          ["Next Project!🚀",""],
        ];
      } else {
        setAnimation(["TimeTable Sweetie", 0]);
        output = [
          ["Really? Next Page? Buddy you're not even in the project page! Let me bring you there~",""],
        ];
      }
    } else if (input === "prev") {
      if (Is_in_project()) {  
        setAnimation(["Previous_Song", 0]);
        output = [
          ["Previous Project!🚀",""],
        ];
      } else {
        setAnimation(["TimeTable Sweetie", 0]);
        output = [
          ["Really? Previous Page? Buddy you're not even in the project page! Let me bring you there~",""],
        ];
      }
    } else if (input === "github") {
      window.open("https://github.com/Jeff15321", "_blank");
      output = [
        ["Pretty amazing huh? I'm glad you're interested in my projects!👨‍💻✨",""],
      ];
    } else if (input === "linkedin") {
      window.open("https://www.linkedin.com/in/jeff-lu-8b3121281/", "_blank");
      output = [
        ["Hey did you remember to connect with me on linkedin? If not do it now! 😠",""],
      ];
    } else if (input === 'resume') {
      window.open("https://www.canva.com/design/DAGRikqvQqA/QQ_-nwEnHwYnqMCMtDH33w/edit?utm_content=DAGRikqvQqA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", "_blank");
      output = [
        ["Yes... I wrote my resume in Canva... stop judging... 🙄",""],
      ];
    } else if (input === "devpost") {
      window.open("https://devpost.com/jeff-lu234?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav", "_blank");
      output = [
        ["Be sure to try out my projects on devpost! 😊",""],
      ];
    } else if (input === "clear") {
      setHistory([]);

      output = [
        ["Terminal cleared! ✨",""],
      ];

    } else if (input.startsWith("cd")) {
      output = [
        ["Change directory? Everything you need is right here! 🏠",""],
      ];
    } else if (input === "pwd") {
      output = [
        ["You are here: C:/Users/jeff/is/smart/handsome/creative/outgoing/kind/and/great_to_hire_as_intern 🗺️",""],
      ];
    } else if (input === "mkdir") {
      output = [
        ["Creating directories? NOT ON MY WATCH! 🏗️",""],
      ];
    } else if (input.startsWith("rm")) {
      output = [
        ["Hey! Don't try to delete my stuff! 🚫",""],
      ];
    } else if (input.startsWith("cp")) {
      output = [
        ["Copy what? My amazing personality? 😎",""],
      ];
    } else if (input.startsWith("mv")) {
      output = [
        ["Nothing to move here - everything's perfectly placed! ✨",""],
      ];
    } else if (input.startsWith("cat")) {
      output = [
        ["🐱 Meow!",""],
      ];
    } else if (input.startsWith("grep")) {
      output = [
        ["Stop trying to be so extra! 🔍",""],
      ];
    } else if (input.startsWith("chmod")) {
      output = [
        ["Nice try, but these permissions are staying as they are! 🔒",""],
      ];
    } else if (input.startsWith("sudo")) {
      output = [
        ["Even with sudo, you can't tell me what to do! 😤",""],
      ];
    } else if (input.startsWith("ping")) {
      output = [
        ["Pong! 🏓 (But seriously, I'm right here!)",""],
      ];
    } else if (input.startsWith("man")) {
      output = [
        ["Need help? Try typing 'help' instead! 📚","help"],
      ];
    } else if (input.startsWith("touch")) {
      output = [
        ["No touching! This is a look-only portfolio! 🚫👆",""],
      ];
    } else if (input.startsWith("wget")) {
      output = [
        ["Want to download something? Check out my GitHub! 💾",""],
      ];
    } else if (input.startsWith("ssh")) {
      output = [
        ["Sorry, no SSH access here - but feel free to browse around! 🔐",""],
      ];
    } else if (input.startsWith("top")) {
      output = [
        ["I'm already at the top of my game! 📊",""],
      ];
    } else if (input.startsWith("kill")) {
      output = [
        ["No need to get so violent! 🚫",""],
      ];
    } else if (input === "history") {
      output = [
        ["Bro why would you even type that... 📜",""],
      ];
    } else {
      output = [
        [`${input}: command not found`,""],
      ];
    }

    return (
      <div>
        {output.map((line, index) => (
          <div key={index}>
            {formatOutput(line[0], line[1], setInput)}
          </div>
        ))}
      </div>
    );
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

    scrollToBottom(terminalRef, 0);
    return () => window.removeEventListener("keydown", handleKeyDown);
    
  }, [history, input]);
          

  //TODO: move cursor doesn't work, also, if user presses tab then presses right arrow key, undefine is returned, fix it
  const moveCursorToEnd = () => {
    const inputElement = document.getElementById("terminal-input");
    if (inputElement) {
      // Ensure the input text is up to date
      inputElement.innerText = input;
  
      // Use setTimeout to allow React updates to complete before moving the cursor
      setTimeout(() => {
        const selection = window.getSelection();
        const range = document.createRange();
  
        // Collapse the range to the end of the element's text
        range.selectNodeContents(inputElement);
        range.collapse(false);
  
        // Clear any existing selections and apply the new range
        selection?.removeAllRanges();
        selection?.addRange(range);
      }, 0);
    }
  };
  

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key !== "Tab") {
      setFirstTabChecker(true);
      resetTabCounter();
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
    <div className="parent-container" style={{height: `${height}%`, width: `${width}%`}}>
      <div className="text-wrap terminal">
        <div ref={terminalRef} className="hide-scrollbar">
          <div> {formatOutput("Heyyyy, go ahead and type help in the terminal to see what you can do! (remember to press enter to submit)", "help", setInput)}</div>
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