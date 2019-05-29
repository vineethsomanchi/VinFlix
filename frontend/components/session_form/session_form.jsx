import React from 'react';

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
            <div className="login-container">
                <div className="login-background">
                    <form onSubmit={this.handleSubmit} className="login-form-box">      
                        <h1 className="formType-header">{this.props.formType}</h1>
                    </form>
                </div>
            </div>
        );
    }
}

export default SessionForm;