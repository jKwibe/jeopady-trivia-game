import AnswerSubmit from "../AnswerSubmit/AnswerSubmit";
import {useEffect, useState} from "react";
import { ProgressBar } from 'react-bootstrap'

import "./QuestionModal.scss"



const QuestionModal =({question, answer, setUserAnswer, inputText, setInputText, setQuestion})=>{

    const [timeoutId, setTimeoutId] = useState(0)
    const [counter, setCounter] = useState(30)

    const handleSubmit = (event)=>{
        event.preventDefault();
        setUserAnswer(inputText)
        setInputText('')
        setQuestion('')
        clearTimeout(timeoutId)
    }

    useEffect(() => {
        let timeout;
        if (counter >= 1 ){
             timeout = setTimeout(() =>{
                 setCounter(counter - 1)
            }, 1000);
        }

        setTimeoutId(timeout)

        return ()=> {
            if (counter === 1){
                clearTimeout(timeout)
                setQuestion('')
                setInputText('')
            }
        }
    }, [counter, setInputText, setQuestion]);

    return(
        <section className="question-modal-outer">
            <section>
                <p dangerouslySetInnerHTML={{__html: question}}></p>
                <p dangerouslySetInnerHTML={{__html: answer}}></p>

            </section>
            <AnswerSubmit
                handleSubmit={handleSubmit}
                inputText={inputText}
                setInputText={setInputText}
                answer={answer}
            />
            <p>{counter}</p>
            <ProgressBar variant="secondary" now={counter} max={30} />
        </section>
    )

}

export default QuestionModal