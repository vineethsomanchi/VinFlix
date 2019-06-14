import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import Footer from '../footer';

class Splash extends React.Component {
    constructor(props) {
        super(props)
        this.demo = this.demo.bind(this)
    }

    demo(e) {

        e.preventDefault();
        this.props.demoLogin({ email: "demo@appacademy.io", password: "demo" }).then(() => this.props.history.push('/browse'));
    }

    render () {
        return (
            <div className="splash-main">
                <div className="splash-container"> 
                    <div className="splash-header-container">     
                        <img src={window.logo} className="splash-logo" />
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
                </div>

                <Footer />
            </div>
        )
    }
}

export default withRouter(Splash);