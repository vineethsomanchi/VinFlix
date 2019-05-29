import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to VinFlix!</h1>, root);
});

//Temporarily added directly to window for testing
window.signup = SessionApiUtil.signup;
window.login = SessionApiUtil.login;
window.logout = SessionApiUtil.logout;
