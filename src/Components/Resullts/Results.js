import { connect } from "react-redux";
import React from "react";

const Results = ({ score }) => {
    return (
        <div align='center' style={{color: 'white'}}>
            <h1>THANKS FOR PLAYING!!!</h1>
            <h2>Your Score is { score } </h2>
        </div>
    )
}

const mapStateToProps = state => ({
    score: state.gameScores.score
})

export default connect(mapStateToProps)(Results);