import * as VideoAPIUtil from '../util/video_api_util';


export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";

const receiveVideos = (videos) => ({
    type: RECEIVE_VIDEOS,
    videos
})

const receiveVideo = (video) => ({
    type: RECEIVE_VIDEO,
    video
})

export const fetchVideos = (category) => dispatch => (VideoApiUtil.fetchVideos(category).then(videos => dispatch(receiveVideos(videos))));
export const fetchVideo = (id) => dispatch => {
    debugger
    return VideoAPIUtil.fetchVideo(id).then(video => {
        debugger
        dispatch(receiveVideo(video));
    })
}
