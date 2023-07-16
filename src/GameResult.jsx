const GameResult = ({ playersChoice, choicesImages, computersChoice, gameResult, handlePlayAgain }) => {
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
      <div className='py-6 mb-auto flex flex-wrap justify-center items-center flex-col sm:flex-row gap-10 max-w-[50rem] mx-auto'>
        <div
          className={`transition-all duration-300 bg-slate-200 p-10 border-[10px] ${getButtonStyle(playersChoice)} rounded-full`}
          style={{
            boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          <img src={choicesImages[playersChoice]} alt={playersChoice} />
        </div>
        <div className="text-center">
          <p className="text-slate-200 text-lg mb-2">{gameResult}</p>
            <button
            onClick={handlePlayAgain}
            className="bg-slate-200 text-zinc-700 px-10 py-2  font-bold uppercase rounded-md "
            >
            Play Again
            </button>
        </div>
        <div
          className={`transition-all duration-300 bg-slate-200 p-10 border-[10px] ${getButtonStyle(computersChoice)} rounded-full`}
          style={{
            boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          <img src={choicesImages[computersChoice]} alt={computersChoice} />
        </div>
      </div>
    );
  };
  
  export default GameResult;
  