import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SessionForm from './session_form';
import { signup, deleteErrors } from '../../actions/session_actions';

const msp = ({ errors }) => ({
    errors: errors.session || [],
    formType: 'Sign Up',
    link: <Link to="/login">Sign in.</Link>
})

const mdp = (dispatch) => ({
    
    processForm: (user) => dispatch(signup(user)),
    
    switchForm: () => (
        <label>Have an account?</label>
    ),

    deleteErrors: () => dispatch(deleteErrors())
})

export default connect(msp, mdp)(SessionForm);
