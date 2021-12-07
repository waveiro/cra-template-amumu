import React from 'react';

import { useAppDispatch } from '../../../../hooks/store';

interface CounterProps {
  decrement: () => any,
  increment: () => any,
  count: Number
}

export function Counter({ count, increment, decrement }: CounterProps) {
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span>{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
}
