import { useState } from "react";
import "./App.css";

import React, { useRef } from "react";
import ReactDice, { ReactDiceRef } from "react-dice-complete";

function App() {
  const [playerDice, setPlayerDice] = useState();
  const [cpuDice, setCpuDice] = useState();
  const [winningText, setWinningText] = useState("test");
  // a variable for the cpu dice
  // variable for player dice
  // function for roll Dice

  const rollDice = (total, values) => {
    // const playerRoll = Math.ceil(Math.random() * 6);
    // const cpuRoll = Math.ceil(Math.random() * 6);

    const playerRoll = values[0];
    const cpuRoll = values[1];


    setPlayerDice(playerRoll);
    setCpuDice(cpuRoll);
    if (playerRoll > cpuRoll) {
      setWinningText("you won");
    }
    if (cpuRoll == playerRoll) {
      setWinningText("it's a tie");
    }
    if (playerRoll < cpuRoll) {
      setWinningText("you loose");
    }
  };

  const reactDice = useRef<ReactDiceRef>(null);

  const rollDone = (totalValue: number, values: number[]) => {
    console.log("individual die values array:", values);
    console.log("total dice value:", totalValue);
  };

  const rollAll = () => {
    reactDice.current?.rollAll();
  };

  return (
    <div>
      <h1>Dice Game vs CPU</h1>
      <button onClick={rollAll}>Roll Dice</button>

      <h6>Your Roll: {playerDice}</h6>
      <h6>CPU Roll: {cpuDice}</h6>

      <ReactDice numDice={2} ref={reactDice} rollDone={ rollDice} />
      <h3>{winningText}</h3>
    </div>
  );
}
export default App;
