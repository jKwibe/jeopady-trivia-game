import React, { useState} from "react";

import QuestionModal from "../QuestionModal/QuestionModal";

import "./QuestionDisplay.scss"

const QuestionDisplay = ({ isDone, showModal, setShowModal, setIsNextRound})=>{
    const [inputText, setInputText] = useState('')

    if(showModal){
        return(
            <section className="question-display">
                <QuestionModal
                    inputText={inputText}
                    setInputText={setInputText}
                    isDone={isDone}
                    setShowModal={setShowModal}
                    setIsNextRound={setIsNextRound}
                />
            </section>
        )
    }
    return null

}

export default QuestionDisplay;