import * as ProfileAPIUtil from '../util/profile_api_util';



export const RECEIVE_PROFILES = 'RECEIVE_PROFILES';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const REMOVE_PROFILE = 'REMOVE_PROFILE';

const receiveProfiles = (profiles) => ({
    type: RECEIVE_PROFILES,
    profiles
})

const receiveProfile = (profile) => ({
    type: RECEIVE_PROFILE,
    profile
})

const removeProfile = (profile) => ({
    type: REMOVE_PROFILE,
    profile
})



export const fetchProfiles = () => dispatch => {
    return ProfileAPIUtil.fetchProfiles().then(profiles => {
        dispatch(receiveProfiles(profiles));
    })
}

export const fetchProfile = (id) => dispatch => {
    return ProfileAPIUtil.fetchProfile(id).then(profile => {
        dispatch(receiveProfile(profile));
    })
}

export const createProfile = (profile) => dispatch => {
    return ProfileAPIUtil.createProfile(profile).then(profile => {
        dispatch(receiveProfile(profile));
    })
}


export const updateProfile = (profile) => dispatch => {
    return ProfileAPIUtil.updateProfile(profile).then(profile => {
        dispatch(receiveProfile(profile));
    })
}

export const deleteProfile = (id) => dispatch => {
    return ProfileAPIUtil.deleteProfile(id).then(profile => {
        dispatch(removeProfile(profile));
    })
}