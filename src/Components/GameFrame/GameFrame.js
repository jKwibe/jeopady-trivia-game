import React, {useEffect, useState} from "react";

import roundOneQuestions from "../../Questions/RoundOne";
import QuestionDisplay from "../QuestionDisplay/QuestionDisplay";
import GameRow from "../GameRow/GameRow";

// css
import "./GameFrame.scss"

// import components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const GameFrame = ()=>{
    const[points, setPoints] = useState(0)
    const[score, setScore] = useState(0)
    const[QandA, setQandA] = useState({question: '', answer: ''})
    const[userAnswer, setUserAnswer] = useState('')

    console.log(QandA)

    useEffect(()=>{
        if(userAnswer.toLowerCase() === QandA.answer.toLowerCase()){
            console.log("YOUR ANSWER IS CORRECT");
            setScore(score + points)
            setUserAnswer('')
        }
        if(userAnswer.toLowerCase() !== QandA.answer.toLowerCase() && userAnswer !== ''){
            console.log("YOUR ANSWER IS WRONG");
            setScore(score - points)
            setUserAnswer('')
        }

    }, [score, points, QandA.answer, userAnswer])

    return (
        <>
            <Header
                score={score}
            />

            <section className="main-game-frame">
                <section className="game-main-section container">
                        <div className="game-area">
                            <section className="row">
                                { roundOneQuestions.map((cat,index)=>{
                                    return <div key={index} className="col          ">
                                        <GameRow
                                            category={cat}
                                            setQandA={setQandA}
                                            setPoints={setPoints}
                                        />
                                    </div>
                                })}
                            </section>
                        </div>
                </section>


                    <QuestionDisplay
                        QandA={QandA}
                        setQandA={setQandA}
                        setUserAnswer={setUserAnswer}
                    />
            </section>
            <Footer/>
        </>
    )
}

export default GameFrame;