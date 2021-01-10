import {combineReducers} from "redux";

const startGame = (state= false, action) => {
    switch (action.type){
        case 'GAME_STARTED':
            return !state
        default:
            return state
    }
}

const QandA = (state={question: '', answer: ''}, action) => {
    switch (action.type) {
        case 'Q_AND_A_PICK':
            return {...state, ...action.QnA}
        default:
            return {question: '', answer: ''}
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

const rootReducers = combineReducers({
    startGame,
    QandA,
    playerPoints
})

export default rootReducers