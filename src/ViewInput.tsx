import React, { FC, FormEvent, useCallback, useState } from 'react';
import './ViewInput.css';
import { text as loremText } from './mock';

type Props = {
  onSubmit: (text: string) => void;
};

export const ViewInput: FC<Props> = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleTextChange = useCallback(
    ({ currentTarget }: FormEvent<HTMLTextAreaElement>) => {
      setText(currentTarget.value);
    },
    [],
  );

  const handleLayoutClick = useCallback(() => {
    onSubmit(text);
  }, [onSubmit, text]);

  const handleLoremClick = useCallback(() => {
    setText(loremText);
  }, []);

  return (
    <div className="ViewInput">
      <button onClick={handleLayoutClick}>Layout</button>
      <button onClick={handleLoremClick}>Lorem</button>
      <textarea onChange={handleTextChange} value={text} />
    </div>
  );
};
