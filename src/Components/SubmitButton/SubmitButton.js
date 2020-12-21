import {useState} from "react";
import {Button} from "react-bootstrap";


const SubmitButton = ({points, question, setQuestion, setAnswer, setPoints}) => {
    const [disable, setDisable] = useState(false)

    return(
        <>
            <Button
                variant="outline-secondary"
                onClick={(e)=> {
                    setQuestion(question.question)
                    setAnswer(question.answer)
                    setPoints(points)
                    setDisable(true)
                }}
                disabled={disable}
            >

                { points }
            </Button>
        </>
    )
}

export default SubmitButton;