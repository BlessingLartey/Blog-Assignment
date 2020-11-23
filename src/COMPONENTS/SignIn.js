import React, { useState } from 'react'

export default function SignIn(){

    const[email, setEmail] = useState('')
    const[password, setPassword] =useState('')

    const handleEmailInput =(event) =>{
        setEmail (event.target.value)
    }

    const handlePasswordInput =(event) =>{
        setPassword(event.target.value)
    }
    
    return(
        <form>
            <label>Email:</label>
            <input type='email' name='email' value={email} onChange={handleEmailInput}/>
            <br></br>
            <label>Password:</label>
            <input type='password' name='password' value={password} onChange={handlePasswordInput}/>
            <br></br>

        </form>
    )
}