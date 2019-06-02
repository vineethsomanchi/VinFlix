import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login, deleteErrors } from '../../actions/session_actions';
import SessionForm from './session_form';




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