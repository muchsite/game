import React from "react";
import Paper from "../src/images/icon-paper.svg";
import Rock from "../src/images/icon-rock.svg";
import Scissors from "../src/images/icon-scissors.svg";
import Back from "../src/images/bg-triangle.svg";
function Game({ setChosen, setOpen, setAiNum }) {
  const handPaper = () => {
    setChosen(0);
    setOpen(false);
    const num = Math.floor(Math.random() * 3);
    setAiNum(num);
  };
  const handRock = () => {
    setChosen(1);
    setOpen(false);
    const num = Math.floor(Math.random() * 3);
    setAiNum(num);
  };
  const handScissors = () => {
    setChosen(2);
    setOpen(false);
    const num = Math.floor(Math.random() * 3);
    setAiNum(num);
  };
  return (
    <div className="game_cont">
      <img src={Back} alt="" />
      <div className="game_item Paper" onClick={handPaper}>
        <img src={Paper} alt="" />
      </div>
      <div className="game_item Rock" onClick={handRock}>
        <img src={Rock} alt="" />
      </div>
      <div className="game_item Scissors" onClick={handScissors}>
        <img src={Scissors} alt="" />
      </div>
    </div>
  );
}

export default Game;
