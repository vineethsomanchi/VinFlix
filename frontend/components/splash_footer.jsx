import React from 'react';

class SplashFooter extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <div className="content">
                    <div className="header-container">
                        <label className="header">Questions? Email VineethSomanchi@gmail.com</label>
                    </div>

                    <div className="icon-container">
                        <a href="https://www.linkedin.com/in/vineethsomanchi/"><i className="fab fa-linkedin fa-5x"></i></a>
                        <a href="https://github.com/vineethsomanchi"><i className="fab fa-github fa-5x"></i></a>
                        <a href="https://twitter.com/vineethsomanchi"><i className="fab fa-twitter fa-5x"></i></a>
                    </div>

                    <div className="end-container">
                        <label className="copyright">Recreation by Vineeth Somanchi ©</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default SplashFooter;