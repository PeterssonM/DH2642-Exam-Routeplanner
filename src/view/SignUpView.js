import React from 'react'
import './SignUp.css'

export default function SignUpView( {signup, emailRef, passwordRef, passwordConfirmRef} ) {
    return (
            <div className="signUpBox">
                <form className="signup" onSubmit={signup}>
                    <div>
                        <input ref={emailRef} type={"text"}/>
                    </div>
                    <div>
                        <input ref={passwordRef} type={"password"} />
                    </div>
                    <div>
                        <input ref={passwordConfirmRef} type={"password"} />
                    </div>
                    <div>
                        <button type="submit">Signup</button>
                    </div>
                </form>
            </div>
    )
}

