import React from 'react'
import './SignUp.css'
import {Link} from 'react-router-dom';

export default function SignInView( {signin, emailRef, passwordRef} ) {

    return (
        <div className="signUpBox">
            <form className="signup" onSubmit={signin}>
                <div className="signUpTitleLocation">
                    <span className="signUpTitle">Sign In</span>
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
                <label>
                    <button className='signUpButton' type="submit">Sign In</button>
                    <Link to='/signup' style={{ textDecoration: 'none' }}>
                        <span>Not a member yet? Register now</span>
                    </Link>
                </label>
            </form>
        </div>
    )
}

