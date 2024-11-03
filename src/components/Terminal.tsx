import React, { useState } from "react";

const Terminal: React.FC = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      setHistory((prev) => [...prev, input]);
      setInput(""); // Clear input after submission
    }
  };

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg">
      <div className="h-64 overflow-y-auto mb-4">
        {history.map((cmd, index) => (
          <div key={index} className="py-1">
            <span className="text-green-400">user@terminal:</span> {cmd}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <span className="text-green-400">user@terminal:</span>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="flex-1 bg-gray-800 text-white border border-gray-700 rounded px-2 py-1 ml-2"
          placeholder="Type a command..."
        />
      </form>
    </div>
  );
};

export default Terminal;
