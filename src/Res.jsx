import React, { useEffect } from "react";
import { useState } from "react";
import Paper from "../src/images/icon-paper.svg";
import Rock from "../src/images/icon-rock.svg";
import Scissors from "../src/images/icon-scissors.svg";
function Res({ chosen, aiNum, score, setScore, setOpen }) {
  const [textRes, setTextRes] = useState("asd");
  const imageArr = [Paper, Rock, Scissors];
  useEffect(() => {
    if (aiNum === chosen) {
      setTextRes("It is a draw.");
    }
    if (chosen === 0 && aiNum === 1) {
      setTextRes("You win!");
      setScore(score + 1);
    }
    if (chosen === 0 && aiNum === 2) {
      setTextRes("You loose!");
      setScore(score - 1);
    }
    if (chosen === 1 && aiNum === 0) {
      setTextRes("You loose!");
      setScore(score - 1);
    }
    if (chosen === 1 && aiNum === 2) {
      setTextRes("You win!");
      setScore(score + 1);
    }
    if (chosen === 2 && aiNum === 0) {
      setTextRes("You win!");
      setScore(score + 1);
    }
    if (chosen === 2 && aiNum === 1) {
      setTextRes("You loose!");
      setScore(score - 1);
    }
  }, [chosen]);
  return (
    <>
      <div className="res_cont">
        <div
          className={`game_item ${
            (chosen === 0 && "Paper") ||
            (chosen === 1 && "Rock") ||
            (chosen === 2 && "Scissors")
          }`}
        >
          <img src={imageArr[chosen]} alt="" />
        </div>
        <div className="res_text dn_for_small">
          <h1>{textRes}</h1>
          <button onClick={() => setOpen(true)}>Play Again</button>
        </div>
        <div
          className={`game_item ${
            (aiNum === 0 && "Paper") ||
            (aiNum === 1 && "Rock") ||
            (aiNum === 2 && "Scissors")
          }`}
        >
          <img src={imageArr[aiNum]} alt="" />
        </div>
      </div>
      <div className="res_text dn_for_large">
        <h1>{textRes}</h1>
        <button onClick={() => setOpen(true)}>Play Again</button>
      </div>
    </>
  );
}

export default Res;
