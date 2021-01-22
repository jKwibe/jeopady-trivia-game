import {useEffect} from 'react'

// Import Components
import StartButton from "../Start/Start";
import GameFrame from "../GameFrame/GameFrame";
import { connect } from "react-redux";

import "./App.scss"
import {setUserAnswer, subtractScore, addScore} from "../../actions";


const App = ({ gameStart, questionAndAnswer, questionPoints, setUserAnswer, subtractScore, addScore })=>{

    useEffect(() => {
        if (questionAndAnswer.userAnswer.toLowerCase() === questionAndAnswer.answer.toLowerCase() && questionAndAnswer.userAnswer !== '') {
            console.log("YOUR ANSWER IS CORRECT");
            addScore(questionPoints)
            setUserAnswer('')
        }
        if (questionAndAnswer.userAnswer.toLowerCase() !== questionAndAnswer.answer.toLowerCase() && questionAndAnswer.userAnswer !== '') {
            console.log("YOUR ANSWER IS WRONG");
            subtractScore(questionPoints)
            setUserAnswer('')
        }
        //eslint-disable-next-line
    }, [questionAndAnswer])

    const render = gameStart ? <GameFrame/> : <StartButton />
    return(
        <main
            className={`main-app ${ gameStart? '': 'initial-bg'} `}
            style={gameStart?null:{backgroundImage: `url('${process.env.PUBLIC_URL}/Jeopardy-logo.jpg')`, backgroundSize: "cover"}}
        >
            { render }
        </main>

    )
}

const  mapStateToProps = state => {
    return {
    gameStart: state.startGame,
    questionAndAnswer: state.QandA,
    questionPoints: state.playerPoints
}}

export default connect(mapStateToProps, { setUserAnswer, subtractScore, addScore })(App);