import {useState} from 'react'

// Import Components
import StartButton from "../Start/Start";
import GameFrame from "../GameFrame/GameFrame";

import "./App.scss"

const App = ()=>{
    const [start, setStart] = useState(false)

    const startGame = ()=>{
        console.log('The Game has started')
        setStart(true)
    }


    const render = start ? <GameFrame/>
                         : <StartButton startGame={startGame} />

    return(
        <main
            className={`main-app ${ start? '': 'initial-bg'} `}
            style={start?null:{backgroundImage: `url('${process.env.PUBLIC_URL}/Jeopardy-logo.jpg')`, backgroundSize: "cover"}}
        >
            { render }
        </main>

    )
}

export default App;