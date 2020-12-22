import React, {useEffect, useState} from "react";

import roundOneQuestions from "../../Questions/RoundOne";
import QuestionDisplay from "../QuestionDisplay/QuestionDisplay";
import GameRow from "../GameRow/GameRow";

// css
import "./GameFrame.scss"
import Header from "../Header/Header";

const GameFrame = ()=>{
    const[points, setPoints] = useState(0)
    const[score, setScore] = useState(0)

    const[question, setQuestion] = useState('')
    const[answer, setAnswer] = useState('')
    const[userAnswer, setUserAnswer] = useState('')

    useEffect(()=>{
        if(userAnswer.toLowerCase() === answer.toLowerCase()){
            console.log("YOUR ANSWER IS CORRECT");
            setScore(score + points)
            setUserAnswer('')
        }
        if(userAnswer.toLowerCase() !== answer.toLowerCase() && userAnswer !== ''){
            console.log("YOUR ANSWER IS WRONG");
            setScore(score - points)
            setUserAnswer('')
        }

    }, [score, points, answer, userAnswer])

    return (
        <>
            <Header
            score={score}
            />

            <section className="main-game-frame">
                <section className="game-main-section container">
                        <div className="game-area">
                            <section className="row">
                                { roundOneQuestions.map((cat,index)=>{
                                    return <div key={index} className="col          ">
                                        <GameRow
                                            category={cat}
                                            setQuestion={setQuestion}
                                                setAnswer={setAnswer}
                                                setPoints={setPoints}
                                        />
                                    </div>
                                })}
                            </section>
                        </div>
                </section>


                    <QuestionDisplay
                        question={question}
                        answer={answer}
                        setUserAnswer={setUserAnswer}
                        userAnswer={userAnswer}
                        setQuestion={setQuestion}
                        points={points}
                        setScore={setScore}
                        score={score}
                    />
            </section>
        </>
    )
}

export default GameFrame;