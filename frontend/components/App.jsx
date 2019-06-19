import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';

import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import SplashContainer from './splash/splash_container';
import VideoIndex from './videos/video_container';
import VideoPlayerContainer from './videos/video_player_container';

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="/" component={SplashContainer} />
            <ProtectedRoute exact path="/browse" component={VideoIndex} />
            <ProtectedRoute exact path="/watch/:videoId" component={VideoPlayerContainer} />
        </Switch>
    </div>
);

export default App;