import "./Header.scss"

const Header = ({score}) => {

    return(
        <header className="main-header">
            <div className="logo">
                Jeopardy <br/> Trivia
            </div>
            <nav className="navbar">
                <h6>Your Score is <span>{score}</span></h6>
            </nav>
        </header>
    )
}

export default Header