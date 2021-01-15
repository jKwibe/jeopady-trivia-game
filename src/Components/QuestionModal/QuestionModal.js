import AnswerSubmit from '../AnswerSubmit/AnswerSubmit';
import React, { useEffect, useState } from "react";
import { ProgressBar } from 'react-bootstrap';
import { connect } from 'react-redux';

import { setUserAnswer, allButtonsClicked, isNextRound, showQuestionModel } from "../../actions";

import './QuestionModal.scss'

const QuestionModal =({ questionAndAnswer, inputText, setInputText, isDone, isNextRound, setUserAnswer,showQuestionModel })=>{
    const [timeoutId, setTimeoutId] = useState(0)
    const [counter, setCounter] = useState(30)

    useEffect(()=>{
        isNextRound(false)
        if (isDone && counter===0){
            isNextRound(true)
        }// eslint-disable-next-line
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
    }, [counter, setInputText, questionAndAnswer]);

    const closeModal = (timeout)=>{
        clearTimeout(timeout)
        setInputText('')
        showQuestionModel(false)
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        setUserAnswer(inputText)
        setUserAnswer(inputText)
        if(isDone){
            isNextRound(true)
        }
        closeModal(timeoutId)
    }

    return(
        <section className='question-modal'>

            <section>
                <strong><p dangerouslySetInnerHTML={{__html: questionAndAnswer.question}}></p></strong>
                <hr/>

            </section>
            <AnswerSubmit
                handleSubmit={handleSubmit}
                inputText={ inputText }
                setInputText={ setInputText }
            />
            <ProgressBar className='time-counter' now={ counter } max={ 30 } />
        </section>
    )
}

const  mapStateToProps = state => ({
    questionAndAnswer: state.QandA,
    isDone: state.questionDisplayModalControl.isDone
})

export default connect(mapStateToProps, { setUserAnswer, allButtonsClicked, isNextRound, showQuestionModel })(QuestionModal);