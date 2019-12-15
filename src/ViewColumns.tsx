import React, { FC, useState, useMemo } from 'react';
import './ViewColumns.css';
import { ContentEditable } from './ContentEditable';
import { ColumnsControl } from './ColumnsControl';

type Props = {
  text: string;
};

const NUMBER_OF_COLUMNS = 1;

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

export const ViewColumns: FC<Props> = ({ text }) => {
  const [actualText, setActualText] = useState(text);
  const [cacheText, setCacheText] = useState(text);
  const [columnsAmount, setColumnsAmount] = useState(NUMBER_OF_COLUMNS);
  const texts = useMemo(() => divideTextByColumns(actualText, columnsAmount), [
    actualText,
    columnsAmount,
  ]);

  const handleChangeText = (newText: string, index: number) => {
    const result = [...texts];
    result[index] = newText;
    setCacheText(result.join(' '));
  };

  const handleColumnsClick = (columnsAmount: number) => {
    setActualText(cacheText);
    setColumnsAmount(columnsAmount);
  };

  return (
    <>
      <ColumnsControl onChange={handleColumnsClick} />
      <div className="ViewColumns">
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
