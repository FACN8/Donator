import React from 'react'
import './style.css'
import SignUpInputs from '../../components/SignUpInputs'


const SignUp = () => {

    return (
        <div className="SignUpPage">
                <h1 id="signUpHead">Signup Page</h1>
                <SignUpInputs />
                <img className="displayed" src={require('./signUpImage.jpeg')} alt="Logo" />
        </div>
    )
}

export default SignUp



