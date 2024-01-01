import React, { useState } from 'react';
import '../index.scss';

// NOTE: This just creates a console component. The console doesn't do anything yet.
const Console = () => {
  const [consoleLines, setConsoleLines] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // Process the command or log the input
      setConsoleLines((prevLines) => [...prevLines, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <div className="console-wrapper">
        {consoleLines.map((line, index) => (
          <div key={index} className="console-line">
            {line}
          </div>
        ))}
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleEnterPress}
        />
      </div>
    </div>
  );
};


export default Console;
