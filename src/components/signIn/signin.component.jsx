import React from 'react';

import {signInWithGoogle} from '../../config-files/firebase/firebase.utils';

import  CustomInput from '../custom-input/custom-input.component';
import CustomButton from '../custom-button/custom-button.component';

const SignIn = () => {
    return(
        <div className="signIn_wrapper">
            <h1>I already have an account</h1>
            <h2>Sign in with your email and password</h2>
            <CustomInput type={'email'} label={'Email'} required/>
            <CustomInput type={'password'} label={'Password'} required/>
            <CustomButton type="submit" classes="primary-btn">Submit</CustomButton>
            <CustomButton type="button" classes="secondary-btn" onClick={signInWithGoogle}>Sign in with Google</CustomButton>
        </div>
    );
}

export default SignIn;