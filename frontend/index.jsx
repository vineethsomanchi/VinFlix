import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { fetchVideos, fetchVideo } from './actions/video_actions';

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


    let video = {title: "Vinny's day off", year: 2019, maturity_rating: "NC-17", runtime: "a minute", description: "vinny sleeps all day", my_list: true}
    //For testing 
    window.video = video;
    window.store = store;
    window.fetchVideos = fetchVideos;
    window.fetchVideo = fetchVideo;
    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});