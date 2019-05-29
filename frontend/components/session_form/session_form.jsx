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
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    Welcome to VinFlix!
          <br />
                    Please {this.props.formType} or {this.props.navLink}
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />
                        <label>Username:
              <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>Password:
              <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;