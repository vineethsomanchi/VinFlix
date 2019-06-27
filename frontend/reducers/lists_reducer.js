import { merge } from 'lodash';
import { RECEIVE_LIST_ITEM, REMOVE_LIST_ITEM, RECEIVE_LIST_ITEMS } from "../actions/list_actions";

const listsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_LIST_ITEM:
            return merge({}, oldState, { [action.video.id]: action.video });
        case REMOVE_LIST_ITEM:
            let newState = merge({}, oldState, {});
            delete newState[action.id];
            return newState;
        case RECEIVE_LIST_ITEMS:
            return merge({}, action.payload.videos)
        default:
            return oldState;
    }
};

export default listsReducer;