import React, { FC, FormEvent, useCallback } from 'react';

type Props = {
  text: string;
  index: number;
  onChange: (text: string, index: number) => void;
};

export const ContentEditable: FC<Props> = ({ index, text, onChange }) => {
  const emitChange = useCallback(
    ({ currentTarget }: FormEvent<HTMLParagraphElement>) => {
      onChange(currentTarget.innerText, index);
    },
    [index, onChange],
  );

  return (
    <p onInput={emitChange} contentEditable suppressContentEditableWarning>
      {text}
    </p>
  );
};
