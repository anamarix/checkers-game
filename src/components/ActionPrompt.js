import React, { useState } from "react";
import { useSelector } from "react-redux";

const ActionPrompt = (props) => {
  const [info, setInfo] = useState(false);
  const gameState = useSelector((state) => state.game);

  const infoHandler = () => {
    setInfo((state) => !state);
  };

  return (
    <div className="prompt-container">
      <div className="prompt-item">
        {" "}
        {props.handlePlayerText()}{" "}
        <button
          onClick={infoHandler}
          className={info ? "prompt-button clicked" : "prompt-button"}
        >
          Need more info?
        </button>
      </div>
      <div className="prompt-counter">
        <span>Counter:</span>
        <button className="score-button"> A : {gameState.playerAScore}</button>
        <button className="score-button"> B : {gameState.playerBScore} </button>
      </div>
      {info && (
        <div className="prompt-extrainfo">
          {" "}
          Click on the pawn you want to move first and later click on the
          position where you want to place it. The game is aimed at jumping on
          cells where your opponent sits and "eating" his pawns. You can only
          travel on dark cells. You can jump one cell per move and always in the
          direction of the front-line of your opponent's army :) That means
          black pawns jump in the south direction only and white pawn only jump
          in the north direction. Pawns can't jump backwards. You win when you
          "eat" 5 warriors of the opponent's army first! Have fun!
        </div>
      )}
    </div>
  );
};

export default ActionPrompt;
