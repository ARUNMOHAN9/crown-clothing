import React from 'react';

import './signin-signup-page.styles.scss';

import SignIn from '../../components/signIn/signin.component';
import SignUp from '../../components/signup/signup.component';

const SigninSignupPage = () => {
    return(
        <div className="wrapper">
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    );
}

export default SigninSignupPage;