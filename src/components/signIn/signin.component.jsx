import React from 'react';

import  CustomInput from '../custom-input/custom-input.component';
import CustomButton from '../custom-button/custom-button.component';

const SignIn = () => {
    return(
        <div className="signIn_wrapper">
            <h1>I already have an account</h1>
            <h2>Sign in with your email and password</h2>
            <CustomInput type={'email'} label={'Email'} required/>
            <CustomInput type={'password'} label={'Password'} required/>
            <CustomButton classes="primary-btn">Submit</CustomButton>
        </div>
    );
}

export default SignIn;