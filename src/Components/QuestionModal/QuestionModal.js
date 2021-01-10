import AnswerSubmit from "../AnswerSubmit/AnswerSubmit";
import React, {useEffect, useState} from "react";
import {ProgressBar} from 'react-bootstrap';
import { connect } from 'react-redux';

import "./QuestionModal.scss"

const QuestionModal =({questionAndAnswer, setUserAnswer, inputText, setInputText, isDone, setShowModal, setIsNextRound})=>{
    const [timeoutId, setTimeoutId] = useState(0)
    const [counter, setCounter] = useState(30)

    useEffect(()=>{
        setIsNextRound(false)
        if (isDone && counter===0){
            setIsNextRound(true)
        }// eslint-disable-next-line
    }, [isDone, counter])

    useEffect(() => {
        let timeout;
        if (counter >= 1 ){
             timeout = setTimeout(() =>{
                 setCounter(counter - 1)
            }, 2);
        }

        setTimeoutId(timeout)

        return ()=> {
            if (counter === 1){
                closeModal(timeout)
            }
        }
        // eslint-disable-next-line
    }, [counter, setInputText, questionAndAnswer]);
    // console.log('The question value is '+ QandA.question)

    const closeModal = (timeout)=>{
        clearTimeout(timeout)
        // setQandA({question: '', answer: QandA.answer})
        setInputText('')
        setShowModal(false)
    }


    const handleSubmit = (event)=>{
        event.preventDefault();
        setUserAnswer(inputText)
        if(isDone){
            setIsNextRound(true)
        }
        closeModal(timeoutId)
    }

    return(
        <section className="question-modal">

            <section>
                <strong><p dangerouslySetInnerHTML={{__html: questionAndAnswer.question}}></p></strong>
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

export  const  mapStateToProps = state => ({
    questionAndAnswer: state.QandA
})

export default connect(mapStateToProps)(QuestionModal);