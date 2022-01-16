import { combineReducers } from "redux";
import boardReducer from "./boardReducer";
import gameReducer from "./gameReducer";

const rootReducer = combineReducers({ board:boardReducer, game: gameReducer});

export const appReducer= (state, action) => {
    if(action.type === "RESET_ALL") {
        console.log('działam app reducer')
        state = undefined
    }
    return rootReducer(state, action)
}


export default appReducer;