import AnswerSubmit from "../AnswerSubmit/AnswerSubmit";
import {useEffect, useState} from "react";
import { ProgressBar } from 'react-bootstrap'

import "./QuestionModal.scss"



const QuestionModal =({question, answer, handleSubmit, inputText, setInputText, setQuestion})=>{

    const [counter, setCounter] = useState(30);

    useEffect(() => {
        let unmount = false;
        let timeout;
        if (counter >= 1 && !unmount ){
             timeout = setTimeout(() =>{
                console.log(Date.now())
                setCounter(counter - 1)
            }, 1000);
        }

        return ()=> {
            if (counter === 1){
                unmount = true;
                clearTimeout(timeout)
                setQuestion('')
                setInputText('')
            }
            console.log("called", unmount);
            console.log(unmount);
            console.log(counter);
        }
    }, [counter, setInputText, setQuestion]);

    if(counter <= 0){
    }

    return(
        <section className="question-modal-outer">
            <section>
                <p dangerouslySetInnerHTML={{__html: question}}></p>
                <p dangerouslySetInnerHTML={{__html: answer}}></p>

            </section>
            <AnswerSubmit
                handleSubmit={handleSubmit}
                inputText={inputText}
                setInputText={setInputText}
            />
            {/*<p>{counter}</p>*/}
            <ProgressBar striped variant="success" now={counter} max={30} />
        </section>
    )

}

export default QuestionModal