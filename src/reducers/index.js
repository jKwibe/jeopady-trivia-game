import { combineReducers } from "redux";

import { QandA, playerPoints, gameQuestions, gameScores, questionDisplayModalControl, startGame } from './gameState'


const rootReducers = combineReducers({
    startGame,
    QandA,
    playerPoints,
    gameQuestions,
    gameScores,
    questionDisplayModalControl
})

export default rootReducers