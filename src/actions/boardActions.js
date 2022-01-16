import { CLEAR, PLAY_A, PLAY_B, CANCEL_LAST, RESTART_BOARD } from "../actionTypes/actions";

export const clearCell = (index) => {
  return {
    type: CLEAR,
    payload: index,
  };
};


export const playPawnA = (index) => {
  return {
    type: PLAY_A,
    payload: index
  }
};

export const playPawnB = (index) => {
  return {
    type: PLAY_B,
    payload: index
  }
};

export const cancelLastMove = (x,y, player) => {
  return {
    type: CANCEL_LAST,
    payload: [x, y, player]
  }
}

export const restartBoard = () => {
  return {
    type: RESTART_BOARD,

  }
}

export const reset = () => {
  return {
    type: "RESET_ALL"
  }
}
