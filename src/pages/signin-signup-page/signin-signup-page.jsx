import React from 'react';

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