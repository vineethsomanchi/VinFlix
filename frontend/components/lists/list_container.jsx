import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchListItems, createListItem, deleteListItem } from '../../actions/list_actions';
import List from '../lists/list';

const msp = (state) => ({
    lists: Object.values(state.entities.lists)
});

const mdp = (dispatch) => ({
    fetchListItems: () => dispatch(fetchListItems()),
    createListItem: (videoId) => dispatch(createListItem(videoId)),
    deleteListItem: (id) => dispatch(deleteListItem(id))
});

export default withRouter(connect(msp, mdp)(List));