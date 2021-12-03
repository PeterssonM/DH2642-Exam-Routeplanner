import React, { useRef, useState } from 'react'
import { useAuth } from './contexts/AuthContext'

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
            
        </div>
    )
}
