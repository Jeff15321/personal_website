

export const validateInput = (input: string): string => {
    input = input.trim();
    if (input === "") {
        return "";
    }
    if (input === "hi") {
        return "Hello! How can I assist you today?";
    }
    return input + ": command not found";
};

export const scrollToBottom = (terminalRef: React.RefObject<HTMLDivElement>): void => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };