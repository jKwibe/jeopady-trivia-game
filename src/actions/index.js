
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
