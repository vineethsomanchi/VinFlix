import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';


//If logged_in render splash page
//If not logged_in render session component
const Auth = ( { component: Component, path, logged_in, exact } ) => (
    <Route path={path} exact={exact} render={(props) => (!logged_in ? (<Component {...props} />) : (<Redirect to="/" />))} />
);

//If logged_in render component
//If not logged_in, render splash page
const Protected = ( { component: Component, path, logged_in, exact } ) => (
    <Route path={path} exact={exact} render={(props) => (!!logged_in ? (<Component {...props} />) : (<Redirect to="/" />))} />
); 

//Check if session is populated with an id
const mapStateToProps = state => {
    return { logged_in: Boolean(state.session.id) };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));