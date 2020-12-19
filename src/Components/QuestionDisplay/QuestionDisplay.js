import {useState} from "react";

import QuestionModal from "../QuestionModal/QuestionModal";

const QuestionDisplay = ({ question, answer, setUserAnswer, userAnswer })=>{
    const [inputText, setInputText] = useState('')
    const handleSubmit = (event)=>{
        event.preventDefault();
        setUserAnswer(inputText)
        setInputText('')

    }

    return(
        <section>
            <QuestionModal
                question={question}
                answer={answer}
                handleSubmit={handleSubmit}
                inputText={inputText}
                setInputText={setInputText}
            />
        </section>
    )
}

export default QuestionDisplay;