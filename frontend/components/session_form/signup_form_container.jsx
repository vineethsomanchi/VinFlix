import React from 'react';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';
import { connect } from 'react-redux';

const msp = ({ errors }) => ({
    errors: errors.session,
    formType: 'Sign Up',
    link: <Link to="/login">Log In</Link>
})

const mdp = (dispatch) => ({
    processForm: (user) => dispatch(signup(user))
})

export default connect(msp, mdp)(SessionForm);
