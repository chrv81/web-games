import * as React from 'react';
import { useStore } from 'zustand';

import { useGameStore } from '../store';

type HeaderProps = {
  isLoseGame: boolean;
  isGameWin: boolean;
  resetHandler: () => void;
};

const Header = (props: HeaderProps): JSX.Element => {
  const { correctNumber } = useStore(useGameStore);

  const { isLoseGame, isGameWin, resetHandler } = props;
  const showNumber = isLoseGame || isGameWin ? correctNumber : '?';

  return (
    <header className='m-6'>
      <div className='flex flex-col items-center justify-between md:flex-row'>
        <button className='btn' onClick={resetHandler}>
          {isLoseGame ? 'Reset' : 'Again!'}
        </button>
        <p className='mt-4 md:mt-0'>(Between 1 and 20)</p>
      </div>
      <div className='flex flex-col items-center justify-between w-full mt-20 text-center'>
        <h1 className=''>Guess A Number!</h1>
        <div className='box'>{showNumber}</div>
      </div>
    </header>
  );
};

export default Header;
