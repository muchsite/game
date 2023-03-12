import React from "react";
import Back from "../../src/images/bg-pentagon.svg";
import Paper from "../../src/images/icon-paper.svg";
import Rock from "../../src/images/icon-rock.svg";
import Scissors from "../../src/images/icon-scissors.svg";
import Lizard from "../../src/images/icon-lizard.svg";
import Spock from "../../src/images/icon-spock.svg";
function BigGame({ setRes, setChosen, setAiNum }) {
  const handlePaper = () => {
    setRes(false);
    setChosen(0);
    const num = Math.floor(Math.random() * 5);
    setAiNum(num);
  };
  const handleRock = () => {
    setRes(false);
    setChosen(1);
    const num = Math.floor(Math.random() * 5);
    setAiNum(num);
  };
  const handleSiccior = () => {
    setRes(false);
    setChosen(2);
    const num = Math.floor(Math.random() * 5);
    setAiNum(num);
  };
  const handleLizard = () => {
    setRes(false);
    setChosen(3);
    const num = Math.floor(Math.random() * 5);
    setAiNum(num);
  };
  const handleSpock = () => {
    setRes(false);
    setChosen(4);
    const num = Math.floor(Math.random() * 5);
    setAiNum(num);
  };

  return (
    <>
      <div className="bg_pentagon">
        <img src={Back} alt="" />
        <div className="bg_item paper" onClick={handlePaper}>
          <img src={Paper} alt="" />
        </div>
        <div className="bg_item rock" onClick={handleRock}>
          <img src={Rock} alt="" />
        </div>
        <div className="bg_item scissors" onClick={handleSiccior}>
          <img src={Scissors} alt="" />
        </div>
        <div className="bg_item lizard" onClick={handleLizard}>
          <img src={Lizard} alt="" />
        </div>
        <div className="bg_item spock" onClick={handleSpock}>
          <img src={Spock} alt="" />
        </div>
      </div>
    </>
  );
}

export default BigGame;
