import React from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }
    render (){
        const handleSubmit = (event)=>{
            event.preventDefault()
            this.setState({
                email:'',
                password:''
            })
        }
        const handleChange = (event)=>{
            const {value, name} = event.target 
            this.setState({
                [name]:value
            })
        }
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput 
                        type='email' 
                        name='email' 
                        onChange={handleChange} 
                        value={this.state.email} 
                        label='email'
                        required
                    />
                    <FormInput 
                        type='password' 
                        name='password' 
                        onChange={handleChange} 
                        value={this.state.password} 
                        label='password'
                        required
                    />
                    <CustomButton type='submit'>
                        Sign In
                    </CustomButton>
                    <CustomButton onClick= { signInWithGoogle }>
                        Sign In with Google
                    </CustomButton>
                </form>
            </div>
        )    
    }
}
export default SignIn