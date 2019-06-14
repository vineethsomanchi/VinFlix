import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import videoReducer from './video_reducer';
import profileReducer from './profiles_reducer';

const entitiesReducer = combineReducers ({
    users: usersReducer,
    videos: videoReducer,
    profiles: profileReducer
})

export default entitiesReducer;