import {useState} from 'react'

// Import Components
import StartButton from "../Start/Start";
import GameFrame from "../GameFrame/GameFrame";

const App = ()=>{
    const [start, setStart] = useState(false)
    const[question, setQuestion] = useState('')
    const[answer, setAnswer] = useState('')
    const[userAnswer, setUserAnswer] = useState('')

    const startGame = ()=>{
        console.log('The Game has started')
        setStart(true)
    }

    console.log(userAnswer);

    const render = start ? <GameFrame
            setQuestion={setQuestion}
            setAnswer={setAnswer}
            question={question}
            answer={answer}
            setUserAnswer={setUserAnswer}
            userAnswer={userAnswer}
        />
                         : <StartButton startGame={startGame} />

    return(
        <main>
            { render }
        </main>


    )
}

export default App;