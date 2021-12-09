import React, { useRef, useState } from 'react'
import { useAuth } from '../generatedFiles/contexts/AuthContext'
import Field from "../view/FieldView"

export default function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    const { signup } = useAuth()

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Password does not match with confirm password")
        }

        try {
            setLoading(true)
            setError("")
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)
    }

    return (
        <div>
            <form className="signup">
                <Field ref={emailRef} label={"Email: "} type={"text"} />
                <Field ref={passwordRef} label={"Password: "} type="password" />
                <Field ref={passwordConfirmRef} label={"Confirm password: "} type={"password"} />
                <div>
                    <button type="submit">Signup</button>
                </div>
            </form>
        </div>
    )
}
