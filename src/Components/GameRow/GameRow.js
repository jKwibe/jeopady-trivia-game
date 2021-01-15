import { connect } from 'react-redux'

import GameCell from "../GameCell/GameCell";
import { questionPoints } from '../../actions'

import "./GameRow.scss"
const GameRow = ({ category, round })=>{

    return(
       <>
           <section className="row category">
               <h6><strong>{ category.category }</strong></h6>
           </section>
           { category.questions.map((question, index)=>{
               let points = ((index + 1)*round)*100;
               return <section
                   key={question.question}
                   className="row cell-btn"
               >
                   <GameCell
                       points={ points }
                       question={ question }
                   />
                   </section>
           })}
       </>
   )
}

const  mapStateToProps = state => ({
    round: state.gameScores.round
})

export default connect(mapStateToProps, { questionPoints })(GameRow);