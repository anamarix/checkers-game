import { CHANGE_PLAYER, FIRST_MOVE, ADD_FOR_PLAYER_A, ADD_FOR_PLAYER_B, RESTART_GAME } from "../actionTypes/actions";
import { RETURN_TO_FIRST } from "../actionTypes/actions";


export const firstMove =(x,y,)=>{
    return{
        type: FIRST_MOVE,
        payload: {prevX: x, prevY: y}
    }
}

export const changePlayer=()=>{
    return{
        type: CHANGE_PLAYER,

    }
}

export const returnToFirstMove = () => {
    return {
        type: RETURN_TO_FIRST
    }
}

export const addPointForB = () => {
    return {
        type:ADD_FOR_PLAYER_B
    }
}

export const addPointForA = () => {
    return {
        type:ADD_FOR_PLAYER_A
    }
}

export const restartGame = () => {
    return {
        type:RESTART_GAME
    }
}