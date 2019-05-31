import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';


//Default user/state is null 
const _nullUser = Object.freeze({id: null});

const sessionReducer = (oldState = _nullUser, action) => {
    Object.freeze(oldState);
    switch (action.type) {

        //Sets id to current user ID
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id };

        //Sets id to null
        case LOGOUT_CURRENT_USER:
            return _nullUser;
            
        default:
            return oldState;
    }
};

export default sessionReducer;