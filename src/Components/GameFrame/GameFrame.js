import React, {useEffect, useState} from "react";

import QuestionDisplay from "../QuestionDisplay/QuestionDisplay";

// css
import "./GameFrame.scss"

// import components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GameArea from "../GameArea/GameArea";

import roundOneQuestions from "../../Questions/RoundOne";
import roundTwoQuestions from "../../Questions/RoundTwo";

const GameFrame = ({ score, setPoints, QandA, round, setQandA, setRound, setUserAnswer,questionList, setQuestionList})=> {
    const [isDone, setIsDone] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [isNextRound, setIsNextRound] = useState(false)

    console.log(isDone, isNextRound);

    useEffect(()=>{
        if(isDone && isNextRound){
            setRound(round + 1)
            setIsDone(false)
        }
        // eslint-disable-next-line
    }, [isNextRound, isDone])

    useEffect(()=>{
        let buttons = document.querySelectorAll('.row.cell-btn')
        let buttonArray = [...buttons]
        let isAllDisabled = buttonArray.every( (button) => {
            return button.children[0].disabled
        })
        setIsDone(isAllDisabled);
        // eslint-disable-next-line
    }, [QandA])

    useEffect(()=>{
        switch (round) {
            case 1:
                setQuestionList(roundOneQuestions)
                break;
            case 2:
                setQuestionList(roundTwoQuestions)
                break;
            default:
                setQuestionList({})
        }
        // eslint-disable-next-line
    }, [round, questionList])

    return (
        <>
            <Header
                score={score}
            />

            <section className="main-game-frame">
                <GameArea
                    setQandA={setQandA}
                    setPoints={setPoints}
                    Questions={questionList}
                    setRound={setRound}
                    round={round}
                    setShowModal={setShowModal}
                />

                <QuestionDisplay
                    QandA={QandA}
                    setQandA={setQandA}
                    setUserAnswer={setUserAnswer}
                    isDone={isDone}
                    setIsDone={setIsDone}
                    setRound={setRound}
                    round={round}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    isNextRound={isNextRound}
                    setIsNextRound={setIsNextRound}
                />
            </section>
            <Footer/>
        </>
    )
}

export default GameFrame;