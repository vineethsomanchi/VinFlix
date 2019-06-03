import React from 'react'
import { Link, withRouter } from 'react-router-dom';

import SplashFooter from '../splash_footer'

class Splash extends React.Component {

    demo(e) {
        e.preventDefault();
        this.props.demoLogin( {email: "demo@gmail.com", password: "demo"} )
    }

    render () {
        return (
            <>
                <div className="background">

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


                </div>

                <SplashFooter/>

            </>
        )
    }
}

export default withRouter(Splash);