import React from "react";
import { useSelector } from "react-redux";



const Pawn = (props) => {
  const boardState = useSelector((state) => state.board);
  const gameState = useSelector(state=> state.game)



  const setPawnColor = (player) => {
    if (player === "A") {
      return " black-pawn";
    }
    if (player === "pc") {
      return " white-pawn";
    }
  };

  const clickHandler = (ev) => {
    // if(gameState.player==="A" && !gameState.pickedPawn && ev.target.className==="pawn-item  black-pawn" ){
    //   console.log('clicked handler in pawn')
    //   const index = ev.target.id;
    //   const updatedBoard = [...boardState];
    //   updatedBoard[index].occupied = false;
    //   updatedBoard[index].player = null;
    //   dispatch(clearCell(updatedBoard));
    //   dispatch(firstMove(props.posX, props.posY))
    // }

  };

  return (
    <>
      {props.occupied && (
        <div
          onClick={clickHandler}
          className={"pawn-item " + setPawnColor(props.player)}
          id={props.id}
        ></div>
      )}
    </>
  );
};

export default Pawn;
