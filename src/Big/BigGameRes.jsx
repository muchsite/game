import React from "react";
import Back from "../../src/images/bg-pentagon.svg";
import Paper from "../../src/images/icon-paper.svg";
import Rock from "../../src/images/icon-rock.svg";
import Scissors from "../../src/images/icon-scissors.svg";
import Lizard from "../../src/images/icon-lizard.svg";
import Spock from "../../src/images/icon-spock.svg";
import { useState } from "react";
function BigGameRes({ chosenb, aiNumb, setRes, setScore, score }) {
  const [result, setResult] = useState("");
  const arr = [Paper, Rock, Scissors, Lizard, Spock];
  useState(() => {
    if (chosenb === aiNumb) {
      setResult("It is a draw.");
    }
    if (chosenb === 0 && aiNumb === 1) {
      setResult("You win!");
      setScore(score + 1);
    }
    if (chosenb === 0 && aiNumb === 4) {
      setResult("You win!");
      setScore(score + 1);
    }
    if (chosenb === 0 && aiNumb === 2) {
      setResult("You loose!");
      setScore(score - 1);
    }
    if (chosenb === 0 && aiNumb === 3) {
      setResult("You loose!");
      setScore(score - 1);
    }
    /////////////

    if (chosenb === 1 && aiNumb === 2) {
      setResult("You win!");
      setScore(score + 1);
    }
    if (chosenb === 1 && aiNumb === 3) {
      setResult("You win!");
      setScore(score + 1);
    }
    if (chosenb === 1 && aiNumb === 0) {
      setResult("You loose!");
      setScore(score - 1);
    }
    if (chosenb === 1 && aiNumb === 4) {
      setResult("You loose!");
      setScore(score - 1);
    }
    // //////
    if (chosenb === 2 && aiNumb === 0) {
      setResult("You win!");
      setScore(score + 1);
    }
    if (chosenb === 2 && aiNumb === 3) {
      setResult("You win!");
      setScore(score + 1);
    }
    if (chosenb === 2 && aiNumb === 1) {
      setResult("You loose!");
      setScore(score - 1);
    }
    if (chosenb === 2 && aiNumb === 4) {
      setResult("You loose!");
      setScore(score - 1);
    }
    //////////
    if (chosenb === 3 && aiNumb === 4) {
      setResult("You win!");
      setScore(score + 1);
    }
    if (chosenb === 3 && aiNumb === 0) {
      setResult("You win!");
      setScore(score + 1);
    }
    if (chosenb === 3 && aiNumb === 1) {
      setResult("You loose!");
      setScore(score - 1);
    }
    if (chosenb === 3 && aiNumb === 2) {
      setResult("You loose!");
      setScore(score - 1);
    }
    //////////
    if (chosenb === 4 && aiNumb === 1) {
      setResult("You win!");
      setScore(score + 1);
    }
    if (chosenb === 4 && aiNumb === 2) {
      setResult("You win!");
      setScore(score + 1);
    }
    if (chosenb === 4 && aiNumb === 3) {
      setResult("You loose!");
      setScore(score - 1);
    }
    if (chosenb === 4 && aiNumb === 0) {
      setResult("You loose!");
      setScore(score - 1);
    }
  }, [chosenb]);
  return (
    <>
      <div className="res_cont">
        <div
          className={`game_item ${
            (chosenb === 0 && "Paper") ||
            (chosenb === 1 && "Rock") ||
            (chosenb === 2 && "Scissors") ||
            (chosenb === 3 && "Lizard") ||
            (chosenb === 4 && "Spock")
          }`}
        >
          <img src={arr[chosenb]} alt="" />
        </div>
        <div className="res_text dn_for_small">
          <h1>{result}</h1>
          <button onClick={() => setRes(true)}>Play Again</button>
        </div>
        <div
          className={`game_item ${
            (aiNumb === 0 && "Paper") ||
            (aiNumb === 1 && "Rock") ||
            (aiNumb === 2 && "Scissors") ||
            (aiNumb === 3 && "Lizard") ||
            (aiNumb === 4 && "Spock")
          }`}
        >
          <img src={arr[aiNumb]} alt="" />
        </div>
      </div>
      <div className="res_text dn_for_large">
        <h1>{result}</h1>
        <button onClick={() => setRes(true)}>Play Again</button>
      </div>
    </>
  );
}

export default BigGameRes;
