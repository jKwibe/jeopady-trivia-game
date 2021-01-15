import { Form, Button } from "react-bootstrap";

import "./AnswerSubmit.scss"

const AnswerSubmit = ({ handleSubmit, inputText, setInputText })=>{
    return(
        <>
            <Form onSubmit={ handleSubmit }>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter Your Answer</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter an answer"
                        value={ inputText }
                        onChange={e => setInputText(e.target.value)}
                    />
                </Form.Group>
                <Button
                    type="submit"
                    disabled={ inputText.length <= 0 }
                >
                    Answer
                </Button>
            </Form>
        </>
    )
}

export default AnswerSubmit;