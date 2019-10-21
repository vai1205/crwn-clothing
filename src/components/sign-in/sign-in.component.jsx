import React from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth, signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }
    render (){
        const handleSubmit = async event =>{
            event.preventDefault()
            const {email, password} = this.state
            try{
                await auth.signInWithEmailAndPassword(email, password)
                this.setState({
                    email:'',
                    password:''
                })
                alert('Sign in success!')
            } catch(error){
                console.log(error)
            }
        }
        const handleChange = (event)=>{
            const {value, name} = event.target 
            this.setState({
                [name]:value
            })
        }
        return(
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput 
                        type='email' 
                        name='email' 
                        onChange={handleChange} 
                        value={this.state.email} 
                        label='Email'
                        required
                    />
                    <FormInput 
                        type='password' 
                        name='password' 
                        onChange={handleChange} 
                        value={this.state.password} 
                        label='Password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>
                        Sign In
                        </CustomButton>
                        <CustomButton onClick= { signInWithGoogle } isGoogleSignIn>
                            Sign In with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )    
    }
}
export default SignIn