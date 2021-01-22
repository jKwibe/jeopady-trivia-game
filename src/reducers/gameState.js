import {
    SET_GAME_POINTS,
    QUESTION_AND_ANSWER_PICK,
    GAME_STARTER,
    ADD_ROUND,
    ADD_SCORE,
    SET_ROUND_QUESTIONS,
    SET_USER_ANSWER,
    SUBTRACT_SCORE,
    IS_NEXT_ROUND,
    IS_DONE,
    SHOW_MODEL
} from "../actions";

export const startGame = (state= false, action) => {
    switch (action.type){
        case GAME_STARTER:
            return !state
        default:
            return state
    }
}

export const QandA = (state= { question: '', answer: '', userAnswer: '' }, action) => {
    switch (action.type) {
        case QUESTION_AND_ANSWER_PICK:
            return {...state, ...action.QnA}
        case SET_USER_ANSWER:
            return { ...state,
                userAnswer: action.answer
            }
        default:
            return state
    }
}

export const playerPoints = (state= 0, action) => {
    switch (action.type) {
        case SET_GAME_POINTS:
            return action.points
        default:
            return state
    }
}

export const gameQuestions = (state = [], action) => {
    switch (action.type){
        case SET_ROUND_QUESTIONS:
            return [...action.questions]
        default:
            return state
    }
}

export const gameScores = (state = { score: 0, round: 1 }, action) => {
    switch (action.type) {
        case  ADD_SCORE:
            return {
                ...state,
                score: state.score + action.points
            }
        case SUBTRACT_SCORE:
            return {
                ...state,
                score: state.score - action.points
            }
        case ADD_ROUND:
            return {
                ...state,
                round: state.round + 1
            }
        default:
            return  state
    }
}

export const questionDisplayModalControl = (state = { isDone: false, isNextRound: false, showModel: false} , action) => {
    switch (action.type) {
        case IS_DONE:
            return {
                ...state,
                isDone: action.isDone
            }
        case IS_NEXT_ROUND:
            return {
                ...state,
                isNextRound: action.isNext
            }
        case SHOW_MODEL:
            return {
                ...state,
                showModel: action.show
            }
        default:
            return state
    }
}
