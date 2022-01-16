import {
  ADD_FOR_PLAYER_B,
  ADD_FOR_PLAYER_A,
  CHANGE_PLAYER,
  FIRST_MOVE,
  RETURN_TO_FIRST,
  RESTART_GAME,
} from "../actionTypes/actions";

const INITIAL_STATE = {
  player: true,
  pickedPawn: false,
  prevX: null,
  prevY: null,
  playerAScore: 0,
  playerBScore: 0,
};

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FIRST_MOVE:
      return { ...state, ...action.payload, pickedPawn: true };

    case CHANGE_PLAYER:
      return {
        ...state,
        player: !state.player,
        pickedPawn: false,
        prevX: null,
        prevY: null,
      };

    case RETURN_TO_FIRST:
      return { ...state, pickedPawn: false };

    case ADD_FOR_PLAYER_B:
      return { ...state, playerBScore: state.playerBScore + 1 };

    case ADD_FOR_PLAYER_A:
      return { ...state, playerAScore: state.playerAScore + 1 };

    case RESTART_GAME:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default gameReducer;
