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


    let video = { title: "Avengers: Endgame", year: 2019, maturity_rating: "PG-13", runtime: "3h 1m", description: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.", my_list: true}
    //For testing 
    window.video = video;
    window.store = store;
    window.fetchVideos = fetchVideos;
    window.fetchVideo = fetchVideo;
    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});