import React from "react";
import { useState } from "react";
import BigGame from "./BigGame";
import BigGameRes from "./BigGameRes";
import close from "../../src/images/icon-close.svg";
import rules from "../../src/images/image-rules-bonus.svg";
import "./_bg.scss";
function Big() {
  const [score, setScore] = useState(0);
  const [res, setRes] = useState(true);
  const [openRules, setOpenRules] = useState(true);
  const [chosenb, setChosen] = useState();
  const [aiNumb, setAiNum] = useState();
  return (
    <>
      <div className="header_cont">
        <div className="title">
          <h1>ROCK</h1>
          <h1>PAPER</h1>
          <h1>SCISSORS</h1>
          <h1>LIZARD</h1>
          <h1>SPOCK</h1>
        </div>
        <div className="score">
          <p>score</p>
          <h2>{score}</h2>
        </div>
      </div>
      <div className="bg_game_cont">
        {res ? (
          <BigGame setRes={setRes} setChosen={setChosen} setAiNum={setAiNum} />
        ) : (
          <BigGameRes
            chosenb={chosenb}
            aiNumb={aiNumb}
            setRes={setRes}
            setScore={setScore}
            score={score}
          />
        )}
      </div>
      <h3 className="rules_small" onClick={() => setOpenRules(!openRules)}>
        Rules
      </h3>
      <div className={`rules_cont ${openRules && "close"}`}>
        <div className="rules_content">
          <div className="rules_text">
            <h3>Rules</h3>
            <img src={close} alt="" onClick={() => setOpenRules(!openRules)} />
          </div>
          <img src={rules} alt="" />
        </div>
      </div>
    </>
  );
}

export default Big;
