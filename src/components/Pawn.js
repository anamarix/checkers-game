import React from "react";



const Pawn = (props) => {
 
  const setPawnColor = (player) => {
    if (player === "A") {
      return " black-pawn";
    }
    if (player === "pc") {
      return " white-pawn";
    }
  };


  return (
    <>
      {props.occupied && (
        <div
          className={"pawn-item " + setPawnColor(props.player)}
          id={props.id}
        ></div>
      )}
    </>
  );
};

export default Pawn;
