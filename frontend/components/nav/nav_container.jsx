import NavBar from './nav';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';


const mdp = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    };
};

export default connect(null, mdp)(NavBar);

