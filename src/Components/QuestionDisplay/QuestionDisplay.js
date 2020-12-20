import { useState} from "react";

import QuestionModal from "../QuestionModal/QuestionModal";

const QuestionDisplay = ({ question, answer, setUserAnswer, setQuestion, userAnswer, setScore, score, points})=>{
    const [inputText, setInputText] = useState('')
    const handleSubmit = (event)=>{
        event.preventDefault();
        setUserAnswer(inputText)
        if(userAnswer === answer){
            setScore(score + points)
        }
        setInputText('')
        setQuestion('')
    }

    if(question){
        return(
            <section className="question-modal">
                <QuestionModal
                    question={question}
                    answer={answer}
                    handleSubmit={handleSubmit}
                    inputText={inputText}
                    setInputText={setInputText}
                    setQuestion={ setQuestion }
                />
            </section>
        )
    }
    return null

}

export default QuestionDisplay;