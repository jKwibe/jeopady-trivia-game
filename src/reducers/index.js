import { combineReducers } from "redux";

import { QandA, playerPoints, gameQuestions, gameScores, questionDisplayModalControl, startGame } from './gameState'
import { getApiQuestions} from "./apiState";


const rootReducers = combineReducers({
    startGame,
    QandA,
    playerPoints,
    gameQuestions,
    gameScores,
    questionDisplayModalControl,
    getApiQuestions
})

export default rootReducers