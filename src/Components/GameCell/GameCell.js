import {useState} from "react";
import {Button} from "react-bootstrap";


const GameCell = ({points, question, setQuestion, setAnswer, setPoints,  setQandA}) => {
    const [disable, setDisable] = useState(false)

    return(
        <>
            <Button
                variant="outline-secondary"
                onClick={(e)=> {
                    setQandA({
                        question: question.question,
                        answer: question.answer
                    })
                    // setQuestion(question.question)
                    // setAnswer(question.answer)
                    setPoints(points)
                    setDisable(true)
                }}
                disabled={disable}
            >

                <strong className={disable ? "text-cancel": ""}>{ points }</strong>
            </Button>
        </>
    )
}

export default GameCell;