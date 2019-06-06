import { RECEIVE_VIDEO, RECEIVE_VIDEOS } from '../actions/video_actions';
import { merge } from 'lodash';


const videoReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_VIDEOS:
            return action.videos;
        case RECEIVE_VIDEO:
            return merge({}, oldState, { [action.video.id]: action.video });
        default:
            return oldState;
    }
};

export default videoReducer;