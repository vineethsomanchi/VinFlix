import { merge } from 'lodash';
import { RECEIVE_PROFILES, RECEIVE_PROFILE, REMOVE_PROFILE } from '../actions/profile_actions';


const profileReducer = (oldState = {}, action) => {
    let newState;
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_PROFILES:
            return action.profiles;
        case RECEIVE_PROFILE:
            debugger
            return merge({}, oldState, { [action.profile.id]: action.profile });
        case REMOVE_PROFILE:
            newState = merge({}, oldState)
            debugger
            delete newState[action.profile.id]
            debugger
            return newState;
        default:
            return oldState;
    }
};


export default profileReducer;