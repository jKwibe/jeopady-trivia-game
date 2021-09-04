import React, { useState } from "react";

import QuestionModal from "../QuestionModal/QuestionModal";

import "./QuestionDisplay.scss"
import { connect } from "react-redux";

const QuestionDisplay = ({ showModal })=>{
    const [inputText, setInputText] = useState('')

    if(showModal){
        return(
            <section className="question-display">
                <QuestionModal
                    inputText={ inputText }
                    setInputText={ setInputText }
                />
            </section>
        )
    }
    return null
}

const  mapStateToProps = state => ({
    showModal: state.questionDisplayModalControl.showModel
})

export default connect(mapStateToProps)(QuestionDisplay);