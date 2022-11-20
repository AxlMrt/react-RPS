import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import data from './data';

function App() {
  const [score, setScore] = React.useState(0);
  const [computerChoice, setComputerChoice] = React.useState("");
  const [playerChoice, setPlayerChoice] = React.useState("");
  const [isWin, setIsWin] = React.useState("");
  const [display, setDisplay] = React.useState('none');

  function getComputerChoice() {
    const random = Math.floor(Math.random()*data.length);
    return setComputerChoice(data[random]);
  }

  function getPlayerChoice(choice) {
    setPlayerChoice(choice);
  }

  function appearTime(){
    setTimeout(() => setDisplay('flex'), 2000);
  }

  function resetGame() {
    setPlayerChoice("");
    setComputerChoice("");
    setIsWin("");
    setDisplay('none');
  }

  React.useEffect(() => {
    if (playerChoice && computerChoice){
        if (playerChoice.sign === "rock" && computerChoice.sign === "scissors" || playerChoice.sign === "rock" && computerChoice.sign === "lizard") {
          setScore((score) => score + 1);
          setIsWin("You win");
        }
        if (playerChoice.sign === "paper" && computerChoice.sign === "rock" || playerChoice.sign === "paper" && computerChoice.sign === "spock") {
          setScore((score) => score + 1);
          setIsWin("You win");
        }
        if (playerChoice.sign === "scissors" && computerChoice.sign === "paper" || playerChoice.sign === "scissors" && computerChoice.sign === "lizard") {
          setScore((score) => score + 1);
          setIsWin("You win");
        }
        if (playerChoice.sign === "lizard" && computerChoice.sign === "spock" || playerChoice.sign === "lizard" && computerChoice.sign === "paper") {
          setScore((score) => score + 1);
          setIsWin("You win");
        }
        if (playerChoice.sign === "spock" && computerChoice.sign === "scissors" || playerChoice.sign === "spock" && computerChoice.sign === "rock") {
          setScore((score) => score + 1);
          setIsWin("You win");
        }
        if (computerChoice.sign === "rock" && playerChoice.sign === "scissors" || computerChoice.sign === "rock" && playerChoice.sign === "lizard") return setIsWin("You lose");
        if (computerChoice.sign === "paper" && playerChoice.sign === "rock" || computerChoice.sign === "paper" && playerChoice.sign === "spock") return setIsWin("You lose");
        if (computerChoice.sign === "scissors" && playerChoice.sign === "paper" || computerChoice.sign === "scissors" && playerChoice.sign === "lizard") return setIsWin("You lose");
        if (computerChoice.sign === "lizard" && playerChoice.sign === "spock" || computerChoice.sign === "lizard" && playerChoice.sign === "paper") return setIsWin("You lose");
        if (computerChoice.sign === "spock" && playerChoice.sign === "scissors" || computerChoice.sign === "spock" && playerChoice.sign === "rock") return setIsWin("You lose");
        if (computerChoice.sign === playerChoice.sign) return setIsWin("It's a tie")
    }
  }, [playerChoice, computerChoice]);

  return (
    <div className="min-w-screen min-h-screen flex flex-col py-11">
      <Header score={score} />
      <Main
        data={data}
        getComputerChoice={getComputerChoice}
        getPlayerChoice={getPlayerChoice}
        computerChoice={computerChoice}
        playerChoice={playerChoice}
        resetGame={resetGame}
        isWin={isWin}
        display={display}
        appearTime={appearTime}
      />
    </div>
  );
}

export default App
