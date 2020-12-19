import AnswerSubmit from "../AnswerSubmit/AnswerSubmit";


const QuestionModal =({question, answer, handleSubmit, inputText, setInputText})=>{

    return(
        <section>
            <section>
                <p dangerouslySetInnerHTML={{__html: question}}></p>
                <p dangerouslySetInnerHTML={{__html: answer}}></p>

            </section>
            <AnswerSubmit
                handleSubmit={handleSubmit}
                inputText={inputText}
                setInputText={setInputText}
            />
        </section>
    )

}

export default QuestionModal