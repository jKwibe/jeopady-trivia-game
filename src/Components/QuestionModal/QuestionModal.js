import AnswerSubmit from "../AnswerSubmit/AnswerSubmit";
import React, {useEffect, useState} from "react";
import {ProgressBar} from 'react-bootstrap';
import { connect } from 'react-redux';

import { setUserAnswer } from "../../actions";

import "./QuestionModal.scss"

const QuestionModal =({questionAndAnswer, inputText, setInputText, isDone, setShowModal, setIsNextRound, setUserAnswer})=>{
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

    const closeModal = (timeout)=>{
        clearTimeout(timeout)
        setInputText('')
        setShowModal(false)
    }


    const handleSubmit = (event)=>{
        event.preventDefault();
        setUserAnswer(inputText)
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

export default connect(mapStateToProps, { setUserAnswer })(QuestionModal);