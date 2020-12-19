import {Fragment} from "react";

const AnswerSubmit = ({handleSubmit, inputText, setInputText})=>{
    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <label>Enter Your Answer</label>
                <input
                    type="text"
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                />
                <br/>
                <input type="submit" value="submit" disabled={inputText.length <= 0}/>
            </form>
        </Fragment>
    )
}

export default AnswerSubmit;