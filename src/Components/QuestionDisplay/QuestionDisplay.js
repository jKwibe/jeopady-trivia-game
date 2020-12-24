import React, { useState} from "react";

import QuestionModal from "../QuestionModal/QuestionModal";

import "./QuestionDisplay.scss"

const QuestionDisplay = ({ setUserAnswer, QandA, setQandA})=>{
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
                />
            </section>
        )
    }
    return null

}

export default QuestionDisplay;