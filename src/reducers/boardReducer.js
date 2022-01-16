// const initialBoard = Array(8).fill().map(item=>Array(8).fill({id:"id", value:"value"}));
import { CLEAR, PLAY_A, PLAY_B, CANCEL_LAST, RESTART_BOARD } from "../actionTypes/actions";

export const BOARD_ROW_SIZE = 8;

// let board = [];
// for (let i = 0; i < BOARD_ROW_SIZE; i++) {
//   board[i] = [];
//   for (let j = 0; j < BOARD_ROW_SIZE; j++) {
//     board[i][j] = { x: i, y: j, occupied: false, player: null };
//   }
// }
// const initialBoard = board.flat().map((el, index) => {
//   return { id: index, ...el };
// });
// for (let i = 0; i < BOARD_ROW_SIZE * 3; i++) {
//   let determineBoardColor = initialBoard[i].x + initialBoard[i].y;
//   if (determineBoardColor % 2 === 0) {
//     initialBoard[i].occupied = true;
//     initialBoard[i].player = "A";
//   }
// }
// for (
//   let j = initialBoard.length - 1;
//   j > initialBoard.length - 1 - 3 * BOARD_ROW_SIZE;
//   j--
// ) {
//   let determineBoardColor = initialBoard[j].x + initialBoard[j].y;
//   if (determineBoardColor % 2 === 0) {
//     initialBoard[j].occupied = true;
//     initialBoard[j].player = "pc";
//   }
// }

const INITIAL_BOARD= [
  {
    id: 0,
    x: 0,
    y: 0,
    occupied: true,
    player: 'A'
  },
  {
    id: 1,
    x: 0,
    y: 1,
    occupied: false,
    player: null
  },
  {
    id: 2,
    x: 0,
    y: 2,
    occupied: true,
    player: 'A'
  },
  {
    id: 3,
    x: 0,
    y: 3,
    occupied: false,
    player: null
  },
  {
    id: 4,
    x: 0,
    y: 4,
    occupied: true,
    player: 'A'
  },
  {
    id: 5,
    x: 0,
    y: 5,
    occupied: false,
    player: null
  },
  {
    id: 6,
    x: 0,
    y: 6,
    occupied: true,
    player: 'A'
  },
  {
    id: 7,
    x: 0,
    y: 7,
    occupied: false,
    player: null
  },
  {
    id: 8,
    x: 1,
    y: 0,
    occupied: false,
    player: null
  },
  {
    id: 9,
    x: 1,
    y: 1,
    occupied: true,
    player: 'A'
  },
  {
    id: 10,
    x: 1,
    y: 2,
    occupied: false,
    player: null
  },
  {
    id: 11,
    x: 1,
    y: 3,
    occupied: true,
    player: 'A'
  },
  {
    id: 12,
    x: 1,
    y: 4,
    occupied: false,
    player: null
  },
  {
    id: 13,
    x: 1,
    y: 5,
    occupied: true,
    player: 'A'
  },
  {
    id: 14,
    x: 1,
    y: 6,
    occupied: false,
    player: null
  },
  {
    id: 15,
    x: 1,
    y: 7,
    occupied: true,
    player: 'A'
  },
  {
    id: 16,
    x: 2,
    y: 0,
    occupied: true,
    player: 'A'
  },
  {
    id: 17,
    x: 2,
    y: 1,
    occupied: false,
    player: null
  },
  {
    id: 18,
    x: 2,
    y: 2,
    occupied: true,
    player: 'A'
  },
  {
    id: 19,
    x: 2,
    y: 3,
    occupied: false,
    player: null
  },
  {
    id: 20,
    x: 2,
    y: 4,
    occupied: true,
    player: 'A'
  },
  {
    id: 21,
    x: 2,
    y: 5,
    occupied: false,
    player: null
  },
  {
    id: 22,
    x: 2,
    y: 6,
    occupied: true,
    player: 'A'
  },
  {
    id: 23,
    x: 2,
    y: 7,
    occupied: false,
    player: null
  },
  {
    id: 24,
    x: 3,
    y: 0,
    occupied: false,
    player: null
  },
  {
    id: 25,
    x: 3,
    y: 1,
    occupied: false,
    player: null
  },
  {
    id: 26,
    x: 3,
    y: 2,
    occupied: false,
    player: null
  },
  {
    id: 27,
    x: 3,
    y: 3,
    occupied: false,
    player: null
  },
  {
    id: 28,
    x: 3,
    y: 4,
    occupied: false,
    player: null
  },
  {
    id: 29,
    x: 3,
    y: 5,
    occupied: false,
    player: null
  },
  {
    id: 30,
    x: 3,
    y: 6,
    occupied: false,
    player: null
  },
  {
    id: 31,
    x: 3,
    y: 7,
    occupied: false,
    player: null
  },
  {
    id: 32,
    x: 4,
    y: 0,
    occupied: false,
    player: null
  },
  {
    id: 33,
    x: 4,
    y: 1,
    occupied: false,
    player: null
  },
  {
    id: 34,
    x: 4,
    y: 2,
    occupied: false,
    player: null
  },
  {
    id: 35,
    x: 4,
    y: 3,
    occupied: false,
    player: null
  },
  {
    id: 36,
    x: 4,
    y: 4,
    occupied: false,
    player: null
  },
  {
    id: 37,
    x: 4,
    y: 5,
    occupied: false,
    player: null
  },
  {
    id: 38,
    x: 4,
    y: 6,
    occupied: false,
    player: null
  },
  {
    id: 39,
    x: 4,
    y: 7,
    occupied: false,
    player: null
  },
  {
    id: 40,
    x: 5,
    y: 0,
    occupied: false,
    player: null
  },
  {
    id: 41,
    x: 5,
    y: 1,
    occupied: true,
    player: 'pc'
  },
  {
    id: 42,
    x: 5,
    y: 2,
    occupied: false,
    player: null
  },
  {
    id: 43,
    x: 5,
    y: 3,
    occupied: true,
    player: 'pc'
  },
  {
    id: 44,
    x: 5,
    y: 4,
    occupied: false,
    player: null
  },
  {
    id: 45,
    x: 5,
    y: 5,
    occupied: true,
    player: 'pc'
  },
  {
    id: 46,
    x: 5,
    y: 6,
    occupied: false,
    player: null
  },
  {
    id: 47,
    x: 5,
    y: 7,
    occupied: true,
    player: 'pc'
  },
  {
    id: 48,
    x: 6,
    y: 0,
    occupied: true,
    player: 'pc'
  },
  {
    id: 49,
    x: 6,
    y: 1,
    occupied: false,
    player: null
  },
  {
    id: 50,
    x: 6,
    y: 2,
    occupied: true,
    player: 'pc'
  },
  {
    id: 51,
    x: 6,
    y: 3,
    occupied: false,
    player: null
  },
  {
    id: 52,
    x: 6,
    y: 4,
    occupied: true,
    player: 'pc'
  },
  {
    id: 53,
    x: 6,
    y: 5,
    occupied: false,
    player: null
  },
  {
    id: 54,
    x: 6,
    y: 6,
    occupied: true,
    player: 'pc'
  },
  {
    id: 55,
    x: 6,
    y: 7,
    occupied: false,
    player: null
  },
  {
    id: 56,
    x: 7,
    y: 0,
    occupied: false,
    player: null
  },
  {
    id: 57,
    x: 7,
    y: 1,
    occupied: true,
    player: 'pc'
  },
  {
    id: 58,
    x: 7,
    y: 2,
    occupied: false,
    player: null
  },
  {
    id: 59,
    x: 7,
    y: 3,
    occupied: true,
    player: 'pc'
  },
  {
    id: 60,
    x: 7,
    y: 4,
    occupied: false,
    player: null
  },
  {
    id: 61,
    x: 7,
    y: 5,
    occupied: true,
    player: 'pc'
  },
  {
    id: 62,
    x: 7,
    y: 6,
    occupied: false,
    player: null
  },
  {
    id: 63,
    x: 7,
    y: 7,
    occupied: true,
    player: 'pc'
  }
]

const boardReducer = (state = INITIAL_BOARD, action) => {
  switch (action.type) {
    case CLEAR:
      const StrBoard = JSON.stringify(state);
      const parsedBoard = JSON.parse(StrBoard);
      parsedBoard[action.payload].occupied = false;
      parsedBoard[action.payload].player = null;
      return parsedBoard;

    case PLAY_A:
      const StringifiedBoard = JSON.stringify(state);
      const playBoard = JSON.parse(StringifiedBoard);
      playBoard[action.payload].occupied = true;
      playBoard[action.payload].player = "A";
      return playBoard;

    case PLAY_B:
      const myStringifiedBoard = JSON.stringify(state);
      const playedBoard = JSON.parse(myStringifiedBoard);
      playedBoard[action.payload].occupied = true;
      playedBoard[action.payload].player = "pc";
      return playedBoard;

    case CANCEL_LAST:
      const myStrBoard = JSON.stringify(state);
      const myBoard = JSON.parse(myStrBoard);
      myBoard.forEach((el) => {
        if (el.x === action.payload[0] && el.y === action.payload[1]) {
          el.occupied = true;
          el.player = action.payload[2];
        }
      });
      return myBoard;

      case RESTART_BOARD:
      return INITIAL_BOARD;

      default:
      return state;
  }
};

export default boardReducer;
