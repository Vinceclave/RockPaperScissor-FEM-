import React from 'react';
import GameComponent from './GameComponent';

const App = () => {
  const choices = ['rock', 'paper', 'scissors'];

  return (
    <div className='min-h-screen min-w-[320px]   w-full bg-gray-800 flex flex-col items-center justify-center text-slate-200 px-4'>
      <GameComponent choices={choices} />
    </div>
  );
};

export default App;
