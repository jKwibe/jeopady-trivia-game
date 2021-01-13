import {useEffect, useState} from 'react'

// Import Components
import StartButton from "../Start/Start";
import GameFrame from "../GameFrame/GameFrame";
import { connect } from "react-redux";

import "./App.scss"
import {setUserAnswer} from "../../actions";


const App = ({ gameStart, questionAndAnswer, questionPoints, setUserAnswer })=>{
    const [score, setScore] = useState(0)
    const [round, setRound] = useState(1)

    console.log(round);
    console.log(questionPoints);

    useEffect(() => {
        if (questionAndAnswer.userAnswer.toLowerCase() === questionAndAnswer.answer.toLowerCase() && questionAndAnswer.userAnswer !== '') {
            console.log("YOUR ANSWER IS CORRECT");
            setScore(score + questionPoints)
            setUserAnswer('')
        }
        if (questionAndAnswer.userAnswer.toLowerCase() !== questionAndAnswer.answer.toLowerCase() && questionAndAnswer.userAnswer !== '') {
            console.log("YOUR ANSWER IS WRONG");
            setScore(score - questionPoints)
            setUserAnswer('')
        }
        //eslint-disable-next-line
    }, [score, questionAndAnswer])

    const render = gameStart ? <GameFrame
                            score={score}
                            setScore={setScore}
                            round={round}
                            setRound={setRound}
                            />
                         : <StartButton />

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
    console.log(state);
    return{
            gameStart: state.startGame,
            questionAndAnswer: state.QandA,
            questionPoints: state.playerPoints
        }
}

export default connect(mapStateToProps, {setUserAnswer})(App);