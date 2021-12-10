import React, { useRef, useState } from 'react'
import firebase from "../firebase"

export default function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    function signup() {

    }

    return (
        <div>
            <form className="signup">
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
