import AnswerSubmit from "../AnswerSubmit/AnswerSubmit";
import React, {useEffect, useState} from "react";
import {ProgressBar} from 'react-bootstrap'

import "./QuestionModal.scss"

const QuestionModal =({setUserAnswer, inputText, setInputText, setQandA, QandA, isDone, round, setIsDone, setRound, setShowModal, showModal})=>{

    const [timeoutId, setTimeoutId] = useState(0)
    const [counter, setCounter] = useState(30)
    useEffect(()=>{
        if (isDone && counter===0){
            setRound(round + 1)
            setIsDone(false)
        }
        // eslint-disable-next-line
    }, [isDone, counter])

    useEffect(() => {
        let timeout;
        if (counter >= 1 ){
             timeout = setTimeout(() =>{
                 setCounter(counter - 1)
            }, 250);
        }

        setTimeoutId(timeout)

        return ()=> {
            if (counter === 1){
                closeModal(timeout)
            }
        }
        // eslint-disable-next-line
    }, [counter, setInputText, setQandA, QandA]);
    console.log('The question value is '+ QandA.question)

    const closeModal = (timeout)=>{
        clearTimeout(timeout)
        setQandA({question: '', answer: QandA.answer})
        setInputText('')
        setShowModal(false)
    }


    const handleSubmit = (event)=>{
        event.preventDefault();
        setUserAnswer(inputText)
        closeModal(timeoutId)
    }

    return(
        <section className="question-modal">

            <section>
                <strong><p dangerouslySetInnerHTML={{__html: QandA.question}}></p></strong>
                <hr/>

            </section>
            <AnswerSubmit
                handleSubmit={handleSubmit}
                inputText={inputText}
                setInputText={setInputText}
            />
            <ProgressBar className="time-counter" now={counter} max={30} />
        </section>
    )

}

export default QuestionModal