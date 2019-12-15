import React, { FC, useState } from 'react';
import './App.css';
import { ViewColumns } from './ViewColumns';
import { ViewInput } from './ViewInput';

type View = 'input' | 'columns';

export const App: FC = () => {
  const [view, setView] = useState<View>('input');
  const [text, setText] = useState('');

  const handleSubmit = (text: string) => {
    setText(text);
    setView('columns');
  };

  const views: { [key in View]: JSX.Element } = {
    input: <ViewInput onSubmit={handleSubmit} />,
    columns: <ViewColumns text={text} />,
  };

  return <div className="App">{views[view]}</div>;
};
