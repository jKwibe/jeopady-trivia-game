import React, {useEffect, useState} from "react";

import roundOneQuestions from "../../Questions/RoundOne";
import QuestionDisplay from "../QuestionDisplay/QuestionDisplay";
// import GameRow from "../GameRow/GameRow";

// css
import "./GameFrame.scss"

// import components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GameArea from "../GameArea/GameArea";

const GameFrame = ()=>{
    const[points, setPoints] = useState(0)
    const[score, setScore] = useState(0)
    const[Question, setQuestion] = useState(roundOneQuestions)
    const[QandA, setQandA] = useState({question: '', answer: ''})
    const[userAnswer, setUserAnswer] = useState('')

    console.log(QandA)

    useEffect(()=>{
        if(userAnswer.toLowerCase() === QandA.answer.toLowerCase()){
            console.log("YOUR ANSWER IS CORRECT");
            setScore(score + points)
            setUserAnswer('')
        }
        if(userAnswer.toLowerCase() !== QandA.answer.toLowerCase() && userAnswer !== ''){
            console.log("YOUR ANSWER IS WRONG");
            setScore(score - points)
            setUserAnswer('')
        }

    }, [score, points, QandA.answer, userAnswer])

    return (
        <>
            <Header
                score={score}
            />

            <section className="main-game-frame">
                <GameArea
                    setQandA={setQandA}
                    setPoints={setPoints}
                    Questions={Question}
                    setQuestion={setQuestion}
                />

                <QuestionDisplay
                    QandA={QandA}
                    setQandA={setQandA}
                    setUserAnswer={setUserAnswer}
                />
            </section>
            <Footer/>
        </>
    )
}

export default GameFrame;