import React from 'react';

import { auth, createUserProfile } from '../../config-files/firebase/firebase.utils';

import CustomInput from '../custom-input/custom-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignUp extends React.Component {

    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            alert('Passwords dont match');
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfile(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
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
            <div className="signUp_wrapper">
                <h1>I don't have an account</h1>
                <h2>Sign up with email and password</h2>
                <form>
                    <CustomInput trigger={this.handleChange} name={'displayName'} value={this.state.displayName} type={'text'} label={'Name'} required />
                    <CustomInput trigger={this.handleChange} name={'email'} value={this.state.email} type={'email'} label={'Email'} required />
                    <CustomInput trigger={this.handleChange} name={'password'} value={this.state.password} type={'password'} label={'Password'} required />
                    <CustomInput trigger={this.handleChange} name={'confirmPassword'} value={this.state.confirmPassword} type={'password'} label={'Confirm password'} required />
                    <CustomButton type={'submit'} trigger={this.handleSubmit} classes={'primary-btn'}>Sign up</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;