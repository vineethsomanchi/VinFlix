import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SessionForm from './session_form';
import { signup, deleteErrors } from '../../actions/session_actions';

const msp = ({ errors }) => ({
    errors: errors.session || [],
    formType: 'Sign Up',
    otherForm: <Link to="/login" className="other-form">Sign in.</Link>
})

const mdp = (dispatch) => ({
    
    processForm: (user) => dispatch(signup(user)),
    
    switchForm: () => (
        <label>Have an account?</label>
    ),

    deleteErrors: () => dispatch(deleteErrors()),

    demoLogin: (user) => dispatch(login(user))
})

export default connect(msp, mdp)(SessionForm);
