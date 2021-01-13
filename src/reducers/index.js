import {combineReducers} from "redux";

const startGame = (state= false, action) => {
    switch (action.type){
        case 'GAME_STARTED':
            return !state
        default:
            return state
    }
}

const QandA = (state={question: '', answer: '', userAnswer: ''}, action) => {
    switch (action.type) {
        case 'Q_AND_A_PICK':
            return {...state, ...action.QnA}
        case 'SET_USER_ANSWER':
            return { ...state,
                userAnswer: action.answer
            }
        default:
            return state
    }
}

const playerPoints = (state= 0, action) => {
    switch (action.type) {
        case 'SET_POINTS':
            return action.points
        default:
            return state
    }
}

const gameQuestions = (state = [], action) => {
    switch (action.type){
        case 'SET_ROUND_QUESTIONS':
            return [...action.questions]
        default:
            return state
    }
}

const gameScores = (state = {score: 0, round: 1}, action) => {
    switch (action.type) {
        case  'ADD_SCORE':
            return {
                ...state,
                score: state.score + action.points
            }
        case 'SUBTRACT_SCORE':
            return {
                ...state,
                score: state.score - action.points
            }
        case 'ADD_ROUND':
            return {
                ...state,
                round: state.round + 1
            }
        default:
            return  state
    }
}

const rootReducers = combineReducers({
    startGame,
    QandA,
    playerPoints,
    gameQuestions,
    gameScores
})

export default rootReducers