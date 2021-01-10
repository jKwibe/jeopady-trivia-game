import {useEffect, useState} from 'react'

// Import Components
import StartButton from "../Start/Start";
import GameFrame from "../GameFrame/GameFrame";
import { connect } from "react-redux";

import "./App.scss"
import roundOneQuestions from "../../Questions/RoundOne";


const App = ({ gameStart, questionAndAnswer, questionPoints })=>{
    const [score, setScore] = useState(0)
    const [round, setRound] = useState(1)
    const [userAnswer, setUserAnswer] = useState('')
    const [questionList, setQuestionList] = useState(roundOneQuestions)

    console.log(round);
    console.log(questionPoints);

    useEffect(() => {
        if (userAnswer.toLowerCase() === questionAndAnswer.answer.toLowerCase()) {
            console.log("YOUR ANSWER IS CORRECT");
            setScore(score + questionPoints)
            setUserAnswer('')
        }
        if (userAnswer.toLowerCase() !== questionAndAnswer.answer.toLowerCase() && userAnswer !== '') {
            console.log("YOUR ANSWER IS WRONG");
            setScore(score - questionPoints)
            setUserAnswer('')
        }
        //eslint-disable-next-line
    }, [score, questionAndAnswer.answer, userAnswer])

    const render = gameStart ? <GameFrame
                            score={score}
                            setScore={setScore}
                            round={round}
                            setRound={setRound}
                            userAnswer={userAnswer}
                            setUserAnswer={setUserAnswer}
                            questionList={questionList}
                            setQuestionList={setQuestionList}

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


export default connect(mapStateToProps)(App);