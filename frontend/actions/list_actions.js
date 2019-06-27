import * as ListAPIUtil from '../util/list_api_util';

export const RECEIVE_LIST_ITEM = 'RECEIVE_LIST_ITEM';
export const REMOVE_LIST_ITEM = 'REMOVE_LIST_ITEM';
export const RECEIVE_LIST_ITEMS = 'RECEIVE_LIST_ITEMS';

export const receiveListItem = (video) => ({
    type: RECEIVE_LIST_ITEM,
    video
})

export const removeListItem = (list) => ({
    type: REMOVE_LIST_ITEM,
    id: list.video_id
});

export const receiveListItems = (payload) => ({
    type: RECEIVE_LIST_ITEMS,
    payload
});

export const createListItem = (videoId) => (dispatch, getState) => {
    return ListAPIUtil.createListItem(videoId)
        .then((promise) => {
            const video = getState().entities.videos[promise.video_id];
            return dispatch(receiveListItem(video));
        })
};

export const deleteListItem = (id) => dispatch => {
    return ListAPIUtil.deleteListItem(id)
        .then((list) => {
            return dispatch(removeListItem(list));
        });
};

export const fetchListItems = () => dispatch => {
    return ListAPIUtil.fetchListItems()
        .then((payload) => dispatch(receiveListItems(payload)));
};