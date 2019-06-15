import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Footer from "../footer";


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: "", password: "", passwordErrors: "", emailErrors: ""};
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
        this.demo = this.demo.bind(this)
    }

    componentDidMount() {
        this.props.deleteErrors();
    }

    //Reset State
    reset() {
        this.setState({ email: "", password: "", passwordErrors: "", emailErrors: "" })
    }


    //Handles demo login button
    handleDemoSubmit(e) {
        e.preventDefault();
        
        document.getElementById("email").className = "input-focused";
        document.getElementById("email-input-label").className = "label-focused";
        document.getElementById("password").className = "input-focused";
        document.getElementById("password-input-label").className = "label-focused";

        let demoEmail = 'demo@appacademy.io'.split("");
        let demoPassword = 'demo'.split("");
        this.setState({
            email: this.state.email,
            password: this.state.password,
        }, () => this.demo(demoEmail, demoPassword));
    }

    //Simulates typing for demo login
    demo(email, password) {
        if (email.length > 0) {
            this.setState({ email: this.state.email += email.shift() },
                () => window.setTimeout(() => this.demo(email, password), 60));
        } else if (password.length > 0) {
            this.setState({ password: this.state.password += password.shift() },
                () => window.setTimeout(() => this.demo(email, password), 70));
        } else if (email.length === 0 && password.length === 0) {
            this.props.demoLogin(this.state);
        }
    }


    //Adds errors to state if they exist
    update(field) {
        return (e) => {

            //Password errors
            if ((field === "password") && (e.target.value.length < 4 || e.target.value.length > 60)) {
                this.setState( { passwordErrors: "Your password must contain between 4 and 60 characters." } );
            } else if (e.target.value.length > 4 && e.target.value.length < 60) {
                this.setState( {passwordErrors: '' } );
            }

            //Email errors
            const emails = ["@gmail.com", "@yahoo.com", "@outlook.com", "@hotmail.com", "@inbox.com", "@aol.com", "@hotmail.co.uk", "@hotmail.fr", "@msn.com", "@nyu.edu", "@appacademy.io"];
            if (field === "email") {
                let check = false;
                emails.forEach(address => {
                    if (e.target.value.includes(address)) {
                        this.setState( { emailErrors: "" }  );
                        check = true;
                    }
                })
                
                if(!check) {
                    this.setState( {emailErrors: "Please enter a valid email."})
                }
            }
            
            //Changes state for any non-error inputs
            this.setState( {[field]: e.target.value} )

            //Float label if user is typing
            if(this.state.email.length > 0) {
                document.getElementById("email").className = "input-focused";
                document.getElementById("email-input-label").className = "label-focused";
            } else {
                document.getElementById("email").className = "input";
                document.getElementById("email-input-label").className = "label";
            }
            
            if (this.state.password.length > 0) {
                document.getElementById("password").className = "input-focused";
                document.getElementById("password-input-label").className = "label-focused";
            } else {
                document.getElementById("password").className = "input";
                document.getElementById("password-input-label").className = "label";
            } 
        }
    }

    //Invoke proper processForm action (signup/login) with current state on submit
    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(() => this.props.history.push('/browse'));
    }


    render() {
        //Callback to render errors
        const renderErrors = this.props.errors.map( (error, idx) => {
            return (
                <li key={idx} className="render-error">{error}</li>
            )
        })

        //Sets input-class based on if there are errors or not
        let emailClass = "";
        let passwordClass = "";

        if(this.state.emailErrors) {
            emailClass = "email-error";
        } else {
            emailClass = "email-input";
        }

        if (this.state.passwordErrors) {
            passwordClass = "password-error";
        } else {
            passwordClass = "password-input";
        }

        return (
            <div className= "session-main">
                <div className = "session-container">
                    <div className="session-header">
                        <Link to="/"><img src={window.logo} className="session-logo" /></Link>
                        <input type="submit" onClick={this.handleDemoSubmit} value='Demo' className="session-demo-login"/>
                    </div>

                    <div className="session-body">
                        <div className="form-content">

                            <form className="actual-form">

                                <h1>{this.props.formType}</h1>

                                {renderErrors}

                                <div id="inputContainer" className={emailClass}>
                                    <input id="email" type="text" value={this.state.email} onChange={this.update('email')} className="input"/>
                                    <label htmlFor="email" id="email-input-label" className="label">Email or phone number</label>
                                </div>
                                <div className="form-errors">{this.state.emailErrors}</div>
                                
                                <div id="inputContainer" className={passwordClass}>
                                    <input id="password" type="password" value={this.state.password} onChange={this.update('password')} className="input"/>
                                    <label htmlFor="password" id="password-input-label" className="label">Password</label>
                                </div>
                                <div className="form-errors">{this.state.passwordErrors}</div>

                                <button className="session-button" onClick={this.handleSubmit}>{this.props.formType}</button>
                                
                                <div className="form-middle">

                                    <div className="remember">
                                        <input type="checkbox" className="checkbox" />
                                        <label className="remember-me"> Remember me</label>
                                    </div>

                                    <Link to="/" className="need-help"> <label className="need-help">Need help?</label></Link>

                                </div>
                            </form>
                            

                            


                            <div className="form-footer">
                            
                                <label className="switch-form">{this.props.switchForm()}</label>

                                {this.props.otherForm}

                            </div>

                        </div>
                    </div>
                    <Footer />
                </div>
                
            </div>
        );
    }    
}

export default withRouter(SessionForm);

