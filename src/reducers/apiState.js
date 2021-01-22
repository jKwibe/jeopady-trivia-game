import {FETCH_API} from "../actions";

export const getApiQuestions = (state= [], action) => {
    switch (action.type){
        case FETCH_API:
            return action.questions
        default:
            return state
    }
}