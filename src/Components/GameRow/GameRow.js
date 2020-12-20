import {Fragment} from "react";

const GameRow = ({category, setQuestion, setAnswer, setPoints, cellActive, setCellActive})=>{
   return(
       <Fragment>
           <section className="row">
               {category.category}
           </section>
           { category.questions.map((question, index)=>{
               let points = (index+1)*100;
               return <section
                   key={question.question}
                   className="row"
                   onClick={()=> {
                       setQuestion(question.question)
                       setAnswer(question.answer)
                       setPoints(points)

                   }}
               >{ points }</section>
           })}

       </Fragment>
   )
}

export default GameRow;