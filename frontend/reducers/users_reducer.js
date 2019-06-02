import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);   
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // return { [action.currentUser.id]: action.currentUser }
            return merge({}, oldState, { [action.currentUser.id]: action.currentUser });
        default:
            return oldState;
    }
};

export default usersReducer;