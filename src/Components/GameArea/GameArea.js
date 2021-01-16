import { connect } from  'react-redux'
import GameRow from "../GameRow/GameRow";
import QuestionColumnHeader from "../QuestionColumnHeader/QuestionColumnHeader";

const GameArea = ({ Questions })=>{

    return(
        <>
            <section className="game-main-section container">
                <div className="game-area">
                    <QuestionColumnHeader/>
                    <section className="row">
                        { Questions.map((category,index)=>{
                            return <div key={index} className="col">
                                <GameRow
                                    category={ category }
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