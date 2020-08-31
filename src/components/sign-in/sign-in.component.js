import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttom.component';

import {auth, signWithGoogle} from '../../firebase/firebase.utils';

import  './sign-in.styles.scss';

export default class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            email:'',
            password:''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();

        const {email, password} =this.state;

        try {
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email:'',password:''})

        } catch (error) {
            console.error(error);
        }
    }

    handleChange = event =>{
        const {value, name} = event.target;
        this.setState(
            {[name]:value}
        )
    }
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in your emal and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    label='Email'
                    type='email' 
                    name='email' 
                    value={this.state.email} 
                    required 
                    handleChange ={this.handleChange}
                    />

                    <FormInput 
                    label='Password'
                    type='password' 
                    name='password' 
                    value={this.state.password} 
                    required 
                    handleChange ={this.handleChange}
                    />
                    <div className='buttons'>

                    <CustomButton type='submit'> Sign In</CustomButton>
                    <CustomButton onClick ={signWithGoogle} isGoogleSignIn> Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}