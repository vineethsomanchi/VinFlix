import * as SessionAPIUtil from '../util/session_api_util';

//Types (Used by reducer)
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const DELETE_ERRORS = "DELETE_ERRORS";

//Regular action creators
export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const deleteErrors = () => ({
    type: DELETE_ERRORS
})


//Thunk action creators
export const signup = user => dispatch => (SessionAPIUtil.signup(user).then(user => (dispatch(receiveCurrentUser(user))), err => (dispatch(receiveErrors(err.responseJSON)))));

export const login = user => dispatch => (SessionAPIUtil.login(user).then(user => (dispatch(receiveCurrentUser(user))), err => (dispatch(receiveErrors(err.responseJSON)))));

export const logout = () => dispatch => (SessionAPIUtil.logout().then(() => (dispatch(logoutCurrentUser()))), (err) => dispatch(receiveErrors(err.responseJSON)));





