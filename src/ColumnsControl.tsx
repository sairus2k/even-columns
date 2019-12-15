import React, { FC, FormEvent, useCallback } from 'react';

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
      <button onClick={handleClick} data-columns={1}>
        1 column
      </button>
      <button onClick={handleClick} data-columns={2}>
        2 columns
      </button>
      <button onClick={handleClick} data-columns={3}>
        3 columns
      </button>
    </>
  );
};
