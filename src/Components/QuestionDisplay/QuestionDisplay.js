import React, { useState} from "react";

import QuestionModal from "../QuestionModal/QuestionModal";

const QuestionDisplay = ({ question, answer, setUserAnswer, setQuestion, setScore, userAnswer, score, points})=>{
    const [inputText, setInputText] = useState('')


    if(question){
        return(
            <>
                <QuestionModal
                    question={question}
                    answer={answer}
                    setUserAnswer={setUserAnswer}
                    inputText={inputText}
                    setInputText={setInputText}
                    setQuestion={ setQuestion }
                    setScore={setScore}
                    score={score}
                    userAnswer={userAnswer}
                    points={points}
                />
            </>
        )
    }
    return null

}

export default QuestionDisplay;