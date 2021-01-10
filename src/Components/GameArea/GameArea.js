import GameRow from "../GameRow/GameRow";

const GameArea = ({setPoints, setQandA, Questions, setRound, round, setShowModal})=>{

    return(
        <>
            <section className="game-main-section container">
                <div className="game-area">
                    <section className="row">
                        { Questions.map((cat,index)=>{
                            return <div key={index} className="col          ">
                                <GameRow
                                    category={cat}
                                    setPoints={setPoints}
                                    round={round}
                                    setRound={setRound}
                                    setShowModal={setShowModal}
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