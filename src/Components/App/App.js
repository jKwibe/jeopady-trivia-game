import {useState} from 'react'

const App = ()=>{
    const [start, setStart] = useState(false)

    const startGame = ()=>{
        console.log('The Game has started', start)
        setStart(true)
    }

    const render = start ? <div> The Game has Started</div>: <div onClick={startGame}>Start Game</div>

    return(
        <main>
            { render }
        </main>
    )
}

export default App;