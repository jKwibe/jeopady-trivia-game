import GameRow from "../GameRow/GameRow";
import React from "react";

const GameArea = ({setPoints, setQandA, Questions})=>{
    return(
        <>
            <section className="game-main-section container">
                <div className="game-area">
                    <section className="row">
                        { Questions.map((cat,index)=>{
                            return <div key={index} className="col          ">
                                <GameRow
                                    category={cat}
                                    setQandA={setQandA}
                                    setPoints={setPoints}
                                />
                            </div>
                        })}
                    </section>
                </div>
            </section>
        </>
    )
}

export default GameArea;