import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER,} from '../actions/session_actions';

const sessionErrorsReducer = (oldState =  [], action) => {
    Object.freeze(oldState);
    switch (action.type) {

        //If there are errors, return errors
        case RECEIVE_SESSION_ERRORS:
            return action.errors;

        //If user successfully logs in, clear errors
        case RECEIVE_CURRENT_USER:
            return [];
            
        default:
            return oldState;
    }
};

export default sessionErrorsReducer;