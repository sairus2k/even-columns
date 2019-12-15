import React, { FC, useState } from 'react';
import './App.css';
import { text as initialText } from './mock';
import { ContentEditable } from './ContentEditable';

const NUMBER_OF_COLUMNS = 3;

const divideTextByColumns = (text: string, columnsAmount: number) => {
  const quotient = Math.round(text.length / columnsAmount);
  return Array.from({ length: columnsAmount }, (_c, index) => {
    if (index + 1 === columnsAmount) {
      return text;
    }
    const lastIndex = text.lastIndexOf(' ', quotient);
    const columnText = text.substring(0, lastIndex);
    text = text.substring(lastIndex + 1);
    return columnText;
  });
};

export const App: FC = () => {
  const [actualText, setActualText] = useState(initialText);
  const [cacheText, setCacheText] = useState(initialText);
  const texts = divideTextByColumns(actualText, NUMBER_OF_COLUMNS);

  const handleChangeText = (newText: string, index: number) => {
    const result = [...texts];
    result[index] = newText;
    setCacheText(result.join(' '));
  };

  const handleUpdateText = () => {
    setActualText(cacheText);
  };

  return (
    <>
      <button onClick={handleUpdateText}>Update</button>
      <div className="App">
        {texts.map((text, index) => (
          <ContentEditable
            key={text.substring(0, 10)}
            index={index}
            text={text}
            onChange={handleChangeText}
          />
        ))}
      </div>
    </>
  );
};
