import {useState} from 'react'

// Import Components
import StartButton from "../Start/Start";
import GameFrame from "../GameFrame/GameFrame";

const App = ()=>{
    const [start, setStart] = useState(false)
    const[question, setQuestion] = useState('')
    // const[answer, setAnswer] = useState('')

    const startGame = ()=>{
        console.log('The Game has started')
        setStart(true)
    }

    const render = start ? <GameFrame setQuestion={setQuestion}/>
                         : <StartButton startGame={startGame} />

    return(
        <main>
            { render }

            {/* Never do this if you are not sure about the end user */}
            {/* TODO: Make a component which will make a modal to display the question, input and timer */}
            <section dangerouslySetInnerHTML={{__html: question}}></section>
        </main>


    )
}

export default App;