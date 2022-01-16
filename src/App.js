import { useDispatch, useSelector } from "react-redux";
import Board from "./components/Board";
import Cell from "./components/Cell";
import ActionPrompt from "./components/ActionPrompt";
import Pawn from "./components/Pawn";
import Menu from "./components/Menu";
import React from "react";
import { restartBoard } from "./actions/boardActions";
import { restartGame } from "./actions/gameActions";
import { clearCell, playPawnA, playPawnB, cancelLastMove } from "./actions/boardActions";
import { firstMove, changePlayer, returnToFirstMove, addPointForA, addPointForB } from "./actions/gameActions";


function App() {

  const boardState = useSelector((state) => state.board);
  const gameState = useSelector(state => state.game);
  const dispatch = useDispatch();
  const [color, setColor] = React.useState(null);

  const colorHandler = (col) => {
  setColor(col)
  }

  React.useEffect(()=>{
    if(gameState.playerAScore ===5){
      alert("A won! Want to play again?");
      // dispatch(reset());
      dispatch(restartBoard());
      dispatch(restartGame());
      }
      if (gameState.playerBScore ===5){
      alert("B won! Want to play again?");
      // dispatch(reset());
      dispatch(restartBoard());
      dispatch(restartGame());
    }

  },[gameState.playerAScore, gameState.playerBScore]);

    const handleClassName = (x, y) => {
    if ((x + y) % 2 === 0) {
      return color;
    } else {
      return "white";
    }
  };


    const handlePlayerA = (ev, x, y) => {
    
    const index = ev.target.id;
    //First Move//
    if (!gameState.pickedPawn && ev.target.className === "pawn-item  black-pawn") {
      ev.target.parentElement.classList.add('visible');
      dispatch(clearCell(index));
      dispatch(firstMove(x, y, index));

    } else if(gameState.pickedPawn) {
      //Second Move//

      if (x===gameState.prevX+1 && (y=== gameState.prevY +1 | y === gameState.prevY -1 )){
        const pickedPawn = document.getElementsByClassName('visible');
        pickedPawn[0].classList.remove('visible');
        if(boardState.some(el=> el.player==="pc" && el.x===x && el.y=== y)){
          dispatch(addPointForA());
        };
        dispatch(playPawnA(index));
        dispatch(changePlayer());

      } else {
        alert("You have to pick other spot!")
        const player = "A";
        const posX = gameState.prevX;
        const posY = gameState.prevY;
        const pickedPawn = document.getElementsByClassName('visible');
        pickedPawn[0].classList.remove('visible');
        dispatch(cancelLastMove(posX, posY, player));
        dispatch(returnToFirstMove());
        
  }}}

  const handlePlayerB = (ev, x, y) => {
    
    const index = ev.target.id;
      //First Move//
      if (!gameState.pickedPawn && ev.target.className === "pawn-item  white-pawn") {
        ev.target.parentElement.classList.add('visible');
        dispatch(clearCell(index));
        dispatch(firstMove(x, y, index));
      } else if(gameState.pickedPawn) {
        //Second Move//
        if (x===gameState.prevX-1 && (y === gameState.prevY +1 | y=== gameState.prevY -1 )){
          const pickedPawn = document.getElementsByClassName('visible');
          pickedPawn[0].classList.remove('visible');
          if(boardState.some(el=> el.player==="A" && el.x===x && el.y=== y)){
            dispatch(addPointForB()) 
          };
          dispatch(playPawnB(index));
          dispatch(changePlayer());
        } else {
          const player = "pc";
          alert("You have to pick other spot!")
          const posX = gameState.prevX;
          const posY = gameState.prevY;
          const pickedPawn = document.getElementsByClassName('visible');
          pickedPawn[0].classList.remove('visible');
          dispatch(cancelLastMove(posX, posY, player));
          dispatch(returnToFirstMove());
  }}}

    const handlePlayerText = () => {  
    if(gameState.player){
      return <div className="prompt-item--text"> Your turn A  <div className="black-dot"></div> </div>
     
    } else {
      return <div className="prompt-item--text"> Your turn B  <div className="white-dot"></div></div>
    }
  };

    



  return (
    <div className="App">
      {!color && <Menu colorHandler={colorHandler} />}
      {color && <Board color={color}>
        {boardState.map((el) => (
          <Cell
            key={el.id}
            id={el.id}
            posX={el.x}
            posY={el.y}
            occupied={el.occupied}
            player={el.player}
            handlePlayerA={handlePlayerA}
            handlePlayerB={handlePlayerB}
            handleClassName={handleClassName}
            >
              {el.occupied && <Pawn id={el.id} occupied={el.occupied} player={el.player}/>}
            </Cell>
        ))}
      </Board>}
      {color && <ActionPrompt handlePlayerText={handlePlayerText}/>}
    </div>
  );
}

export default App;

