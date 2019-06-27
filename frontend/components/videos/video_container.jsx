import { connect } from 'react-redux';
import VideoIndex from './video_index';

import { fetchVideos } from '../../actions/video_actions'
import { fetchListItems, createListItem, deleteListItem} from '../../actions/list_actions'


const msp = (state) => ({
    videos: Object.values(state.entities.videos),
    lists: Object.values(state.entities.lists)
})

const mdp = (dispatch) => ({
    fetchVideos: () => dispatch(fetchVideos()),
    fetchListItems: () => dispatch(fetchListItems()),
    createListItem: (videoId) => dispatch(createListItem(videoId)),
    deleteListItem: (id) => dispatch(deleteListItem(id))
})



export default connect(msp, mdp)(VideoIndex);
