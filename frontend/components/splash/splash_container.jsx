import React from 'react';
import { connect } from 'react-redux';
import Splash from "./splash";

const mdp = dispatch => ({
    demoLogin: (user) => dispatch(login(user))
})

export default connect(null, mdp)(Splash);
