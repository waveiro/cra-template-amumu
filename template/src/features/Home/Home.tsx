import React from 'react';
import './Home.scss';
import { Counter } from './components/Counter/Counter';
import { useAppSelector } from '../../hooks/store';
import {
  decrement,
  increment,
  selectCount
} from './store';

function Home() {
  const count = useAppSelector(selectCount);

  return (
    <div className="wrapper">
      <h1>
        Hello!
      </h1>

      <Counter decrement={decrement} increment={increment} count={count} />
    </div>
  );
}

export default Home;
