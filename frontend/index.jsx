import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { fetchProfiles, fetchProfile, createProfile, updateProfile, deleteProfile  } from './actions/profile_actions';

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


   
    //For testing 
    window.store = store;
    window.fetchProfiles = fetchProfiles;
    window.fetchProfile = fetchProfile;
    window.createProfile = createProfile;
    window.updateProfile = updateProfile;
    window.deleteProfile = deleteProfile;

    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});