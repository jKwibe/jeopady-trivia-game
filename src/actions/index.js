// Actions

export const GAME_STARTER = 'GAME_STARTED'
export const QUESTION_AND_ANSWER_PICK = 'QUESTION_AND_ANSWER_PICK'
export const SET_GAME_POINTS = 'SET_POINTS'
export const SET_USER_ANSWER = 'SET_USER_ANSWER'
export const SET_ROUND_QUESTIONS = 'SET_ROUND_QUESTIONS'
export const ADD_SCORE = 'ADD_SCORE'
export const SUBTRACT_SCORE = 'SUBTRACT_SCORE'
export const ADD_ROUND = 'ADD_ROUND'

// Action Creator
export const  startGame = () => {
    return {
        type: GAME_STARTER
    }
}

export const questionNAnswer = QnA => {
    return {
        type: QUESTION_AND_ANSWER_PICK,
        QnA
    }
}

export const questionPoints = points => {
    return {
        type: SET_GAME_POINTS,
        points
    }
}

export  const setUserAnswer = answer => {
    return {
        type: SET_USER_ANSWER,
        answer
    }
}

export const setGameQuestions = questions => {
    return {
        type: SET_ROUND_QUESTIONS,
        questions
    }
}

export  const addScore = points => {
    return {
        type: ADD_SCORE,
        points
    }
}

export  const subtractScore = points => {
    return {
        type: SUBTRACT_SCORE,
        points
    }
}

export  const addRound = () => {
    return {
        type: ADD_ROUND
    }
}