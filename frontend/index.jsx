import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { signup, login, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    let store;

    if (window.currentUser) {

        //Define preloaded state with current user
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;

    //If no current user, configure store with no preloaded state
    } else {
        store = configureStore();
    }

    window.store = store;
    window.logout = logout;
    window.login = login;
    window.signup = signup;
    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});