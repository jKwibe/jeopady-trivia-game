import {useEffect} from 'react'

// Import Components
import StartButton from "../Start/Start";
import GameFrame from "../GameFrame/GameFrame";
import { connect } from "react-redux";

import "./App.scss"
import {setUserAnswer, subtractScore, addScore, setGameQuestions} from "../../actions";

const App = ({ gameStart, questionAndAnswer, questionPoints, setUserAnswer, subtractScore, addScore, setGameQuestions, round })=>{

    const range = (start=9, end=32) => {
        if (start === end) return [start];
        return [start, ...range(start + 1, end)]
    }

    const sample = (arr, num =4) => {
        let data = [];
        for(let i=0; data.length < num; i++){
            let index = Math.floor(Math.random() * arr.length)
            if (data.indexOf(arr[index]) >= 0) {
                console.log('Duplicate values noted');
            } else{
                data.push(arr[index])
            }
        }
        return data
    }

    useEffect(()=>{
        let sectionIdArr = sample(range());
        switch (round) {
            case 1:
                setGameQuestions(sectionIdArr)
                break;
            case 2:
                setGameQuestions(sectionIdArr)
                break;
            default:
                setGameQuestions([])
        }
        // eslint-disable-next-line
    }, [round])

    useEffect(() => {
        if (questionAndAnswer.userAnswer.toLowerCase() === questionAndAnswer.answer.toLowerCase() && questionAndAnswer.userAnswer !== '') {
            console.log("YOUR ANSWER IS CORRECT");
            addScore(questionPoints)
            setUserAnswer('')
        }
        if (questionAndAnswer.userAnswer.toLowerCase() !== questionAndAnswer.answer.toLowerCase() && questionAndAnswer.userAnswer !== '') {
            console.log("YOUR ANSWER IS WRONG");
            subtractScore(questionPoints)
            setUserAnswer('')
        }
        //eslint-disable-next-line
    }, [questionAndAnswer])

    const render = gameStart ? <GameFrame/> : <StartButton />
    return(
        <main
            className={`main-app ${ gameStart? '': 'initial-bg'} `}
            style={gameStart?null:{backgroundImage: `url('${process.env.PUBLIC_URL}/Jeopardy-logo.jpg')`, backgroundSize: "cover"}}
        >
            { render }
        </main>

    )
}

const  mapStateToProps = state => {
    return {
    gameStart: state.startGame,
    questionAndAnswer: state.QandA,
    questionPoints: state.playerPoints,
    round: state.gameScores.round
}}

export default connect(mapStateToProps, { setUserAnswer, subtractScore, addScore, setGameQuestions })(App);