import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import videoReducer from './video_reducer';
import listReducer from './lists_reducer';

const entitiesReducer = combineReducers ({
    users: usersReducer,
    videos: videoReducer,
    lists: listReducer
})

export default entitiesReducer;