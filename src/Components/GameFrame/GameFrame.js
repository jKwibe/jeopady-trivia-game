import React from "react";

import roundOneQuestions from "../../Questions/RoundOne";

import GameRow from "../GameRow/GameRow";

// css
import "./GameFrame.scss"


const GameFrame = ({setQuestion, setAnswer})=>{
    // Import Game Data
    console.log(roundOneQuestions[0].category);
    //
    return (
        <section>
            <div>
                Jeopardy Game Has Started
            </div>
            <section className="game-main-section container-fluid">
                    <div className="game-area container-fluid">
                        <section className="row">
                            { roundOneQuestions.map((cat,index)=>{
                                return <div className="col-3">
                                    <GameRow
                                        key={index}
                                        category={cat}
                                        setQuestion={setQuestion}
                                        setAnswer={setAnswer}
                                    />
                                </div>
                            })}
                        </section>
                    </div>
            </section>
        </section>
    )
}

export default GameFrame;