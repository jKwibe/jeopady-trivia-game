import {SET_ROUND_QUESTIONS} from "../actions";

export const gameQuestions = (state= [], action) => {
    switch (action.type){
        case SET_ROUND_QUESTIONS:
            return action.questions
        default:
            return state
    }
}
