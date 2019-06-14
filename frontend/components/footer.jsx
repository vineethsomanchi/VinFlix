import React from 'react';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-header-container">
                <h1 className="footer-header-title">Questions? Email VineethSomanchi@gmail.com</h1>
            </div>

            <div className="footer-icon-container">
                <a href="https://www.linkedin.com/in/vineethsomanchi/"><i className="footicon fab fa-linkedin fa-5x"></i></a>
                <a href="https://www.vineethsomanchi.com"><h1 className="letters">VS</h1></a>
                <a href="https://github.com/vineethsomanchi"><i className="footicon fab fa-github fa-5x"></i></a>
                <a href="https://twitter.com/vineethsomanchi"><i className="footicon fab fa-twitter fa-5x"></i></a>
            </div>
        </div>
    )
}

export default Footer;