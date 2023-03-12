import React, { useState } from "react";
import Game from "./Game";
import Res from "./Res";
import rules from "../src/images/image-rules.svg";
import close from "../src/images/icon-close.svg";
function SmaillGame() {
  const [score, setScore] = useState(0);
  const [open, setOpen] = useState(true);
  const [openRules, setOpenRules] = useState(true);
  const [chosen, setChosen] = useState();
  const [aiNum, setAiNum] = useState();
  return (
    <>
      <div className="header_cont">
        <div className="title">
          <h1>ROCK</h1>
          <h1>PAPER</h1>
          <h1>SCISSORS</h1>
        </div>
        <div className="score">
          <p>score</p>
          <h2>{score}</h2>
        </div>
      </div>
      {open ? (
        <Game
          chosen={chosen}
          setChosen={setChosen}
          setOpen={setOpen}
          aiNum={aiNum}
          setAiNum={setAiNum}
        />
      ) : (
        <Res
          chosen={chosen}
          setChosen={setChosen}
          aiNum={aiNum}
          setScore={setScore}
          score={score}
          setOpen={setOpen}
        />
      )}
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

export default SmaillGame;
