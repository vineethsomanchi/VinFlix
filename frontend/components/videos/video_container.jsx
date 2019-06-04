import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { logout } from '../../actions/session_actions';


const mdp = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    };
};

export default connect(null, mdp)(VideoIndex);