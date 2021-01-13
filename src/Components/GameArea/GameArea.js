import { connect } from  'react-redux'
import GameRow from "../GameRow/GameRow";

const GameArea = ({Questions, setShowModal})=>{

    return(
        <>
            <section className="game-main-section container">
                <div className="game-area">
                    <section className="row">
                        { Questions.map((cat,index)=>{
                            return <div key={index} className="col          ">
                                <GameRow
                                    category={cat}
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

const  mapStateToProps = state => ({
    Questions: state.gameQuestions
})

export default connect(mapStateToProps)(GameArea);