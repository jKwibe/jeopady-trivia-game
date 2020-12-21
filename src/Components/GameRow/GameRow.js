import GameCell from "../GameCell/GameCell";

import "./GameRow.scss"
const GameRow = ({category, setQuestion, setAnswer, setPoints})=>{
   return(
       <>
           <section className="row category">
               <h6><strong>{category.category}</strong></h6>
           </section>
           { category.questions.map((question, index)=>{
               let points = (index+1)*100;
               return <section
                   key={question.question}
                   className="row cell-btn"
               >
                   <GameCell
                       setQuestion={setQuestion}
                       setAnswer={setAnswer}
                       setPoints={setPoints}
                       points={points}
                       question={question}
                   />
                   </section>
           })}

       </>
   )
}

export default GameRow;