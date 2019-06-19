import { connect } from 'react-redux';
import VideoPlayer from './video_player';

import { fetchVideo } from '../../actions/video_actions';

const msp = (state, ownProps) => {
    const video = state.entities.videos[ownProps.match.params.videoId] || null;
    return {
        video: video
    } 
}

const mdp = (dispatch) => ({
    fetchVideo: (id) => dispatch(fetchVideo(id))
})

export default connect(msp, mdp)(VideoPlayer);