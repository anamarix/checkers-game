import React from "react";
import { useSelector} from "react-redux";


const Cell = (props) => {

  const gameState = useSelector((state) => state.game);
  const clickHandler = (ev) => gameState.player? props.handlePlayerA(ev, props.posX, props.posY) : props.handlePlayerB(ev, props.posX, props.posY)
    
    
  return (
    <div onClick={(ev)=>clickHandler(ev)} className={props.handleClassName(props.posX, props.posY)} id={props.id}>
      {props.children}
    </div>
  );

}

export default Cell;
