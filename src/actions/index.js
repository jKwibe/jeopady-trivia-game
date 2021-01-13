
// Action Creator
export const  startGame = () => {
    return {
        type: 'GAME_STARTED'
    }
}

export const questionNAnswer = QnA => {
    return {
        type: 'Q_AND_A_PICK',
        QnA
    }
}

export const questionPoints = points => {
    return {
        type: 'SET_POINTS',
        points
    }
}

export  const setUserAnswer = answer => {
    return {
        type: 'SET_USER_ANSWER',
        answer
    }
}

export const setGameQuestions = questions => {
    return {
        type: 'SET_ROUND_QUESTIONS',
        questions
    }
}

export  const addScore = points => {
    return {
        type: 'ADD_SCORE',
        points
    }
}

export  const subtractScore = points => {
    return {
        type: 'SUBTRACT_SCORE',
        points
    }
}

export  const addRound = () => {
    return {
        type: 'ADD_ROUND'
    }
}