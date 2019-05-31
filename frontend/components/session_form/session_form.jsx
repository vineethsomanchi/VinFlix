import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Update state based on user input
    update(field) {
        return e => this.setState({[field]: e.currentTarget.value}); //currentTarget refers to element handler is attached to opposed to event.target which identifies element on which event occurred
    }

    //Invoke proper processForm action (signup/login) with current state on submit
    handleSubmit(e) {
        debugger
        e.preventDefault();
        this.props.processForm(this.state);
    }

    //Renders ul of li items containing each error
    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}> {error}</li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="session-container">
                
                <div className="session-header">
                    <Link to="/"><img src={window.logo} className="logo" /></Link>
                </div>

                <div className="session-body">

                    <div className="form-content">

                        <h1>{this.props.formType}</h1>

                        <form onSubmit={this.handleSubmit} className="actual-form">

                            <div id="inputContainer" className="input-container">
                                <input id="email" type="text" value={this.state.email} onChange={this.update('email')} required />
                                <label htmlFor="email">Email or phone number</label>
                            </div>
                            
                            <div id="inputContainer" className="input-container">
                                <input id="password" type="password" value={this.state.password} onChange={this.update('password')} required />
                                <label htmlFor="password">Password</label>
                            </div>

                            <button className="session-button" onClick={this.handleSubmit}>{this.props.formType}</button>
                            
                        </form>
                        
                    </div>
                </div>
            </div>
        );
    }    
}

export default SessionForm;

