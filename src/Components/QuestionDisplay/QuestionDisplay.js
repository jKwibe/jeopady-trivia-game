import React, { useState} from "react";

import QuestionModal from "../QuestionModal/QuestionModal";

import "./QuestionDisplay.scss"

const QuestionDisplay = ({ setUserAnswer, QandA, setQandA, isDone, setIsDone, round, setRound})=>{
    const [inputText, setInputText] = useState('')

    if(QandA.question){
        return(
            <section className="question-display">
                <QuestionModal
                    setQandA={setQandA}
                    QandA={QandA}
                    setUserAnswer={setUserAnswer}
                    inputText={inputText}
                    setInputText={setInputText}
                    isDone={isDone}
                    setIsDone={setIsDone}
                    setRound={setRound}
                    round={round}
                />
            </section>
        )
    }
    return null

}

export default QuestionDisplay;