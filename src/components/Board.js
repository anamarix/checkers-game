import React from "react";
import { BOARD_ROW_SIZE } from "../reducers/boardReducer";

const Board = (props) => {
  return (
    <div
      className={"game_container" + (BOARD_ROW_SIZE===8 ? " eight " : " ten ")}
    >
      {props.children}
    </div>
  );
};
export default Board;
