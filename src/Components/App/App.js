import {useEffect, useState} from 'react'

// Import Components
import StartButton from "../Start/Start";
import GameFrame from "../GameFrame/GameFrame";

import "./App.scss"
import roundOneQuestions from "../../Questions/RoundOne";

const App = ()=>{
    const [start, setStart] = useState(false)
    const [points, setPoints] = useState(0)
    const [score, setScore] = useState(0)
    const [round, setRound] = useState(1)
    const [QandA, setQandA] = useState({question: '', answer: ''})
    const [userAnswer, setUserAnswer] = useState('')
    const [questionList, setQuestionList] = useState(roundOneQuestions)

    const startGame = ()=>{
        console.log('The Game has started')
        setStart(true)
    }
    console.log(round);

    useEffect(() => {
        if (userAnswer.toLowerCase() === QandA.answer.toLowerCase()) {
            console.log("YOUR ANSWER IS CORRECT");
            setScore(score + points)
            setUserAnswer('')
        }
        if (userAnswer.toLowerCase() !== QandA.answer.toLowerCase() && userAnswer !== '') {
            console.log("YOUR ANSWER IS WRONG");
            setScore(score - points)
            setUserAnswer('')
        }
        //eslint-disable-next-line
    }, [score, points, QandA.answer, userAnswer])


    const render = start ? <GameFrame
                            points={points}
                            setPoints={setPoints}
                            score={score}
                            setScore={setScore}
                            round={round}
                            setRound={setRound}
                            QandA={QandA}
                            setQandA={setQandA}
                            userAnswer={userAnswer}
                            setUserAnswer={setUserAnswer}
                            questionList={questionList}
                            setQuestionList={setQuestionList}

                            />
                         : <StartButton startGame={startGame} />

    return(
        <main
            className={`main-app ${ start? '': 'initial-bg'} `}
            style={start?null:{backgroundImage: `url('${process.env.PUBLIC_URL}/Jeopardy-logo.jpg')`, backgroundSize: "cover"}}
        >
            { render }
        </main>

    )
}

export default App;