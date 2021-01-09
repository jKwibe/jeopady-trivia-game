import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";


const GameCell = ({points, question, setPoints,  setQandA, round}) => {
    const [disable, setDisable] = useState(false)
    useEffect(()=>{
        return ()=>{
            setDisable(false)
        }
    },[round])
    return(
        <>
            <Button
                variant="outline-secondary"
                onClick={(e)=> {
                    setQandA({
                        question: question.question,
                        answer: question.answer
                    })
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