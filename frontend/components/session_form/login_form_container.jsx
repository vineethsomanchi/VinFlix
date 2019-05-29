import React from 'react';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';
import { connect } from 'react-redux';



const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
        link: <Link to="/signup">Sign Up</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);