import React from 'react';
import { AuthRoute } from '../util/route_util';

import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import SplashContainer from './splash/splash_container'

const App = () => (
    <div>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/" component={SplashContainer} />
    </div>
);

export default App;