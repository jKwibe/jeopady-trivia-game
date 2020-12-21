import SubmitButton from "../SubmitButton/SubmitButton";

const GameRow = ({category, setQuestion, setAnswer, setPoints})=>{
   return(
       <>
           <section className="row">
               {category.category}
           </section>
           { category.questions.map((question, index)=>{
               let points = (index+1)*100;
               return <section
                   key={question.question}
                   className="row"
               >
                   <SubmitButton
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