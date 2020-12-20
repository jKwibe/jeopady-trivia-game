import React, { useState} from "react";

import roundOneQuestions from "../../Questions/RoundOne";

import GameRow from "../GameRow/GameRow";

// css
import "./GameFrame.scss"
import QuestionDisplay from "../QuestionDisplay/QuestionDisplay";


const GameFrame = ()=>{
    // Import Game Data
    const[points, setPoints] = useState(0)
    const[score, setScore] = useState(0)

    const[question, setQuestion] = useState('')
    const[answer, setAnswer] = useState('')
    const[userAnswer, setUserAnswer] = useState('')

    // const updateScore = ()=>{
    //     setScore(score + points)
    // }

    console.log(score)


    return (
        <section>
            <div>
                Jeopardy Game Has Started {score}
            </div>
            <section className="game-main-section container-fluid">
                    <div className="game-area container-fluid">
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
                setScore={setScore}
                points={points}
                score={score}
            />
        </section>
    )
}

export default GameFrame;