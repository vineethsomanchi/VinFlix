import React from 'react'
import { Link, withRouter } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props)
        this.demo = this.demo.bind(this)
    }

    demo(e) {

        e.preventDefault();
        this.props.demoLogin({ email: "demo@gmail.com", password: "demo" }).then(() => this.props.history.push('/browse'));
    }

    render () {
        return (
            <div className="splash-main">
                <div className="splash-container"> 
                    <div className="splash-header">
                        <Link to="/"><img src={window.logo} className="splash-logo" /></Link>

                        <Link to="/login"><button className="splash-signin">Sign In</button></Link>   
                    </div>

                    <h1 className="title1">See what’s next.</h1>
                    
                    <p className="title2">WATCH ANYWHERE. CANCEL ANYTIME.</p>

                    <div className="button-container">
                        <button className="demo" onClick={this.demo}>TRY A FREE DEMO</button>
                    </div>
                    
                    <div className="splash-end">
                        <label className="have-an-account">Have an account?</label>
                        
                        <Link to="/login" className="bottom-signin"><label>Sign In</label></Link>
                    </div>

                    <div className="splash-footer-container">
                        <div className="splash-content">
                            <div className="splash-header-container">
                                <label className="splash-header">Questions? Email VineethSomanchi@gmail.com</label>
                            </div>

                            <div className="splash-icon-container">
                                <a href="https://www.linkedin.com/in/vineethsomanchi/"><i className="fab fa-linkedin fa-5x"></i></a>
                                <a href="https://github.com/vineethsomanchi"><i className="fab fa-github fa-5x"></i></a>
                                <a href="https://twitter.com/vineethsomanchi"><i className="fab fa-twitter fa-5x"></i></a>
                            </div>

                            <div className="splash-end-container">
                                <label className="splash-copyright">Recreation by Vineeth Somanchi ©</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Splash);