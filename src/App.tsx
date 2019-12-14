import React, { FC } from 'react';
import './App.css';
import { text as initialText } from './mock';

const NUMBER_OF_COLUMNS = 3;

export const App: FC = () => {
  let text = initialText;
  const quotient = Math.round(text.length / 3);
  const columns = Array.from({ length: NUMBER_OF_COLUMNS }, (_c, index) => {
    if (index + 1 === NUMBER_OF_COLUMNS) {
      return text;
    }
    const lastIndex = text.lastIndexOf(' ', quotient);
    const columnText = text.substring(0, lastIndex);
    text = text.substring(lastIndex + 1);
    return columnText;
  });

  return (
    <div className="App">
      {columns.map(column => (
        <p key={column.substring(0, 10)} contentEditable>
          {column}
        </p>
      ))}
    </div>
  );
};
