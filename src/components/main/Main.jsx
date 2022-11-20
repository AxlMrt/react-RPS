import React from "react";
import Player from "../player/Player";
import ComputerSelect from "./house/ComputerSelect";
import PlayerSelect from "./player/PlayerSelect";

function Main({ data, getComputerChoice, getPlayerChoice, computerChoice, playerChoice, resetGame, isWin, display, appearTime }) {
  return (
    <div>
      <div style={playerChoice !== "" ? { display: 'none' } : { display: 'block'}}>
        <Player
          data={data}
          handleClick={getComputerChoice}
          getPlayerChoice={getPlayerChoice}
          appearTime={appearTime}
        />
      </div>
      <div className="w-full flex justify-center" style={playerChoice == "" ? { display: 'none' } : { display: 'flex'}}>
        <div className="flex md:grid md:grid-cols-2">
          <div>
            <PlayerSelect playerChoice={playerChoice} isWin={isWin} display={display} />
          </div>
          <div className="flex flex-col items-center justify-center mx-10 gap-5 md:col-span-3 lg:m-4 sm:pt-20" style={{display: display}}>
            <h1 className="text-6xl uppercase text-center pt-16 md:pt-0">{isWin}</h1>
            <button onClick={resetGame} className="w-56 bg-white uppercase font-bold text-slate-600 tracking-widest py-3 rounded-xl">Play Again</button>
          </div>
          <div className="md:col-start-2 md:row-start-1 appear">
            <ComputerSelect computerChoice={computerChoice} isWin={isWin} display={display} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
