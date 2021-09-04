import { combineReducers } from "redux";

import { QandA, playerPoints, gameScores, questionDisplayModalControl, startGame } from './gameState'
import { gameQuestions } from "./apiState";


const rootReducers = combineReducers({
    startGame,
    QandA,
    playerPoints,
    gameQuestions,
    gameScores,
    questionDisplayModalControl
})

export default rootReducers