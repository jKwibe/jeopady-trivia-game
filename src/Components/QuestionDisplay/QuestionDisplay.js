
const QuestionDisplay = ({ question, answer })=>{
    return(
        <section>
            {/* Never do this if you do not trust the data sent (Malicious Scripts can break your app)*/}
            <p dangerouslySetInnerHTML={{__html: question}}></p>
            <p dangerouslySetInnerHTML={{__html: answer}}></p>
        </section>
    )
}

export default QuestionDisplay;