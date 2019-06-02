import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { SSL_OP_NO_QUERY_MTU } from 'constants';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: "", password: "", passwordErrors: "", emailErrors: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        this.props.deleteErrors();
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


        }
    }

    //Invoke proper processForm action (signup/login) with current state on submit
    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }


    render() {

        //Callback to render errors
        const renderErrors = this.props.errors.map( (error, idx) => {
            return (
                <li key={idx} className="render-error">{error}</li>
            )
        })

        //Sets input-class based on if there are errors or not
        let inputClass = "";

        if(this.state.emailErrors) {
            inputClass = "form-input-error";
        } else {
            inputClass = "form-input";
        }

        return (
            <div className="session-container">
                
                <div className="session-header">
                    <Link to="/"><img src={window.logo} className="logo" /></Link>
                </div>

                <div className="session-body">

                    <div className="form-content">

                        <h1>{this.props.formType}</h1>

                        <form className="actual-form">

                            {renderErrors}

                            <div id="inputContainer" className={inputClass}>
                                <input id="email" type="text" value={this.state.email} onChange={this.update('email')} required />
                                <label htmlFor="email">Email or phone number</label>
                            </div>
                            <div className="form-errors">{this.state.emailErrors}</div>
                            
                            <div id="inputContainer" className={inputClass}>
                                <input id="password" type="password" value={this.state.password} onChange={this.update('password')} required />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="form-errors">{this.state.passwordErrors}</div>

                            <button className="session-button" onClick={this.handleSubmit}>{this.props.formType}</button>
                            
                        </form>
                        
                    </div>
                </div>
            </div>
        );
    }    
}

export default withRouter(SessionForm);

