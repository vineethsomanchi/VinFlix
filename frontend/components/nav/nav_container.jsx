import NavBar from './nav';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';

const msp = (state) => ({
    currentUser: state.session.id
})

const mdp = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    };
};

export default connect(msp, mdp)(NavBar);

