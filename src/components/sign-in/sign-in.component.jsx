import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import './sign-in.styles.scss';


class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',

        }

    };

    handleSubmit = async event => {

        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState( { email: '', password: '' } );
        } catch (erornya) {
            console.log(erornya);
        };

        this.setState({
            email: '',
            password: '',
        })
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState( { [name]: value } )
    };

    render() {

        const {handleSubmit, state, handleChange} = this;

        return(
            <div className="sign-in">

                <h2>I think I have already singed up</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>

                    <FormInput 
                        name="email" 
                        type="email" 
                        handleChange={handleChange}
                        value={state.email} 
                        label='email'
                        required                             
                    />

                    <FormInput 
                        name="password" 
                        type="password" 
                        value={state.password} 
                        handleChange={handleChange}
                        label='password'
                        required 
                    />                 
                        
                    <div className="buttons">
                        <CustomButton 
                            type="submit"
                        > 
                        Sign In 
                        </CustomButton>  
                        <CustomButton 
                            onClick={signInWithGoogle} 
                            isGoogleSignIn
                        > 
                        Pake google gw 
                        </CustomButton>  
                    </div>

                </form>

            </div>
        )
    }
};

export default SignIn;