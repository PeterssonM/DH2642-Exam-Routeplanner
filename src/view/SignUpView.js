import React from 'react'
import './SignUp.css'
import {Link} from 'react-router-dom';

export default function SignUpView( {signup, emailRef, passwordRef, passwordConfirmRef} ) {
    return (
            <div className="signUpBox">
                <form className="signup" onSubmit={signup}>
                    <div className="signUpTitleLocation">
                        <span className="signUpTitle">Sign Up</span>
                    </div>
                    <label className="email">
                        <input 
                        ref={emailRef} type={"text"}
                        placeholder='Email'/>
                    </label>
                    <label className="password">
                        <input ref={passwordRef} type={"password"}
                        placeholder='Password' />
                    </label>
                    <label className="confirmPassword">
                        <input ref={passwordConfirmRef} type={"password"}
                        placeholder='Confirm Password' />
                    </label>
                    <label>
                        <button className='signUpButton' type="submit">Sign Up</button>
                        <Link to='/signin' style={{ textDecoration: 'none' }}>
                        <span>Already Registered User? Click here to login</span>
                        </Link>
                    </label>
                </form>
            </div>
    )
}

