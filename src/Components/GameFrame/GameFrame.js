import React from "react";

import roundOneQuestions from "../../Questions/RoundOne";

import GameRow from "../GameRow/GameRow";

// css
import "./GameFrame.scss"
import QuestionDisplay from "../QuestionDisplay/QuestionDisplay";


const GameFrame = ({setQuestion, setAnswer, question, answer, setUserAnswer, userAnswer})=>{
    // Import Game Data
    return (
        <section>
            <div>
                Jeopardy Game Has Started
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
            />
        </section>
    )
}

export default GameFrame;