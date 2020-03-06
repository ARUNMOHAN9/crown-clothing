import React from 'react';

import { signInWithGoogle, auth } from '../../config-files/firebase/firebase.utils';

import './signin.component.styles.scss';

import CustomInput from '../custom-input/custom-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async (e) => {
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = (e) => {
        const key = e.target.name;
        this.setState({ [key]: e.target.value });
    }

    render() {
        return (
            <div className="signIn_wrapper">
                <h1>I already have an account</h1>
                <h2>Sign in with your email and password</h2>
                <CustomInput trigger={this.handleChange} value={this.state.email} name={'email'} type={'email'} label={'Email'} required />
                <CustomInput trigger={this.handleChange} value={this.state.password} name={'password'} type={'password'} label={'Password'} required />
                <div className="btn-container">
                    <CustomButton trigger={this.handleSubmit} type="submit" classes="primary-btn">Sign in</CustomButton>
                    <CustomButton type="button" classes="secondary-btn" onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                </div>
            </div>
        );
    }
}

export default SignIn;