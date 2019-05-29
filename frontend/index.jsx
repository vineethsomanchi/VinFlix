import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to VinFlix!</h1>, root);
});

window.signup = SessionApiUtil.signup;
window.login = SessionApiUtil.login;
window.logout = SessionApiUtil.logout;