import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { connect } from 'react-redux'

import { questionNAnswer, questionPoints, showQuestionModel } from "../../actions";


const GameCell = ({ points, question, questionPoints, round, showQuestionModel, questionNAnswer }) => {
    const [disable, setDisable] = useState(false)

    useEffect(()=>{
        return ()=>{
            setDisable(false)
        }
    },[round])

    const handleButtonClick = ()=>{
        questionPoints(points)
        questionNAnswer(question)
        setDisable(true)
        showQuestionModel(true)
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
    round: state.gameScores.round
})

export default connect(mapStateToProps, { questionPoints , questionNAnswer, showQuestionModel })(GameCell);