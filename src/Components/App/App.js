import {useEffect, useState} from 'react'

// Import Components
import StartButton from "../Start/Start";
import GameFrame from "../GameFrame/GameFrame";
import { connect } from "react-redux";

import "./App.scss"
import roundOneQuestions from "../../Questions/RoundOne";


const App = ({ gameStart, questionAndAnswer, questionPoints })=>{
    const [points, setPoints] = useState(0)
    const [score, setScore] = useState(0)
    const [round, setRound] = useState(1)
    const [userAnswer, setUserAnswer] = useState('')
    const [questionList, setQuestionList] = useState(roundOneQuestions)

    console.log(round);
    console.log(questionPoints);

    useEffect(() => {
        if (userAnswer.toLowerCase() === questionAndAnswer.answer.toLowerCase()) {
            console.log("YOUR ANSWER IS CORRECT");
            setScore(score + points)
            setUserAnswer('')
        }
        if (userAnswer.toLowerCase() !== questionAndAnswer.answer.toLowerCase() && userAnswer !== '') {
            console.log("YOUR ANSWER IS WRONG");
            setScore(score - points)
            setUserAnswer('')
        }
        //eslint-disable-next-line
    }, [score, points, questionAndAnswer.answer, userAnswer])


    const render = gameStart ? <GameFrame
                            points={points}
                            setPoints={setPoints}
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

export  const  mapStateToProps = state => ({
   gameStart: state.startGame,
    questionAndAnswer: state.QandA,
    questionPoints: state.playerPoints
})


export default connect(mapStateToProps)(App);