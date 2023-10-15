import "./Footer.scss"

const Footer = () => {

    return(
        <footer className="main-footer">
            <div className="main-footer_top">
                <p>This app was built in tribute to Alex Trebek by Kwibe Merci</p>
            </div>
            <div className="main-footer_social">
                <a className="social-icon" href="https://github.com/kwibem" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                <a className="social-icon" href="https://www.linkedin.com/in/kwibe-merci/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            </div>
        </footer>
    )
}

export default Footer
