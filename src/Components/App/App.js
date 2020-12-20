import {useState} from 'react'

// Import Components
import StartButton from "../Start/Start";
import GameFrame from "../GameFrame/GameFrame";

const App = ()=>{
    const [start, setStart] = useState(false)



    const startGame = ()=>{
        console.log('The Game has started')
        setStart(true)
    }


    const render = start ? <GameFrame/>
                         : <StartButton startGame={startGame} />

    return(
        <main>
            { render }
        </main>


    )
}

export default App;