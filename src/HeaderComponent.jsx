import React from 'react';

const HeaderComponent = ({ choices, score }) => {
  return (
    <div className='mt-8 mb-auto w-full max-w-[50rem] px-4 py-4 border-slate-700 rounded-md  border-4 flex justify-between items-center'>
      <h1 className='flex flex-col leading-[1.2rem] text-2xl uppercase font-semibold'>
        {choices.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </h1>
      <div className='b bg-zinc-200   text-zinc-700 font-mono px-6 py-2 flex flex-col text-center text-4xl rounded-md'>
        <span className='text-xs uppercase font-semibold tracking-wider'>score </span>
        {score}
      </div>
    </div>
  );
};

export default HeaderComponent;
