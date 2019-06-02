import React from 'react';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';
import { connect } from 'react-redux';



const msp = ({ errors }) => {
    return {
        errors: errors.session || [],
        formType: 'Sign In',
        otherForm: <Link to="/signup">Sign up now.</Link>,
    };
};

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),

        switchForm: () => (
            <label>New to Netflix?</label>
        ),

        deleteErrors: () => dispatch(deleteErrors())
    };
};

export default connect(msp, mdp)(SessionForm);