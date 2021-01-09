import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";


const GameCell = ({points, question, setPoints,  setQandA, round, setShowModal}) => {
    const [disable, setDisable] = useState(false)
    useEffect(()=>{
        return ()=>{
            setDisable(false)
        }
    },[round])

    const handleButtonClick = ()=>{
        setQandA({
            question: question.question,
            answer: question.answer
        })
        setPoints(points)
        setDisable(true)
        setShowModal(true)
    }
    return(
        <>
            <Button
                variant="outline-secondary"
                onClick={handleButtonClick}
                disabled={disable}
            >

                <strong className={disable ? "text-cancel": ""}>{ points }</strong>
            </Button>
        </>
    )
}

export default GameCell;