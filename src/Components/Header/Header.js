import "./Header.scss"
import { connect } from "react-redux";

const Header = ({ score }) => {

    return(
        <header className="main-header">
            <div className="logo">
                Jeopardy <br/> Trivia
            </div>
            <nav className="navbar">
                <h6>Your Score is <span>{ score }</span></h6>
            </nav>
        </header>
    )
}

const  mapStateToProps = state => ({
    score: state.gameScores.score
})

export default connect(mapStateToProps)(Header);