import { connect } from 'react-redux';
import VideoIndex from './video_index';

import { fetchVideos } from '../../actions/video_actions'


const msp = (state) => ({
    videos: Object.values(state.entities.videos)
})

const mdp = (dispatch) => ({
    fetchVideos: () => dispatch(fetchVideos())
})



export default connect(msp, mdp)(VideoIndex);
