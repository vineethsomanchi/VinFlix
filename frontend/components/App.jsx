import React from 'react';
import { AuthRoute } from '../util/route_util';

import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';

const App = () => (
    <div>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;