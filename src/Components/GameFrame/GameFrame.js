import React, {useEffect, useState} from "react";

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
    const [isDone, setIsDone] = useState(false)

    useEffect(()=>{
        let buttons = document.querySelectorAll('.row.cell-btn')
        let buttonArray = [...buttons]
        let isAllDisabled = buttonArray.every( (button) => {
            return button.children[0].disabled
        })
        setIsDone(isAllDisabled);
        // eslint-disable-next-line
    }, [QandA])
    // let count = 0;
    // let


    console.log(isDone);


    console.log(`The round is => ${round}`)

    // const handleRoundChange = (e) => {
    //     e.preventDefault()
    //     console.log('clicked');
    //     setRound(round + 1)
    //     setisDone(false)
    // }

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
                    isDone={isDone}
                    setIsDone={setIsDone}
                    setRound={setRound}
                    round={round}
                />
            </section>
            {/*{ isDone ? <button style={{color: "white"}} className='btn' onClick={handleRoundChange}>Next Round</button>: null }*/}
            <Footer/>
        </>
    )
}

export default GameFrame;