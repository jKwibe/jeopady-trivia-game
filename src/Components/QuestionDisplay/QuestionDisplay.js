import {useState} from "react";

import QuestionModal from "../QuestionModal/QuestionModal";

const QuestionDisplay = ({ question, answer, setUserAnswer, setQuestion })=>{
    const [inputText, setInputText] = useState('')
    const handleSubmit = (event)=>{
        event.preventDefault();
        setUserAnswer(inputText)
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
                />
            </section>
        )
    }
    return null

}

export default QuestionDisplay;