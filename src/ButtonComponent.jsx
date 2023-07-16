import React from 'react';


const ButtonComponent = ({ choices, choicesImages, handlePlayerChoice }) => {
 

  const handleButtonClick = (value) => {
    handlePlayerChoice(value); // Call the handlePlayerChoice function with the selected choice
  };

  const getButtonStyle = (choice) => {
    switch (choice) {
      case 'rock':
        return 'border-red-500';
      case 'paper':
        return 'border-blue-500';
      case 'scissors':
        return 'border-green-500';
      default:
        return '';
    }
  };

  return (
    <div className='py-6 mb-auto flex flex-wrap justify-center gap-10 max-w-[50rem] mx-auto'>
      {choices.map((item) => (
        <button
          key={item}
          onClick={() => handleButtonClick(item)}
          className={`transition-all duration-300 bg-slate-200 p-10 border-[10px] rounded-full ${getButtonStyle(item)}`}
          style={{
            boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          <img src={choicesImages[item]} alt={item} />
        </button>
      ))}
    </div>
  );
};

export default ButtonComponent;
