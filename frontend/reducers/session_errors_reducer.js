import {RECEIVE_SESSION_ERRORS, DELETE_ERRORS,} from '../actions/session_actions';

const sessionErrorsReducer = (oldState =  [], action) => {
    Object.freeze(oldState);
    switch (action.type) {

        //If there are errors, return errors
        case RECEIVE_SESSION_ERRORS:
            return action.errors;

        //If user successfully logs in, clear errors
        case DELETE_ERRORS:
            return ([]);
            
        default:
            return oldState;
    }
};

export default sessionErrorsReducer;