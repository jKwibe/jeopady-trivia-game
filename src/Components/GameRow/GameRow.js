import {Fragment} from "react";

const GameRow = ({category, setQuestion, setAnswer})=>{
   return(
       <Fragment>
           <section className="row">
               {category.category}
           </section>
           { category.questions.map((question, index)=>{
               return <section
                   key={question.question}
                   className="row"
                   onClick={()=> {
                       setQuestion(question.question)
                       setAnswer(question.answer)
                   }}
               >{ (index+1)*100}</section>
           })}

       </Fragment>
   )
}

export default GameRow;