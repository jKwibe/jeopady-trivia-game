import React, { useEffect } from "react";
import { connect } from 'react-redux';

// Import state
import { setGameQuestions, addRound, allButtonsClicked, showQuestionModel } from "../../actions";

// css
import "./GameFrame.scss"

// import components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GameArea from "../GameArea/GameArea";
import Results from "../Resullts/Results";
import QuestionDisplay from "../QuestionDisplay/QuestionDisplay";

// Import data
import roundOneQuestions from "../../Questions/RoundOne";
import roundTwoQuestions from "../../Questions/RoundTwo";

const GameFrame = ({ questionAndAnswer, round, Questions, setGameQuestions, addRound, allButtonsClicked, nextRound, isDone })=> {
    useEffect(()=>{
        if(isDone && nextRound){
            addRound()
            allButtonsClicked(false)
        }
        // eslint-disable-next-line
    }, [nextRound])

    useEffect(()=>{
        let buttons = document.querySelectorAll('.row.cell-btn')
        let buttonArray = [...buttons]
        let isAllDisabled = buttonArray.every(button => {
            return button.children[0].disabled
        })
        allButtonsClicked(isAllDisabled);
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

    const mainGameArea = <>
                    <div align='center' style={ {color: 'white'} }>
                        <h1>Playing Round { round }</h1>
                    </div>
                    <GameArea/>
                 </>

    return (
        <>
            <Header/>
            <section className="main-game-frame">
                { Questions.length > 0 && mainGameArea }

                { Questions.length === 0 && <Results/> }

                <QuestionDisplay/>
            </section>
            <Footer/>
        </>
    )
}

const  mapStateToProps = state => ({
    questionAndAnswer: state.QandA,
    Questions: state.gameQuestions,
    score: state.gameScores.score,
    round: state.gameScores.round,
    nextRound: state.questionDisplayModalControl.isNextRound,
    isDone: state.questionDisplayModalControl.isDone
})

export default connect(mapStateToProps, { setGameQuestions, addRound, allButtonsClicked, showQuestionModel })(GameFrame);