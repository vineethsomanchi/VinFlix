import { RECEIVE_VIDEO } from '../actions/video_actions';
import { merge } from 'lodash';


const videoReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_VIDEO:
            return merge({}, oldState, { [action.video.id]: action.video });
        default:
            return oldState;
    }
};

export default videoReducer;