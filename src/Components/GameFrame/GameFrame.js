import React, {useEffect, useState} from "react";
import { connect } from 'react-redux';

import { setGameQuestions } from "../../actions";
import QuestionDisplay from "../QuestionDisplay/QuestionDisplay";

// css
import "./GameFrame.scss"

// import components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GameArea from "../GameArea/GameArea";

import roundOneQuestions from "../../Questions/RoundOne";
import roundTwoQuestions from "../../Questions/RoundTwo";

const GameFrame = ({ questionAndAnswer, score, setPoints, round, setRound, Questions, setGameQuestions })=> {
    const [isDone, setIsDone] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [isNextRound, setIsNextRound] = useState(false)

    console.log(isDone, isNextRound, "GameFrame");

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
    }, [questionAndAnswer])


    useEffect(()=>{
        switch (round) {
            case 1:
                setGameQuestions(roundOneQuestions)
                break;
            case 2:
                setGameQuestions(roundTwoQuestions)
                break;
            default:
                setGameQuestions([])
        }
        // eslint-disable-next-line
    }, [round])

    return (
        <>
            <Header
                score={score}
            />

            {Questions.length > 0 &&
            <div align='center' style={{color: 'white'}}>
                <h1>Playing Round {round}</h1>
            </div>}

            <section className="main-game-frame">
                {Questions.length > 0 &&
                <GameArea
                    setPoints={setPoints}
                    setRound={setRound}
                    round={round}
                    setShowModal={setShowModal}
                />}
                {Questions.length === 0 &&
                <div align='center' style={{color: 'white'}}>
                    <h1>THANKS FOR PLAYING!!!</h1>
                    <h2>Your Score is {score}</h2>
                </div>}

                <QuestionDisplay
                    isDone={isDone}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    setIsNextRound={setIsNextRound}
                />
            </section>
            <Footer/>
        </>
    )
}

const  mapStateToProps = state => ({
    questionAndAnswer: state.QandA,
    Questions: state.gameQuestions
})

export default connect(mapStateToProps, { setGameQuestions })(GameFrame);