import GameRow from "../GameRow/GameRow";

const GameArea = ({setPoints, setQandA, Questions, setRound, round})=>{

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
                                    round={round}
                                    setRound={setRound}
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