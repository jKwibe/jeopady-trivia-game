import React from "react";

// import roundOneQuestions from "../../Questions/RoundOne";
// import roundTwoQuestions from "../../Questions/RoundTwo";

import QuestionDisplay from "../QuestionDisplay/QuestionDisplay";

// css
import "./GameFrame.scss"

// import components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GameArea from "../GameArea/GameArea";

const GameFrame = ({ score, setPoints, QandA, round, setQandA, setRound, setUserAnswer,questionList, setQuestionList})=> {
    console.log(QandA)
    let count = 0;
    let nodes = document.querySelectorAll('.row.cell-btn')
    nodes.forEach(node => {
        if (node.children[0].disabled) {
            count++
        }
    })

    // let Questions;
    // switch (round) {
    //     case 1:
    //         Questions = roundOneQuestions;
    //         break;
    //     case 2:
    //         Questions = roundTwoQuestions;
    //         break;
    //     default:
    //         Questions = null;
    // }

    console.log(`The round is => ${round}`)

    const handleRoundChange = (e) => {
        e.preventDefault()
        console.log('clicked');
        setRound(round + 1)
    }

    return (
        <>
            <Header
                score={score}
            />

            <section className="main-game-frame">
                {round === 1 ?
                    <GameArea
                        setQandA={setQandA}
                        setPoints={setPoints}
                        Questions={questionList}
                        setRound={setRound}
                        round={round}
                    />
                    : round === 2 ?
                        <GameArea
                            setQandA={setQandA}
                            setPoints={setPoints}
                            Questions={questionList}
                            setRound={setRound}
                            round={round}
                        /> : null
                }

                <QuestionDisplay
                    QandA={QandA}
                    setQandA={setQandA}
                    setUserAnswer={setUserAnswer}
                />
            </section>
            {count / 20 === 1 ? <button style={{color: "white"}} className='btn' onClick={handleRoundChange}>Next Round</button>: null }
            <Footer/>
        </>
    )
}

export default GameFrame;