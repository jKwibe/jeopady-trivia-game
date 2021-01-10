import {connect} from 'react-redux'
import {startGame} from "../../actions";

const StartButton = ({startGame, gameStart})=>{

    console.log(gameStart);
    return <div className='btn start-btn' onClick={startGame}>Start Game</div>
}

export  const  mapStateToProps = state => ({
    gameStart: state.startGame
})

export default connect(mapStateToProps, {startGame})(StartButton)