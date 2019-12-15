import React, { FC, FormEvent, useCallback } from 'react';
import { MAX_NUMBER_OF_COLUMNS } from './config';

type Props = {
  onChange: (columns: number) => void;
};

export const ColumnsControl: FC<Props> = ({ onChange }) => {
  const handleClick = useCallback(
    ({ currentTarget }: FormEvent<HTMLButtonElement>) => {
      const columns = Number(currentTarget.dataset.columns);
      onChange(columns);
    },
    [onChange],
  );
  return (
    <>
      {Array.from({ length: MAX_NUMBER_OF_COLUMNS }, (_b, i) => {
        const key = i + 1;
        return (
          <button key={key} onClick={handleClick} data-columns={key}>
            {key} column{i > 0 && 's'}
          </button>
        );
      })}
    </>
  );
};
