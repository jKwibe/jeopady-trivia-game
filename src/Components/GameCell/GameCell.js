import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import { connect } from 'react-redux'

import { questionNAnswer, questionPoints } from "../../actions";


const GameCell = ({points, question, setPoints, round, setShowModal, questionNAnswer}) => {
    const [disable, setDisable] = useState(false)
    useEffect(()=>{
        return ()=>{
            setDisable(false)
        }
    },[round])

    const handleButtonClick = ()=>{
        questionPoints(points)
        questionNAnswer(question)
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

export  const  mapStateToProps = state => ({
    QnA: state.QandA
})

export default connect(mapStateToProps, { questionNAnswer, questionPoints })(GameCell);