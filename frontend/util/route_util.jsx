import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';


//If loggedin redirect to splash page
//If not loggedin redirect to proper component
const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (!loggedIn ? (<Component {...props} />) : (<Redirect to="/" />))} />
);

//Check if session is populated with an id
const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));